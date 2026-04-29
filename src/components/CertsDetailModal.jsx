import { useEffect, useState, useCallback, useRef } from "react";
import { Gsap, GsapPresence } from "../utils/gsapAnimate";
import { createPortal } from "react-dom";
import { X, Award, ChevronLeft, ChevronRight, FileCheck } from "lucide-react";

/* ─── Certificate data ───────────────────────────────────── */
const certificates = [
  {
    src: "/certs/cert.webp",
    alt: "Sertifikat OSPAN 2023 — PKN",
    event: "OSPAN 2023",
    subject: "PKN",
    no: "1184242/S/YPI/OSPAN/X/2023",
    date: "15 Oktober 2023",
    location: "Banjarnegara",
    issuer: "Yapresindo · OSPAN",
  },
  {
    src: "/certs/cert2.webp",
    alt: "Sertifikat OSPAN 2023 — Bahasa Inggris",
    event: "OSPAN 2023",
    subject: "Bahasa Inggris",
    no: "1184243/S/YPI/OSPAN/X/2023",
    date: "15 Oktober 2023",
    location: "Banjarnegara",
    issuer: "Yapresindo · OSPAN",
  },
  {
    src: "/certs/cert3.webp",
    alt: "Sertifikat OPN 2023 — Bahasa Indonesia",
    event: "OPN 2023",
    subject: "Bahasa Indonesia",
    no: "1079977/S/YPI/OPN/IX/2023",
    date: "3 September 2023",
    location: "Banjarnegara",
    issuer: "Yapresindo · OPN",
  },
];

/* ─── Image Carousel ─────────────────────────────────────── */
function CertCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStart = useRef(null);
  const len = certificates.length;

  const go = useCallback(
    (dir) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + len) % len);
    },
    [len],
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const cert = certificates[current];

  return (
    <div className="w-full">
      {/* Main image */}
      <div
        className="relative bg-neutral-100 overflow-hidden aspect-[1.41/1] border border-black/10 rounded-[2px]"
        onTouchStart={(e) => {
          touchStart.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (!touchStart.current) return;
          const diff = e.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(diff) > 50) go(diff < 0 ? 1 : -1);
          touchStart.current = null;
        }}
      >
        <GsapPresence initial={false} custom={direction} mode="wait">
          <Gsap.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0"
          >
            <img
              src={cert.src}
              alt={cert.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain"
            />
          </Gsap.div>
        </GsapPresence>

        <button
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/60 backdrop-blur-md rounded-full shadow-sm flex items-center justify-center hover:bg-white text-black/60 hover:text-black transition-all"
          aria-label="Previous"
        >
          <ChevronLeft size={20} strokeWidth={2} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/60 backdrop-blur-md rounded-full shadow-sm flex items-center justify-center hover:bg-white text-black/60 hover:text-black transition-all"
          aria-label="Next"
        >
          <ChevronRight size={20} strokeWidth={2} />
        </button>

        <div className="absolute bottom-4 right-4 z-10 bg-black/40 backdrop-blur-md text-white px-3 py-1.5 rounded-full font-mono text-[10px] tracking-[0.12em]">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(len).padStart(2, "0")}
        </div>
      </div>

      {/* Meta info for current cert */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          { label: "Event", value: cert.event },
          { label: "Bidang", value: cert.subject },
          { label: "Tanggal", value: cert.date },
          { label: "Issuer", value: cert.issuer },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-black/[0.03] border border-black/[0.07] rounded-[2px] px-3 py-2.5"
          >
            <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-black/35 mb-1">
              {item.label}
            </p>
            <p className="font-bold text-[12px] text-black/80">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Cert number */}
      <p className="mt-2 font-mono text-[9px] text-black/30 tracking-[0.1em]">
        No. {cert.no}
      </p>

      {/* Thumbnail strip */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
        {certificates.map((c, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`shrink-0 flex flex-col items-center gap-1.5 transition-all duration-300 ${i === current ? "opacity-100" : "opacity-35 hover:opacity-70"}`}
          >
            <div
              className={`w-24 h-16 rounded-[2px] overflow-hidden ${i === current ? "ring-2 ring-black ring-offset-2" : ""}`}
            >
              <img
                src={c.src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-black/50">
              {c.subject}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Modal ─────────────────────────────────────────── */
export default function CertDetailModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  return createPortal(
    <GsapPresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6 lg:p-10">
          {/* Backdrop */}
          <Gsap.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <Gsap.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            data-lenis-prevent
            className="relative z-10 w-full h-full md:h-auto md:max-h-[90vh] max-w-4xl bg-[#FAF9F6] shadow-2xl md:rounded-lg overflow-y-auto overscroll-contain flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky header */}
            <div className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-black/5">
              <div className="px-6 md:px-10 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileCheck size={14} className="text-lime-500" />
                  <span className="font-mono text-[10px] uppercase font-bold tracking-[0.16em] text-black">
                    Sertifikat Peserta Aktif
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 md:px-10 pt-8 pb-16">
              {/* Title block */}
              <div className="mb-8">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-black/35 mb-3">
                  Olimpiade Tingkat Nasional · 2023
                </p>
                <h1 className="text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tighter text-black mb-4">
                  OSPAN &{" "}
                  <span
                    className="text-transparent"
                    style={{ WebkitTextStroke: "2px black" }}
                  >
                    OPN
                  </span>
                </h1>
                <p className="text-sm md:text-base leading-7 text-black/55 max-w-2xl">
                  Berpartisipasi sebagai{" "}
                  <strong className="text-black">Peserta Aktif</strong> di
                  kompetisi olimpiade tingkat nasional yang diselenggarakan oleh
                  Yapresindo di Banjarnegara tahun 2023, dalam 3 bidang studi
                  berbeda.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 mb-8 max-w-xs md:max-w-sm">
                {[
                  { value: "3", label: "Sertifikat" },
                  { value: "Nasional", label: "Tingkat" },
                  { value: "2023", label: "Tahun" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="border border-black/[0.09] rounded-[3px] py-3 px-3 bg-white"
                  >
                    <p className="font-black text-[18px] md:text-[22px] text-black leading-none">
                      {s.value}
                    </p>
                    <p className="font-mono text-[7px] uppercase tracking-[0.1em] text-black/35 mt-1.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* ── 2-column layout for md+ ── */}
              <div className="grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] gap-6 md:gap-8 items-start">
                {/* LEFT — Carousel */}
                <div className="border border-black/[0.07] rounded-lg p-3 bg-white shadow-sm">
                  <CertCarousel />
                </div>

                {/* RIGHT — Info + List */}
                <div className="flex flex-col gap-6">
                  {/* Bidang list */}
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/35 mb-3 flex items-center gap-2">
                      <Award size={11} className="text-lime-500" /> Bidang yang
                      Diikuti
                    </p>
                    <div className="divide-y divide-black/[0.06]">
                      {certificates.map((c, i) => (
                        <div key={i} className="flex items-start gap-3 py-3">
                          <span className="mt-0.5 font-mono text-[9px] text-black/25 font-bold tabular-nums border border-black/[0.08] px-1.5 py-0.5 rounded-[2px] shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-[13px] text-black leading-snug">
                              {c.subject}
                            </p>
                            <p className="font-mono text-[8px] text-black/35 uppercase tracking-[0.1em] mt-0.5">
                              {c.event}
                            </p>
                            <p className="font-mono text-[8px] text-black/30 mt-0.5">
                              {c.date}
                            </p>
                          </div>
                          <span className="shrink-0 font-mono text-[7.5px] uppercase tracking-[0.12em] border border-black/[0.1] px-2 py-0.5 rounded-[2px] text-black/40 mt-0.5">
                            Aktif
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-black/[0.06]" />

                  {/* Footer info */}
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-black/30 mb-1">
                        Sekolah
                      </p>
                      <p className="font-bold text-[12px] text-black">
                        SMKS YASPIH
                      </p>
                      <p className="font-mono text-[9px] text-black/40">
                        Prov. Banten
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-black/30 mb-1">
                        Penyelenggara
                      </p>
                      <p className="font-bold text-[12px] text-black">
                        Yapresindo
                      </p>
                      <p className="font-mono text-[7px] text-black/30 mt-0.5 leading-relaxed">
                        No. AHU-0010055.AH.01.04. Tahun 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Gsap.div>
        </div>
      )}
    </GsapPresence>,
    document.body,
  );
}
