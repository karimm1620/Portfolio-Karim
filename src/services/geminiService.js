import { generateSystemPrompt, buildScopedContext } from "./aiContext";

const API_KEY = (
  import.meta.env.VITE_GEMINI_API_KEY ||
  import.meta.env.REACT_APP_GEMINI_API_KEY ||
  ""
).trim();

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:streamGenerateContent`;

const classifyError = (error) => {
  const msg = error?.message?.toLowerCase() || "";
  const status = error?.status || error?.statusCode || 0;

  if (
    (typeof navigator !== "undefined" && !navigator.onLine) ||
    msg.includes("network") ||
    msg.includes("fetch") ||
    msg.includes("failed to fetch")
  ) {
    return {
      type: "network",
      message: "Connection lost. Check your internet and try again.",
    };
  }
  if (status === 429 || msg.includes("rate limit") || msg.includes("quota")) {
    return {
      type: "rate_limit",
      message: "Too many requests. Please wait a moment.",
    };
  }
  if (status >= 500 || msg.includes("server") || msg.includes("internal")) {
    return {
      type: "server",
      message: "Server is temporarily unavailable. Try again shortly.",
    };
  }
  if (
    status === 401 ||
    status === 403 ||
    msg.includes("api key") ||
    msg.includes("permission")
  ) {
    return {
      type: "auth",
      message: "Authentication error. Check your Gemini API key.",
    };
  }
  return {
    type: "unknown",
    message: "Something went wrong. Please try again.",
  };
};

function convertToGeminiContents(messages) {
  const converted = [];

  for (const msg of messages) {
    if (msg.role === "system") continue;

    const role = msg.role === "assistant" ? "model" : "user";
    const text = msg.content || "";

    if (converted.length > 0 && converted[converted.length - 1].role === role) {
      converted[converted.length - 1].parts[0].text += "\n" + text;
    } else {
      converted.push({ role, parts: [{ text }] });
    }
  }

  if (converted.length === 0 || converted[0].role !== "user") {
    converted.unshift({ role: "user", parts: [{ text: "Halo" }] });
  }

  if (converted[converted.length - 1].role === "model") {
    converted.push({ role: "user", parts: [{ text: "(lanjutkan)" }] });
  }

  return converted;
}

export async function* streamGemini(messages) {
  if (!API_KEY) {
    const error = new Error("Missing Gemini API key");
    error.status = 401;
    throw classifyError(error);
  }

  const systemPrompt = generateSystemPrompt();
  const latestUserMessage =
    [...messages].reverse().find((m) => m.role === "user")?.content || "";
  const scopedContext = buildScopedContext(latestUserMessage);

  const systemInstruction = [systemPrompt, scopedContext]
    .filter(Boolean)
    .join("\n\n");
  const contents = convertToGeminiContents(messages);

  const url = `${GEMINI_BASE_URL}?key=${API_KEY}&alt=sse`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: systemInstruction }],
        },
        contents,
        generationConfig: {
          temperature: 0.35,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      const error = new Error(
        errorBody?.error?.message || `Gemini API error: ${response.status}`,
      );
      error.status = response.status;
      throw error;
    }

    const reader = response.body?.getReader();
    if (!reader) return;

    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.startsWith("data:")) continue;
        const data = line.slice(5).trim();
        if (!data || data === "[DONE]") continue;

        try {
          const parsed = JSON.parse(data);
          const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) yield text;
        } catch {
          // ignore invalid SSE frames
        }
      }
    }

    if (buffer.trim().startsWith("data:")) {
      const data = buffer.trim().slice(5).trim();
      if (data && data !== "[DONE]") {
        try {
          const parsed = JSON.parse(data);
          const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) yield text;
        } catch {
          /* ignore */
        }
      }
    }
  } catch (error) {
    throw classifyError(error);
  }
}
