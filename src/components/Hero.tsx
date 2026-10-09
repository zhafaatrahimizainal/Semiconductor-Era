import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDown, ShieldCheck, Activity, Cpu } from 'lucide-react';
import heroWaferImg from '../assets/images/hero_semiconductor_wafer_1791246501244.jpg';

interface HeroProps {
  onOpenRfp: () => void;
}

const FAB_LOGS = [
  "HIGH-NA EUV SCANNER — 0.55 NA anamorphic optics locked at 13.5nm wavelength. 250W source power stable.",
  "DEFECT DENSITY AUDIT — 0.0018/cm² verified across 300mm pure monocrystalline wafer run.",
  "NANOSHEET YIELD — 1.8nm Gate-All-Around test vehicles demonstrate 99.4% dielectric integrity.",
  "CLEANROOM TELEMETRY — ISO 14644-1 Class 1 ambient: 0.00 particulates >0.1µm/m³. RH 42.0%.",
  "3D HYBRID BONDING — Direct Cu-Cu die interconnect pitch < 0.8µm verified with zero interface voids.",
  "ATOMIC LAYER DEPOSITION — High-κ dielectric thickness uniform within ±0.03nm across entire wafer."
];

const FAB_PHASES = [
  {
    step: "01",
    label: "300mm Ingot Growth",
    sub: "Czochralski Single Crystal",
    detail: "Zero-dislocation monocrystalline silicon pulled at 1,425°C with 99.9999999% elemental purity."
  },
  {
    step: "02",
    label: "High-NA EUV Litho",
    sub: "Sub-2nm Resolution",
    detail: "0.55 NA anamorphic projection optics delivering 8nm half-pitch printing in single exposure."
  },
  {
    step: "03",
    label: "Atomic Layer Etch",
    sub: "GAA Nanosheet Stacks",
    detail: "Precision gas-phase chemical etch with sub-angstrom monolayer control for 4-tier nanosheet gates."
  },
  {
    step: "04",
    label: "In-Line Metrology",
    sub: "AFM & TEM Verification",
    detail: "Real-time high-throughput multi-beam scanning electron microscopy detecting sub-nanometer anomalies."
  },
  {
    step: "05",
    label: "3D Chiplet Hybrid",
    sub: "Sub-Micron Interconnect",
    detail: "Direct copper-to-copper dielectric fusion bonding enabling >10 TB/s/mm² die-to-die bandwidth."
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenRfp }) => {
  // Typewriter state
  const [logIndex, setLogIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Scheduler phase state
  const [activePhase, setActivePhase] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentFullLog = FAB_LOGS[logIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentFullLog.length) {
      timer = setTimeout(() => {
        setDisplayText(currentFullLog.slice(0, displayText.length + 1));
      }, 45);
    } else if (!isDeleting && displayText.length === currentFullLog.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3500);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentFullLog.slice(0, displayText.length - 1));
      }, 20);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setLogIndex((prev) => (prev + 1) % FAB_LOGS.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, logIndex]);

  // Scheduler auto-cycling
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % FAB_PHASES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden bg-[#111210] pt-32 pb-16 md:pb-24 px-6 md:px-12 lg:px-16"
    >
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroWaferImg}
          alt="SemiconductorEra 300mm silicon wafer fabrication in cleanroom"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 opacity-35 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111210] via-[#111210]/85 to-[#111210]/40" />
        <div className="absolute inset-0 silicon-grid opacity-60 pointer-events-none" />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-end">
        
        {/* Top Badging / Verification marker */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#EDE9E0]/60 uppercase tracking-widest mb-4">
          <span className="flex items-center gap-1.5 text-[#E8622A]">
            <ShieldCheck className="w-3.5 h-3.5" />
            ISO 14644-1 Class 1 Foundry
          </span>
          <span aria-hidden="true" className="text-[#2C2C2A]">/</span>
          <span>High-NA 0.55 EUV Active</span>
          <span aria-hidden="true" className="text-[#2C2C2A]">/</span>
          <span>300mm Monocrystalline Substrates</span>
        </div>

        {/* Hero Typography - Matching Reference Style */}
        <div className="mb-8">
          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight text-[#E8622A] uppercase mb-1 md:mb-2">
            Sub-Atomic Silicon Fabrication is
          </h2>
          <h1 className="font-['Cormorant_Garamond'] font-semibold text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] leading-[0.88] text-[#EDE9E0] tracking-tight">
            Our Epoch.
          </h1>
        </div>

        {/* Narrative & Dual Action Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 border-b border-[#2C2C2A] pb-10">
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg md:text-xl text-[#EDE9E0]/80 font-normal leading-relaxed max-w-2xl text-balance">
              SemiconductorEra architects and manufactures the world's most demanding microelectronics.
              From 1.8nm Gate-All-Around (GAA) nanosheet transistors to monolithic 3D chiplet stacking,
              we deliver pure-yield execution at the frontier of quantum physics.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap items-center gap-4 lg:justify-end">
            <button
              onClick={onOpenRfp}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-white bg-[#E8622A] hover:bg-[#D0531F] rounded-full transition-all duration-200 shadow-[0_0_30px_rgba(232,98,42,0.35)] active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span>Request Foundry Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#expertise"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#EDE9E0] hover:text-white bg-[#2C2C2A]/60 hover:bg-[#2C2C2A] border border-[#3D3D39] rounded-full transition-all duration-200 whitespace-nowrap"
            >
              <span>Explore Cleanroom</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Telemetry Terminal & Timeline Scheduler - Key visual from reference */}
        <div className="w-full flex flex-col gap-6">
          
          {/* Live Typewriter Telemetry Box */}
          <div className="bg-[#181917]/90 border border-[#2C2C2A] rounded-xl p-4 md:p-5 flex items-center justify-between gap-4 font-mono text-xs sm:text-sm shadow-xl">
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="flex items-center gap-2 px-2.5 py-1 bg-[#2C2C2A] text-[#E8622A] rounded text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap">
                <Activity className="w-3.5 h-3.5 animate-pulse text-[#E8622A]" />
                Fab 01 Telemetry
              </span>
              <p className="text-[#EDE9E0]/90 truncate">
                <span>{displayText}</span>
                <span className="cursor-blink inline-block w-2 h-4 bg-[#E8622A] align-middle ml-1" />
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[11px] text-[#EDE9E0]/40 whitespace-nowrap">
              <span>LATENCY: 0.12ms</span>
              <span>·</span>
              <span className="text-emerald-400">STATUS: OPTIMAL</span>
            </div>
          </div>

          {/* Interactive Phase Scheduler Timeline */}
          <div
            className="w-full pt-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#EDE9E0]/50 uppercase tracking-widest mb-3">
              <span>Foundry Execution Pipeline</span>
              <span className="text-[#E8622A]">{isPaused ? "Paused (Manual View)" : "Live Cycle"}</span>
            </div>

            {/* Scheduler Track */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {FAB_PHASES.map((phase, idx) => {
                const isActive = activePhase === idx;
                return (
                  <button
                    key={phase.step}
                    onClick={() => setActivePhase(idx)}
                    className={`text-left p-3.5 rounded-lg border transition-all duration-300 relative group cursor-pointer ${
                      isActive
                        ? "bg-[#1F201D] border-[#E8622A] shadow-[0_0_15px_rgba(232,98,42,0.15)] -translate-y-1"
                        : "bg-[#181917]/50 border-[#2C2C2A] hover:border-[#3D3D39] opacity-60 hover:opacity-90"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[11px] font-mono font-bold ${isActive ? "text-[#E8622A]" : "text-[#EDE9E0]/40"}`}>
                        PHASE {phase.step}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full transition-colors ${
                          isActive ? "bg-[#E8622A] shadow-[0_0_8px_#E8622A]" : "bg-[#2C2C2A]"
                        }`}
                      />
                    </div>
                    <div className="text-sm font-['Barlow_Condensed'] uppercase font-bold text-[#EDE9E0] tracking-wide">
                      {phase.label}
                    </div>
                    <div className="text-[11px] text-[#EDE9E0]/60 font-mono mt-0.5 truncate">
                      {phase.sub}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Expanded Active Phase Micro-Brief */}
            <div className="mt-3 bg-[#181917]/60 border border-[#2C2C2A]/60 rounded-lg px-4 py-2.5 flex items-center justify-between text-xs text-[#EDE9E0]/70 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[#E8622A] font-bold">SPECS:</span>
                <span>{FAB_PHASES[activePhase].detail}</span>
              </div>
              <span className="hidden sm:inline text-[#EDE9E0]/40">Click any phase to inspect</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
