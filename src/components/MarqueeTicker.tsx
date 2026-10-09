import React from 'react';

const TICKER_ITEMS = [
  "SUB-2NM GATE-ALL-AROUND",
  "0.55 HIGH-NA EUV LITHOGRAPHY",
  "300MM MONOCRYSTALLINE WAFERS",
  "ISO 14644-1 CLASS 1 CLEANROOM",
  "DIRECT CU-CU HYBRID BONDING",
  "IATF 16949 AUTOMOTIVE CERTIFIED",
  "ATOMIC LAYER DEPOSITION (ALD)",
  "ADVANCED 2.5D COWOS INTERPOSER",
  "MULTI-BEAM ELECTRON METROLOGY",
  "99.98% FOUNDRY PURITY UPTIME"
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#0A0A09] border-y border-[#2C2C2A] py-3.5 z-20">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="font-['Barlow_Condensed'] uppercase tracking-widest text-sm md:text-base font-bold text-[#EDE9E0]/70 hover:text-[#E8622A] transition-colors cursor-default">
              {item}
            </span>
            <span className="text-[#E8622A] text-xs font-mono select-none" aria-hidden="true">
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
