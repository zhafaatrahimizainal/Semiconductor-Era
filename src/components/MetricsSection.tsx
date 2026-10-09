import React from 'react';
import { ShieldCheck, Cpu, Droplets, Zap, Check, ArrowUpRight } from 'lucide-react';
import ingotImg from '../assets/images/silicon_ingot_manufacturing_1791246531605.jpg';

interface MetricsSectionProps {
  onOpenRfp: () => void;
}

const STATS = [
  {
    value: "99.98%",
    label: "Cleanroom Availability",
    sub: "Class 1 continuous filtered uptime with automated AMHS wafer delivery."
  },
  {
    value: "480K+",
    label: "300mm Wafers / Year",
    sub: "Installed annual wafer starts across Austin, Dresden, and Kumamoto fabs."
  },
  {
    value: "< 0.002",
    label: "Defect Density / cm²",
    sub: "Industry-leading baseline D₀ across sub-3nm volume production runs."
  },
  {
    value: "1.8 nm",
    label: "GAA Physical Resolution",
    sub: "High-NA 0.55 EUV single-exposure lithography with 4-tier nanosheets."
  }
];

const VERTICALS = [
  {
    title: "AI Hyperscalers & LLM Clusters",
    spec: "Sub-2nm GAA with &gt;10 TB/s/mm² Die-to-Die Interconnects",
    desc: "Powering the world's largest trillion-parameter AI neural network training accelerators with extreme memory bandwidth and liquid cooling integration."
  },
  {
    title: "Autonomous Vehicle Compute",
    spec: "AEC-Q100 Grade 0 & IATF 16949 Certified",
    desc: "Zero-ppm mission-critical silicon powering real-time LiDAR sensor fusion, neural vision processors, and fail-operational chassis control."
  },
  {
    title: "Quantum Cryogenic Control",
    spec: "Sub-4 Kelvin Superconducting Gate Reliability",
    desc: "Silicon-spin qubit control logic engineered for ultra-low noise operation at near absolute zero dilution refrigerator temperatures."
  },
  {
    title: "Aerospace & Defense Microelectronics",
    spec: "DoD Category 1A Trusted Foundry & ITAR",
    desc: "Radiation-hardened SOI substrates engineered to resist single-event upsets (SEU) in low-Earth orbit and deep-space missions."
  }
];

export const MetricsSection: React.FC<MetricsSectionProps> = ({ onOpenRfp }) => {
  return (
    <section
      id="metrics"
      className="py-32 md:py-44 bg-[#111210] relative z-40 px-6 md:px-12 lg:px-16 text-[#EDE9E0]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8622A] font-semibold block mb-2">
              FOUNDRY TRACK RECORD &amp; SCALE
            </span>
            <h2 className="font-['Barlow_Condensed'] font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-[#EDE9E0]">
              Proven at High-Volume Velocity.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base text-[#EDE9E0]/70 font-sans leading-relaxed">
              Leading hardware pioneers trust SemiconductorEra for critical silicon tapeouts. 
              Our fabs operate 24/7/365 to deliver predictable yields and uncompromised precision.
            </p>
          </div>
        </div>

        {/* 4 Quantitative Rigor Metric Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#181917] border border-[#2C2C2A] rounded-2xl p-7 flex flex-col justify-between hover:border-[#E8622A]/50 transition-colors"
            >
              <div>
                <span className="font-mono text-xs text-[#E8622A] uppercase block mb-3">
                  METRIC 0{idx + 1}
                </span>
                <div className="font-['Barlow_Condensed'] font-bold text-5xl md:text-6xl text-[#EDE9E0] tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="font-mono text-xs uppercase font-bold text-[#EDE9E0]/90 tracking-wider mb-2">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs text-[#EDE9E0]/60 font-sans leading-relaxed pt-4 border-t border-[#2C2C2A]">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Ingot Feature Banner & Eco-Fab Stewardship */}
        <div className="relative rounded-3xl overflow-hidden border border-[#2C2C2A] mb-24 bg-[#181917]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-6 p-8 md:p-14 relative z-10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E8622A] font-bold block mb-3">
                RAW MATERIAL DOMINANCE // CZOCHRALSKI INGOTS
              </span>
              <h3 className="font-['Barlow_Condensed'] font-bold text-4xl md:text-5xl uppercase tracking-tight text-[#EDE9E0] mb-4">
                Vertical Polysilicon Sovereignty.
              </h3>
              <p className="text-sm md:text-base text-[#EDE9E0]/70 font-sans leading-relaxed mb-6">
                Unlike fabless brokers, SemiconductorEra controls the physical crystal growth. 
                Using dedicated inductive Czochralski furnaces, we pull 300mm zero-defect monocrystalline boules with strict oxygen and carbon control.
              </p>

              <div className="space-y-3 font-mono text-xs text-[#EDE9E0]/80 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8622A]" />
                  <span>Pulling Temperature: 1,425°C under high-purity argon purge</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8622A]" />
                  <span>Lattice Dislocation Rate: 0.000 dislocations per cm²</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8622A]" />
                  <span>Environmental: 98.4% fab water reclamation cycle</span>
                </div>
              </div>

              <button
                onClick={onOpenRfp}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider text-white bg-[#E8622A] hover:bg-[#D0531F] rounded-xl transition-all cursor-pointer font-bold shadow-lg"
              >
                <span>Request Substrate Specifications</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-6 h-80 lg:h-full min-h-[360px] relative">
              <img
                src={ingotImg}
                alt="Industrial monocrystalline silicon ingot manufacturing furnace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#181917] via-transparent to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181917] via-transparent to-transparent lg:hidden block" />
            </div>

          </div>
        </div>

        {/* Market Verticals Grid */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#EDE9E0]/50 mb-8">
            MISSION-CRITICAL SECTORS POWERED BY SEMICONDUCTORERA
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VERTICALS.map((vert, idx) => (
              <div
                key={idx}
                className="bg-[#181917]/70 border border-[#2C2C2A] rounded-2xl p-7 hover:border-[#3D3D39] transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#E8622A]">
                    SECTOR 0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono text-[#00E5FF] bg-[#111210] px-2.5 py-1 rounded border border-[#2C2C2A]">
                    {vert.spec}
                  </span>
                </div>
                <h4 className="font-['Barlow_Condensed'] font-bold text-2xl uppercase tracking-wide text-[#EDE9E0] mb-2">
                  {vert.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#EDE9E0]/70 font-sans leading-relaxed">
                  {vert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
