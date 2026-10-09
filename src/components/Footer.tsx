import React from 'react';
import { ArrowUp, ArrowUpRight, ShieldCheck, Mail, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  onOpenRfp: () => void;
}

const FAB_LOCATIONS = [
  {
    name: "Austin Fab 01 (HQ)",
    region: "Central Texas Semiconductor Corridor, USA",
    specs: "300mm Advanced GAA & High-NA EUV Hub",
    status: "ACTIVE 24/7"
  },
  {
    name: "Dresden Fab 02",
    region: "Silicon Saxony, Germany",
    specs: "Automotive IATF 16949 & Power Semis",
    status: "ACTIVE 24/7"
  },
  {
    name: "Hsinchu R&D Center",
    region: "Hsinchu Science Park, Taiwan",
    specs: "3D Heterogeneous Chiplet Integration",
    status: "ACTIVE 24/7"
  },
  {
    name: "Kumamoto Fab 03",
    region: "Kyushu Silicon Island, Japan",
    specs: "Ultra-Low Power & Optical Sensors",
    status: "ACTIVE 24/7"
  }
];

export const Footer: React.FC<FooterProps> = ({ onOpenRfp }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="bg-[#0A0A09] text-[#EDE9E0] rounded-t-[3rem] mt-[-3rem] relative z-50 pt-24 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden border-t border-[#2C2C2A]/60"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Callout Banner */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-16 border-b border-[#2C2C2A]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8622A] font-bold block mb-2">
              READY FOR FAB ENGAGEMENT
            </span>
            <h3 className="font-['Barlow_Condensed'] font-bold text-4xl md:text-5xl uppercase tracking-tight text-[#EDE9E0]">
              Secure Your Tapeout Window.
            </h3>
            <p className="text-sm md:text-base text-[#EDE9E0]/70 font-sans mt-2 max-w-xl">
              Capacity allocations for Sub-2nm GAA and 3D heterogeneous packaging runs are scheduled on a rolling quarterly basis.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenRfp}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs md:text-sm font-mono uppercase font-bold tracking-wider text-white bg-[#E8622A] hover:bg-[#D0531F] rounded-full transition-all shadow-[0_0_30px_rgba(232,98,42,0.4)] cursor-pointer"
            >
              <span>Schedule Foundry Review</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToTop}
              className="p-3.5 bg-[#181917] hover:bg-[#2C2C2A] border border-[#2C2C2A] rounded-full text-[#EDE9E0] hover:text-[#E8622A] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Global Fab Footprint Grid */}
        <div className="py-16 border-b border-[#2C2C2A]">
          <div className="text-xs font-mono uppercase tracking-widest text-[#EDE9E0]/50 mb-8 flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#E8622A]" />
            <span>GLOBAL FOUNDRY NETWORK &amp; ACTIVE CLEANROOM CAMPUSES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FAB_LOCATIONS.map((fab, idx) => (
              <div key={idx} className="bg-[#111210] p-5 rounded-xl border border-[#2C2C2A]">
                <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                  <span className="text-[#E8622A] font-bold">CAMPUS 0{idx + 1}</span>
                  <span className="text-emerald-400">{fab.status}</span>
                </div>
                <h4 className="font-['Barlow_Condensed'] font-bold text-xl uppercase text-[#EDE9E0] mb-1">
                  {fab.name}
                </h4>
                <p className="text-xs text-[#EDE9E0]/60 font-sans mb-3 flex items-start gap-1">
                  <MapPin className="w-3 h-3 text-[#EDE9E0]/40 shrink-0 mt-0.5" />
                  <span>{fab.region}</span>
                </p>
                <div className="pt-2 border-t border-[#2C2C2A]/60 text-[11px] font-mono text-[#EDE9E0]/70">
                  {fab.specs}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Giant Typographic Wordmark - Matching Reference Style */}
        <div className="py-16 overflow-hidden select-none">
          <h2 className="font-['Barlow_Condensed'] font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.8] tracking-tight uppercase text-[#1F201D] hover:text-[#2C2C2A] transition-colors cursor-default text-center">
            SemiconductorEra
          </h2>
        </div>

        {/* Bottom Legal & Accreditations */}
        <div className="pt-8 border-t border-[#2C2C2A] flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#EDE9E0]/50">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} SemiconductorEra Foundry Corporation.</span>
            <span>·</span>
            <span>ISO 14644-1 Class 1</span>
            <span>·</span>
            <span>IATF 16949 Certified</span>
            <span>·</span>
            <span>DoD Trusted Foundry Cat 1A</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#expertise" className="hover:text-[#EDE9E0] transition-colors">Cleanroom</a>
            <a href="#process" className="hover:text-[#EDE9E0] transition-colors">Pipeline</a>
            <a href="#calculator" className="hover:text-[#EDE9E0] transition-colors">Calculator</a>
            <button onClick={onOpenRfp} className="hover:text-[#E8622A] transition-colors cursor-pointer">
              Foundry RFP
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
