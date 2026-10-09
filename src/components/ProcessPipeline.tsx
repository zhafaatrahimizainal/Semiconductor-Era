import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Search, Zap, Activity, ShieldCheck, Play, Pause } from 'lucide-react';
import packagingImg from '../assets/images/microchip_packaging_macro_1791246521035.jpg';
import ingotImg from '../assets/images/silicon_ingot_manufacturing_1791246531605.jpg';

interface ProcessPipelineProps {
  onOpenRfp: (stageName?: string) => void;
}

export const ProcessPipeline: React.FC<ProcessPipelineProps> = ({ onOpenRfp }) => {
  // Stage 1 interactive state
  const [laserActive, setLaserActive] = useState(true);
  const [exposurePower, setExposurePower] = useState(250); // Watts

  // Stage 2 interactive state
  const [defectScanActive, setDefectScanActive] = useState(true);
  const [sensitivity, setSensitivity] = useState<'Standard' | 'Ultra-Deep'>('Ultra-Deep');

  // Stage 3 interactive state
  const [thermalTemp, setThermalTemp] = useState<number>(125); // Celsius

  return (
    <section
      id="process"
      className="relative z-30 bg-[#EDE9E0] clip-shear -mt-20 py-36 md:py-48 px-6 md:px-12 lg:px-16 text-[#111210]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E8622A] font-semibold block mb-2">
            STAGE-GATE PRODUCTION PROTOCOL
          </span>
          <h2 className="font-['Barlow_Condensed'] font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-[#111210]">
            Execution Standard.
          </h2>
          <p className="mt-6 text-base md:text-xl text-[#2C2C2A]/80 font-sans leading-relaxed">
            Every production wafer undergoes an unyielding 3-phase progression. 
            From sub-angstrom optical pattern transfer to multi-beam atomic metrology and extreme thermal qualification.
          </p>
        </div>

        {/* 3 Stacking Cards */}
        <div className="space-y-12 md:space-y-16">
          
          {/* Card 01: Sub-Atomic Lithography */}
          <div className="bg-[#DDD8CD] border border-[#2C2C2A]/15 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 font-mono text-xs text-[#E8622A] uppercase font-bold mb-3">
                  <span>STAGE 01</span>
                  <span>·</span>
                  <span>SUBLIMATION &amp; LITHOGRAPHY</span>
                </div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-4xl md:text-6xl tracking-tight uppercase mb-4 text-[#111210]">
                  Sub-Atomic Photolithography
                </h3>
                <p className="text-base text-[#2C2C2A]/80 font-sans leading-relaxed mb-6">
                  Extreme ultraviolet illumination at 13.5nm wavelength projected through anamorphic High-NA optics onto 300mm monocrystalline wafers. 
                  High-sensitivity chemically amplified resists (CAR) and metal-oxide photoresists enable clean 8nm half-pitch definition with ±0.3nm overlay alignment.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-[#2C2C2A] mb-8">
                  <div className="bg-[#EDE9E0] p-3 rounded-lg border border-[#2C2C2A]/10">
                    <span className="text-[#2C2C2A]/60 block text-[11px]">WAVELENGTH</span>
                    <span className="font-bold text-sm text-[#111210]">13.5 nm EUV</span>
                  </div>
                  <div className="bg-[#EDE9E0] p-3 rounded-lg border border-[#2C2C2A]/10">
                    <span className="text-[#2C2C2A]/60 block text-[11px]">OVERLAY ACCURACY</span>
                    <span className="font-bold text-sm text-[#E8622A]">±0.35 nm</span>
                  </div>
                  <div className="bg-[#EDE9E0] p-3 rounded-lg border border-[#2C2C2A]/10 col-span-2 sm:col-span-1">
                    <span className="text-[#2C2C2A]/60 block text-[11px]">OPTICAL REDUCTION</span>
                    <span className="font-bold text-sm text-[#111210]">4x X / 8x Y</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setLaserActive(!laserActive)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase bg-[#111210] hover:bg-[#2C2C2A] text-white rounded-lg transition-colors cursor-pointer"
                  >
                    {laserActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{laserActive ? "Pause Optical Beam" : "Activate Optical Beam"}</span>
                  </button>
                  <button
                    onClick={() => onOpenRfp('Stage 01: Lithography')}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-[#E8622A] hover:text-[#111210] cursor-pointer"
                  >
                    <span>Request Node Specs</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Visual Interactive Laser Scanner */}
              <div className="lg:col-span-5 bg-[#111210] rounded-2xl p-6 text-[#EDE9E0] relative overflow-hidden shadow-2xl h-80 flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs font-mono text-[#EDE9E0]/60 z-10">
                  <span>EUV BEAM CHAMBER</span>
                  <span className="text-[#E8622A] font-bold">{exposurePower}W SOURCE</span>
                </div>

                {/* Laser animation */}
                <div className="relative w-full h-44 bg-[#181917] rounded-xl border border-[#2C2C2A] overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 silicon-grid opacity-30" />
                  
                  {/* Wafer outline */}
                  <div className="w-36 h-36 rounded-full border-2 border-[#E8622A]/40 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-1 rounded-full border border-dashed border-[#EDE9E0]/30" />
                    {/* Wafer grid pattern */}
                    <div className="w-full h-full silicon-grid opacity-70" />
                    
                    {/* Scanning Laser Beam */}
                    {laserActive && (
                      <div
                        className="absolute left-0 w-full h-1 bg-[#00E5FF] shadow-[0_0_15px_#00E5FF]"
                        style={{
                          animation: 'laserScan 2.5s ease-in-out infinite alternate'
                        }}
                      />
                    )}
                  </div>

                  <style>{`
                    @keyframes laserScan {
                      0% { top: 5%; }
                      100% { top: 95%; }
                    }
                  `}</style>
                </div>

                <div className="flex justify-between items-center text-[11px] font-mono text-[#EDE9E0]/70 z-10">
                  <span>RETICLE: 26mm × 33mm</span>
                  <span>DOSE: 42 mJ/cm²</span>
                </div>
              </div>

            </div>
          </div>

          {/* Card 02: In-Line Metrology */}
          <div className="bg-[#DDD8CD] border border-[#2C2C2A]/15 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 font-mono text-xs text-[#E8622A] uppercase font-bold mb-3">
                  <span>STAGE 02</span>
                  <span>·</span>
                  <span>MULTI-BEAM INSPECTION</span>
                </div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-4xl md:text-6xl tracking-tight uppercase mb-4 text-[#111210]">
                  In-Line Atomic Metrology
                </h3>
                <p className="text-base text-[#2C2C2A]/80 font-sans leading-relaxed mb-6">
                  Zero blind spots across every fabricated wafer. Massive multi-beam scanning electron microscopes (M-SEM) and atomic force probes 
                  sweep 100% of critical transistor dimensions (CD), guaranteeing gate width tolerances within ±0.08nm before etching.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-[#2C2C2A] mb-8">
                  <div className="bg-[#EDE9E0] p-3 rounded-lg border border-[#2C2C2A]/10">
                    <span className="text-[#2C2C2A]/60 block text-[11px]">SCANNING BEAMS</span>
                    <span className="font-bold text-sm text-[#111210]">331 Parallel Beams</span>
                  </div>
                  <div className="bg-[#EDE9E0] p-3 rounded-lg border border-[#2C2C2A]/10">
                    <span className="text-[#2C2C2A]/60 block text-[11px]">CD VARIANCE</span>
                    <span className="font-bold text-sm text-[#E8622A]">±0.08 nm</span>
                  </div>
                  <div className="bg-[#EDE9E0] p-3 rounded-lg border border-[#2C2C2A]/10 col-span-2 sm:col-span-1">
                    <span className="text-[#2C2C2A]/60 block text-[11px]">SAMPLING COVERAGE</span>
                    <span className="font-bold text-sm text-[#111210]">100% Die Inspection</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSensitivity('Standard')}
                      className={`px-3 py-1.5 rounded text-xs font-mono uppercase transition-colors cursor-pointer ${
                        sensitivity === 'Standard' ? 'bg-[#111210] text-white' : 'bg-[#EDE9E0] text-[#2C2C2A]'
                      }`}
                    >
                      Standard SEM
                    </button>
                    <button
                      onClick={() => setSensitivity('Ultra-Deep')}
                      className={`px-3 py-1.5 rounded text-xs font-mono uppercase transition-colors cursor-pointer ${
                        sensitivity === 'Ultra-Deep' ? 'bg-[#111210] text-white' : 'bg-[#EDE9E0] text-[#2C2C2A]'
                      }`}
                    >
                      Ultra-Deep Multi-Beam
                    </button>
                  </div>
                  <button
                    onClick={() => onOpenRfp('Stage 02: Metrology')}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-[#E8622A] hover:text-[#111210] cursor-pointer"
                  >
                    <span>Review Metrology Data</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Metrology Waveform Sweep Display */}
              <div className="lg:col-span-5 bg-[#111210] rounded-2xl p-6 text-[#EDE9E0] relative overflow-hidden shadow-2xl h-80 flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs font-mono text-[#EDE9E0]/60 z-10">
                  <span>ATOMIC FORCE SPECTROGRAM</span>
                  <span className="text-emerald-400 font-bold">DEFECT DENSITY: &lt; 0.002</span>
                </div>

                {/* Animated Waveform SVG */}
                <div className="relative w-full h-44 bg-[#181917] rounded-xl border border-[#2C2C2A] overflow-hidden p-3 flex flex-col justify-center">
                  <div className="absolute inset-0 silicon-grid opacity-30" />
                  
                  <svg className="w-full h-28" viewBox="0 0 300 80">
                    <defs>
                      <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#E8622A" stopOpacity="1" />
                        <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    {/* Baseline */}
                    <line x1="0" y1="40" x2="300" y2="40" stroke="#2C2C2A" strokeWidth="1" strokeDasharray="4 4" />
                    {/* Simulated atomic profile waveform */}
                    <path
                      d="M 0 40 Q 25 15, 50 40 T 100 40 T 150 20 T 200 60 T 250 40 T 300 40"
                      fill="none"
                      stroke="url(#waveGrad)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Cursor probe */}
                    <line x1="150" y1="5" x2="150" y2="75" stroke="#E8622A" strokeWidth="1.5" />
                    <circle cx="150" cy="20" r="4" fill="#00E5FF" />
                    <text x="160" y="24" fill="#00E5FF" fontSize="9" fontFamily="monospace">Gate: 1.82nm</text>
                  </svg>
                </div>

                <div className="flex justify-between items-center text-[11px] font-mono text-[#EDE9E0]/70 z-10">
                  <span>MODE: {sensitivity}</span>
                  <span className="text-emerald-400">PASSED 100% SPECS</span>
                </div>
              </div>

            </div>
          </div>

          {/* Card 03: Heterogeneous Packaging */}
          <div className="bg-[#DDD8CD] border border-[#2C2C2A]/15 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 font-mono text-xs text-[#E8622A] uppercase font-bold mb-3">
                  <span>STAGE 03</span>
                  <span>·</span>
                  <span>3D STACKING &amp; STRESS HARMONIZATION</span>
                </div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-4xl md:text-6xl tracking-tight uppercase mb-4 text-[#111210]">
                  Heterogeneous Packaging &amp; Test
                </h3>
                <p className="text-base text-[#2C2C2A]/80 font-sans leading-relaxed mb-6">
                  Disaggregated silicon modules fused together via sub-micron copper hybrid bonding onto ultra-dense interposers. 
                  Every assembled package undergoes rigorous temperature stress testing (-55°C to +150°C) and automated optical inspection for mission-critical deployment.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-[#2C2C2A] mb-8">
                  <div className="bg-[#EDE9E0] p-3 rounded-lg border border-[#2C2C2A]/10">
                    <span className="text-[#2C2C2A]/60 block text-[11px]">BONDING PITCH</span>
                    <span className="font-bold text-sm text-[#111210]">&lt; 0.8 µm Cu-Cu</span>
                  </div>
                  <div className="bg-[#EDE9E0] p-3 rounded-lg border border-[#2C2C2A]/10">
                    <span className="text-[#2C2C2A]/60 block text-[11px]">BANDWIDTH DENSITY</span>
                    <span className="font-bold text-sm text-[#E8622A]">&gt; 10 TB/s/mm²</span>
                  </div>
                  <div className="bg-[#EDE9E0] p-3 rounded-lg border border-[#2C2C2A]/10 col-span-2 sm:col-span-1">
                    <span className="text-[#2C2C2A]/60 block text-[11px]">TEMPERATURE RANGE</span>
                    <span className="font-bold text-sm text-[#111210]">-55°C to +150°C</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => onOpenRfp('Stage 03: 3D Packaging')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase bg-[#E8622A] hover:bg-[#D0531F] text-white rounded-lg transition-colors cursor-pointer font-bold shadow-md"
                  >
                    <span>Request Packaging Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Packaging Macro Photograph Showcase */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl h-80 border border-[#2C2C2A]">
                <img
                  src={packagingImg}
                  alt="3D heterogeneous chiplet microchip packaging macro photograph"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111210] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-[#EDE9E0]">
                  <span className="bg-[#111210]/80 px-2.5 py-1 rounded backdrop-blur-sm border border-[#2C2C2A]">
                    HYBRID 3D DIE INTERCONNECT
                  </span>
                  <span className="text-[#E8622A] font-bold">READY FOR DEPLOYMENT</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
