import React, { useState } from 'react';
import { Award, CheckCircle2, Shield, Leaf, Cpu, Globe2, FileText } from 'lucide-react';
import cleanroomImg from '../assets/images/cleanroom_technician_euv_1791246511170.jpg';

interface PhilosophyProps {
  onOpenRfp: () => void;
}

const CREDENTIALS = [
  {
    code: "ISO 14644-1",
    title: "Class 1 Cleanroom Standard",
    desc: "Strictly zero airborne particulate exceeding 0.1 microns per cubic meter in active lithography chambers."
  },
  {
    code: "IATF 16949",
    title: "Automotive Grade Reliability",
    desc: "AEC-Q100 Grade 0 compliance with documented zero-ppm defect tolerance for mission-critical automotive compute."
  },
  {
    code: "DoD TRUSTED FOUNDRY",
    title: "Category 1A Accredited",
    desc: "Secure end-to-end cryptographic chain of custody, hardware root of trust, and ITAR compliance."
  },
  {
    code: "ANSI/ESD S20.20",
    title: "Electrostatic Safeguard",
    desc: "Sub-volt ESD suppression protocols protecting atomic-thin gate dielectrics through all automated handling."
  },
  {
    code: "ISO 14001:2015",
    title: "Eco-Fab Reclamation",
    desc: "98.4% ultra-pure water recycling rate and 100% renewable power commitment across all fab campuses."
  }
];

export const PhilosophySection: React.FC<PhilosophyProps> = ({ onOpenRfp }) => {
  const [activeTab, setActiveTab] = useState<'purity' | 'thermal' | 'resilience'>('purity');

  return (
    <section
      id="philosophy"
      className="py-36 md:py-48 relative bg-[#111210] overflow-hidden z-10 -mt-12 pb-48 px-6 md:px-12 lg:px-16 text-[#EDE9E0]"
    >
      {/* Background Image with Parallax & Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={cleanroomImg}
          alt="High-NA EUV lithography chamber at SemiconductorEra cleanroom"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 opacity-20 filter contrast-125 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111210] via-[#111210]/90 to-[#111210]/70" />
        <div className="absolute inset-0 silicon-grid opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Lead Tag */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#E8622A] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#E8622A]" />
          <span>ENGINEERING PHILOSOPHY & INTEGRITY</span>
        </div>

        {/* Cormorant Display Headline */}
        <div className="max-w-5xl mb-16 md:mb-24">
          <h2 className="font-['Cormorant_Garamond'] font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-[#EDE9E0]">
            We forge the microscopic silicon engines that power{" "}
            <span className="text-[#E8622A] italic">civilization's next computational leap</span>.
          </h2>
          <p className="mt-8 text-base md:text-xl text-[#EDE9E0]/70 font-sans max-w-3xl leading-relaxed">
            Every nanometer gained requires absolute mastery over atomic forces, chemical purity, and thermal dynamics. 
            We do not compromise on yield, repeatability, or scientific truth.
          </p>
        </div>

        {/* Rigorous Specifications Interactive Panel */}
        <div className="bg-[#181917]/90 border border-[#2C2C2A] rounded-2xl p-6 md:p-10 mb-20 shadow-2xl backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2C2C2A] pb-6 mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-[#EDE9E0]/60">
              Foundry Engineering Invariants
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('purity')}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  activeTab === 'purity'
                    ? 'bg-[#E8622A] text-white shadow-md'
                    : 'bg-[#2C2C2A] text-[#EDE9E0]/70 hover:text-white'
                }`}
              >
                Atomic Purity
              </button>
              <button
                onClick={() => setActiveTab('thermal')}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  activeTab === 'thermal'
                    ? 'bg-[#E8622A] text-white shadow-md'
                    : 'bg-[#2C2C2A] text-[#EDE9E0]/70 hover:text-white'
                }`}
              >
                Thermal Dynamics
              </button>
              <button
                onClick={() => setActiveTab('resilience')}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  activeTab === 'resilience'
                    ? 'bg-[#E8622A] text-white shadow-md'
                    : 'bg-[#2C2C2A] text-[#EDE9E0]/70 hover:text-white'
                }`}
              >
                Supply Sovereignty
              </button>
            </div>
          </div>

          {activeTab === 'purity' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <span className="font-mono text-xs text-[#E8622A] uppercase block mb-1">01 / Chemical Spec</span>
                <h4 className="font-['Barlow_Condensed'] font-bold text-2xl uppercase tracking-wide text-[#EDE9E0] mb-2">
                  99.9999999% Silane
                </h4>
                <p className="text-[#EDE9E0]/70 font-sans leading-relaxed">
                  Ultra-high purity monosilane and organometallic precursors distilled to Nine-Nines purity, ensuring zero crystal lattice lattice dislocations during epitaxial layer growth.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-[#E8622A] uppercase block mb-1">02 / Monolayer Control</span>
                <h4 className="font-['Barlow_Condensed'] font-bold text-2xl uppercase tracking-wide text-[#EDE9E0] mb-2">
                  ±0.04nm ALD Uniformity
                </h4>
                <p className="text-[#EDE9E0]/70 font-sans leading-relaxed">
                  Atomic Layer Deposition cycles cycle self-terminating surface reactions to construct hafnium-based gate oxides with exact single-atom layer consistency across 300mm diameters.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-[#E8622A] uppercase block mb-1">03 / Yield Metric</span>
                <h4 className="font-['Barlow_Condensed'] font-bold text-2xl uppercase tracking-wide text-[#EDE9E0] mb-2">
                  &lt; 0.002 / cm² Defect Density
                </h4>
                <p className="text-[#EDE9E0]/70 font-sans leading-relaxed">
                  Our closed-loop AMHS automated wafer handling and continuous hyper-ionic vacuum purge maintain defect densities well below the industry standard for advanced nodes.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'thermal' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <span className="font-mono text-xs text-[#E8622A] uppercase block mb-1">01 / Heat Extraction</span>
                <h4 className="font-['Barlow_Condensed'] font-bold text-2xl uppercase tracking-wide text-[#EDE9E0] mb-2">
                  Micro-Channel Liquid
                </h4>
                <p className="text-[#EDE9E0]/70 font-sans leading-relaxed">
                  Direct backside etched micro-channels engineered for direct dielectric fluid cooling, handling up to 1,200W thermal design power (TDP) in ultra-dense AI accelerator packages.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-[#E8622A] uppercase block mb-1">02 / Stress Resistance</span>
                <h4 className="font-['Barlow_Condensed'] font-bold text-2xl uppercase tracking-wide text-[#EDE9E0] mb-2">
                  -55°C to +150°C
                </h4>
                <p className="text-[#EDE9E0]/70 font-sans leading-relaxed">
                  Continuous thermal shock endurance tested over 3,000 thermal cycles with zero delamination along hybrid copper bonding interfaces.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-[#E8622A] uppercase block mb-1">03 / Electromigration</span>
                <h4 className="font-['Barlow_Condensed'] font-bold text-2xl uppercase tracking-wide text-[#EDE9E0] mb-2">
                  Ru & Co Interconnects
                </h4>
                <p className="text-[#EDE9E0]/70 font-sans leading-relaxed">
                  Ruthenium and cobalt barrierless metal fills replacing traditional copper at M0/M1 layers to completely eliminate electromigration failure at extreme current densities.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'resilience' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <span className="font-mono text-xs text-[#E8622A] uppercase block mb-1">01 / Dual-Hemisphere Fabs</span>
                <h4 className="font-['Barlow_Condensed'] font-bold text-2xl uppercase tracking-wide text-[#EDE9E0] mb-2">
                  Geographic Redundancy
                </h4>
                <p className="text-[#EDE9E0]/70 font-sans leading-relaxed">
                  Fully mirrored production facilities located in Austin (Texas, USA), Dresden (Germany), and Kumamoto (Japan) ensuring uninterrupted global volume supply.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-[#E8622A] uppercase block mb-1">02 / Ingot Security</span>
                <h4 className="font-['Barlow_Condensed'] font-bold text-2xl uppercase tracking-wide text-[#EDE9E0] mb-2">
                  Vertical Integration
                </h4>
                <p className="text-[#EDE9E0]/70 font-sans leading-relaxed">
                  In-house polysilicon purification and crystal pulling operations insulate clients against global raw material commodity shocks.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-[#E8622A] uppercase block mb-1">03 / Traceability</span>
                <h4 className="font-['Barlow_Condensed'] font-bold text-2xl uppercase tracking-wide text-[#EDE9E0] mb-2">
                  Die-Level Laser ID
                </h4>
                <p className="text-[#EDE9E0]/70 font-sans leading-relaxed">
                  Every individual die etched with sub-surface optical cryptographic serial numbers for 100% counterfeit prevention and lifetime hardware validation.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Credentials / Accreditation Badges Matrix */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#EDE9E0]/50 mb-6">
            VERIFIED INDUSTRY ACCREDITATIONS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.code}
                className="bg-[#181917]/70 border border-[#2C2C2A] rounded-xl p-5 hover:border-[#E8622A]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#E8622A] bg-[#2C2C2A] px-2.5 py-1 rounded">
                    {cred.code}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <h5 className="font-['Barlow_Condensed'] uppercase font-bold text-xl text-[#EDE9E0] mb-1">
                  {cred.title}
                </h5>
                <p className="text-xs text-[#EDE9E0]/70 font-sans leading-relaxed">
                  {cred.desc}
                </p>
              </div>
            ))}
            <div className="bg-[#1F201D] border border-[#E8622A]/40 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#E8622A] uppercase">
                  COMPLIANCE AUDIT
                </span>
                <h5 className="font-['Barlow_Condensed'] uppercase font-bold text-xl text-[#EDE9E0] mt-2 mb-1">
                  Request Official Quality Dossier
                </h5>
                <p className="text-xs text-[#EDE9E0]/70 font-sans">
                  Download audited cleanroom reports, qualification test summaries, and yield verification logs under NDA.
                </p>
              </div>
              <button
                onClick={onOpenRfp}
                className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E8622A] hover:text-white transition-colors cursor-pointer"
              >
                <span>Request Quality Pack</span>
                <FileText className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
