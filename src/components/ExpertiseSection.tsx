import React, { useState } from 'react';
import { Layers, ShieldCheck, Zap, Sliders, ArrowUpRight, Gauge, Cpu } from 'lucide-react';

interface ExpertiseSectionProps {
  onOpenRfp: (defaultNode?: string) => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onOpenRfp }) => {
  // Interactive State for Card 1 (Lithography NA slider)
  const [numericalAperture, setNumericalAperture] = useState<number>(0.55);

  // Interactive State for Card 2 (Laminar Air Velocity)
  const [airVelocity, setAirVelocity] = useState<number>(0.45); // m/s
  const [filterMode, setFilterMode] = useState<'ULPA-17' | 'HYPER-IONIC'>('ULPA-17');

  // Interactive State for Card 3 (Chiplet Layer Inspector)
  const [selectedLayer, setSelectedLayer] = useState<'die' | 'interposer' | 'hybrid' | 'substrate'>('hybrid');

  // Resolution calculation Rayleigh formula: R = k1 * (13.5nm / NA)
  const rayleighResolution = ((0.33 * 13.5) / numericalAperture).toFixed(2);

  return (
    <section
      id="expertise"
      className="py-32 md:py-44 bg-[#EDE9E0] text-[#111210] relative z-20 clip-trench-top clip-trench-bottom -mt-8 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8622A] font-semibold block mb-2">
              FOUNDRY ARCHITECTURE // CAPABILITIES
            </span>
            <h2 className="font-['Barlow_Condensed'] uppercase font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#111210] leading-[0.9]">
              Engineered Beyond<br />Physical Limits.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base md:text-lg text-[#2C2C2A]/80 font-normal leading-relaxed">
              When standard silicon scaling stalled at 3nm, SemiconductorEra pioneered High-NA anamorphic optics, 
              monolayer atomic deposition, and sub-micron direct dielectric fusion to unlock the Sub-2nm epoch.
            </p>
          </div>
        </div>

        {/* 3 Core Capability Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: High-NA EUV Lithography */}
          <div className="bg-[#DDD8CD] border border-[#2C2C2A]/15 rounded-2xl p-7 flex flex-col justify-between shadow-lg relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-[#E8622A] uppercase tracking-wider">
                  PILLAR 01 // PHOTONICS
                </span>
                <span className="p-2 bg-[#EDE9E0] rounded-lg text-[#111210]">
                  <Zap className="w-5 h-5 text-[#E8622A]" />
                </span>
              </div>

              <h3 className="font-['Barlow_Condensed'] font-bold text-3xl md:text-4xl uppercase text-[#111210] tracking-tight mb-3">
                High-NA 0.55 EUV Lithography
              </h3>
              <p className="text-sm text-[#2C2C2A]/80 leading-relaxed mb-6 font-sans">
                Next-generation extreme ultraviolet lithography utilizing 0.55 numerical aperture anamorphic projection lenses. 
                Achieves single-exposure sub-2nm half-pitch without costly multi-patterning masks.
              </p>

              {/* Interactive Rayleigh Simulator */}
              <div className="bg-[#EDE9E0] border border-[#2C2C2A]/10 rounded-xl p-4 mb-6 font-mono text-xs">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#2C2C2A]/70 uppercase">Optics Lens NA:</span>
                  <span className="font-bold text-[#111210] text-sm">{numericalAperture} NA</span>
                </div>
                <input
                  type="range"
                  min="0.33"
                  max="0.55"
                  step="0.02"
                  value={numericalAperture}
                  onChange={(e) => setNumericalAperture(parseFloat(e.target.value))}
                  className="w-full accent-[#E8622A] cursor-pointer mb-3"
                  aria-label="Numerical Aperture adjustment slider"
                />

                <div className="pt-2 border-t border-[#2C2C2A]/10 flex items-center justify-between">
                  <span className="text-[#2C2C2A]/70">Rayleigh Resolution limit:</span>
                  <span className="font-bold text-[#E8622A] text-sm">{rayleighResolution} nm</span>
                </div>

                {/* Optical Beam Diagram */}
                <div className="mt-3 h-20 w-full bg-[#111210] rounded-lg p-2 relative overflow-hidden flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 200 60">
                    <defs>
                      <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#E8622A" stopOpacity="1" />
                        <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    {/* Anamorphic beam rays */}
                    <path
                      d={`M 10 30 Q 100 ${30 - numericalAperture * 30}, 190 30 Q 100 ${30 + numericalAperture * 30}, 10 30`}
                      fill="url(#beamGrad)"
                      opacity="0.35"
                    />
                    <line x1="10" y1="30" x2="190" y2="30" stroke="#E8622A" strokeWidth="1.5" strokeDasharray="4 2" />
                    {/* Focal points */}
                    <circle cx="100" cy="30" r={4 * numericalAperture} fill="#EDE9E0" />
                    <text x="100" y="52" fill="#EDE9E0" fontSize="7" textAnchor="middle" fontFamily="monospace">
                      λ = 13.5nm · Anamorphic 4x/8x
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2C2C2A]/10 flex items-center justify-between text-xs font-mono">
              <span className="text-[#2C2C2A]/60">Overlay Margin: ±0.35nm</span>
              <button
                onClick={() => onOpenRfp('Sub-2nm High-NA EUV')}
                className="font-bold text-[#111210] hover:text-[#E8622A] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Tapeout Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Class 1 Pure-Yield Cleanroom */}
          <div className="bg-[#DDD8CD] border border-[#2C2C2A]/15 rounded-2xl p-7 flex flex-col justify-between shadow-lg relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-[#E8622A] uppercase tracking-wider">
                  PILLAR 02 // ENVIRONMENT
                </span>
                <span className="p-2 bg-[#EDE9E0] rounded-lg text-[#111210]">
                  <ShieldCheck className="w-5 h-5 text-[#E8622A]" />
                </span>
              </div>

              <h3 className="font-['Barlow_Condensed'] font-bold text-3xl md:text-4xl uppercase text-[#111210] tracking-tight mb-3">
                ISO Class 1 Automated Cleanroom
              </h3>
              <p className="text-sm text-[#2C2C2A]/80 leading-relaxed mb-6 font-sans">
                Human-isolated cleanroom bays with 100% automated overhead hoist transport (OHT) FOUP pods. 
                Strict laminar airflow ensures 0.00 particulates per cubic meter for zero-defect die manufacturing.
              </p>

              {/* Interactive Cleanroom Filtration Monitor */}
              <div className="bg-[#EDE9E0] border border-[#2C2C2A]/10 rounded-xl p-4 mb-6 font-mono text-xs">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#2C2C2A]/70 uppercase">Laminar Velocity:</span>
                  <span className="font-bold text-[#111210]">{airVelocity.toFixed(2)} m/s</span>
                </div>
                <input
                  type="range"
                  min="0.30"
                  max="0.65"
                  step="0.05"
                  value={airVelocity}
                  onChange={(e) => setAirVelocity(parseFloat(e.target.value))}
                  className="w-full accent-[#E8622A] cursor-pointer mb-3"
                  aria-label="Laminar Air Velocity slider"
                />

                <div className="flex gap-2 mb-3">
                  <button
                    onClick={() => setFilterMode('ULPA-17')}
                    className={`flex-1 py-1 rounded text-[11px] font-bold transition-colors ${
                      filterMode === 'ULPA-17'
                        ? 'bg-[#111210] text-[#EDE9E0]'
                        : 'bg-[#DDD8CD] text-[#2C2C2A] hover:bg-[#D5CFBE]'
                    }`}
                  >
                    ULPA U17 (99.999995%)
                  </button>
                  <button
                    onClick={() => setFilterMode('HYPER-IONIC')}
                    className={`flex-1 py-1 rounded text-[11px] font-bold transition-colors ${
                      filterMode === 'HYPER-IONIC'
                        ? 'bg-[#111210] text-[#EDE9E0]'
                        : 'bg-[#DDD8CD] text-[#2C2C2A] hover:bg-[#D5CFBE]'
                    }`}
                  >
                    Hyper-Ionic Scrub
                  </button>
                </div>

                <div className="h-20 w-full bg-[#111210] rounded-lg p-2 relative flex flex-col justify-center items-center text-center text-[#EDE9E0]">
                  <div className="text-[#00E5FF] text-xl font-bold font-mono tracking-wider">
                    0.000 <span className="text-xs font-normal text-[#EDE9E0]/60">particles &gt; 0.1µm</span>
                  </div>
                  <div className="text-[10px] text-[#EDE9E0]/50 mt-1 uppercase">
                    Continuous Particle Counter · Zero AMHS Friction
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2C2C2A]/10 flex items-center justify-between text-xs font-mono">
              <span className="text-[#2C2C2A]/60">ISO 14644-1 Certified</span>
              <button
                onClick={() => onOpenRfp('Class 1 Cleanroom Capacity')}
                className="font-bold text-[#111210] hover:text-[#E8622A] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Audit Standards</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: 3D Heterogeneous Chiplet Integration */}
          <div className="bg-[#DDD8CD] border border-[#2C2C2A]/15 rounded-2xl p-7 flex flex-col justify-between shadow-lg relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-[#E8622A] uppercase tracking-wider">
                  PILLAR 03 // INTEGRATION
                </span>
                <span className="p-2 bg-[#EDE9E0] rounded-lg text-[#111210]">
                  <Layers className="w-5 h-5 text-[#E8622A]" />
                </span>
              </div>

              <h3 className="font-['Barlow_Condensed'] font-bold text-3xl md:text-4xl uppercase text-[#111210] tracking-tight mb-3">
                3D Heterogeneous Chiplets
              </h3>
              <p className="text-sm text-[#2C2C2A]/80 leading-relaxed mb-6 font-sans">
                Direct copper-to-copper hybrid bonding with sub-micron pitch. Disaggregate monolithic SoCs 
                into modular chiplets on large-area silicon interposers with micro-channel liquid cooling.
              </p>

              {/* Interactive Layer Visualizer */}
              <div className="bg-[#EDE9E0] border border-[#2C2C2A]/10 rounded-xl p-4 mb-6 font-mono text-xs">
                <div className="text-[#2C2C2A]/70 uppercase mb-2">Inspect Stacking Layer:</div>
                <div className="grid grid-cols-2 gap-1.5 mb-3">
                  <button
                    onClick={() => setSelectedLayer('die')}
                    className={`py-1 px-2 rounded text-[11px] font-bold text-left transition-colors ${
                      selectedLayer === 'die' ? 'bg-[#111210] text-[#EDE9E0]' : 'bg-[#DDD8CD] text-[#2C2C2A]'
                    }`}
                  >
                    1. Top Compute Die
                  </button>
                  <button
                    onClick={() => setSelectedLayer('hybrid')}
                    className={`py-1 px-2 rounded text-[11px] font-bold text-left transition-colors ${
                      selectedLayer === 'hybrid' ? 'bg-[#111210] text-[#EDE9E0]' : 'bg-[#DDD8CD] text-[#2C2C2A]'
                    }`}
                  >
                    2. Cu-Cu Hybrid Bond
                  </button>
                  <button
                    onClick={() => setSelectedLayer('interposer')}
                    className={`py-1 px-2 rounded text-[11px] font-bold text-left transition-colors ${
                      selectedLayer === 'interposer' ? 'bg-[#111210] text-[#EDE9E0]' : 'bg-[#DDD8CD] text-[#2C2C2A]'
                    }`}
                  >
                    3. Silicon Interposer
                  </button>
                  <button
                    onClick={() => setSelectedLayer('substrate')}
                    className={`py-1 px-2 rounded text-[11px] font-bold text-left transition-colors ${
                      selectedLayer === 'substrate' ? 'bg-[#111210] text-[#EDE9E0]' : 'bg-[#DDD8CD] text-[#2C2C2A]'
                    }`}
                  >
                    4. BGA Substrate
                  </button>
                </div>

                <div className="h-20 w-full bg-[#111210] rounded-lg p-2.5 flex flex-col justify-center text-[#EDE9E0]">
                  {selectedLayer === 'die' && (
                    <>
                      <span className="text-[#E8622A] font-bold">TOP COMPUTE DIE:</span>
                      <span className="text-[11px] text-[#EDE9E0]/80 mt-0.5">Sub-2nm logic chiplet thinned to 30µm for rapid heat dissipation.</span>
                    </>
                  )}
                  {selectedLayer === 'hybrid' && (
                    <>
                      <span className="text-[#00E5FF] font-bold">HYBRID COPPER BONDING:</span>
                      <span className="text-[11px] text-[#EDE9E0]/80 mt-0.5">&lt;0.8µm pitch direct dielectric fusion bonding with 0ppm voids.</span>
                    </>
                  )}
                  {selectedLayer === 'interposer' && (
                    <>
                      <span className="text-[#EDE9E0] font-bold">HIGH-DENSITY INTERPOSER:</span>
                      <span className="text-[11px] text-[#EDE9E0]/80 mt-0.5">Through-Silicon Vias (TSVs) delivering 12.8 TB/s memory throughput.</span>
                    </>
                  )}
                  {selectedLayer === 'substrate' && (
                    <>
                      <span className="text-amber-400 font-bold">ORGANIC BGA SUBSTRATE:</span>
                      <span className="text-[11px] text-[#EDE9E0]/80 mt-0.5">High-frequency low-loss dielectric with micro-ball array integration.</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2C2C2A]/10 flex items-center justify-between text-xs font-mono">
              <span className="text-[#2C2C2A]/60">Interconnect: &gt;10 TB/s/mm²</span>
              <button
                onClick={() => onOpenRfp('3D Heterogeneous Chiplet')}
                className="font-bold text-[#111210] hover:text-[#E8622A] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Packaging Spec</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
