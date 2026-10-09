import React, { useState, useMemo } from 'react';
import { Calculator, ArrowUpRight, Check, Sliders, Cpu, Activity, Zap } from 'lucide-react';

interface FoundryCalculatorProps {
  onOpenRfp: (defaultNode?: string, customNote?: string) => void;
}

interface NodeProfile {
  id: string;
  name: string;
  transistorDensity: number; // MTr/mm²
  defectDensity: number; // /cm²
  powerReductionPct: number;
  performanceGainPct: number;
  leadTimeWeeks: number;
  description: string;
}

const NODES: NodeProfile[] = [
  {
    id: 'sub2nm',
    name: '1.8nm Gate-All-Around (GAA)',
    transistorDensity: 325,
    defectDensity: 0.0022,
    powerReductionPct: 32,
    performanceGainPct: 24,
    leadTimeWeeks: 14,
    description: 'High-NA 0.55 EUV 4-tier nanosheet technology for planetary-scale LLM training and sovereign AI accelerators.'
  },
  {
    id: '3nm',
    name: '3nm FinFET High-Performance',
    transistorDensity: 215,
    defectDensity: 0.0018,
    powerReductionPct: 25,
    performanceGainPct: 18,
    leadTimeWeeks: 12,
    description: 'Mature sub-3nm volume process offering maximum yield stability for hyperscale cloud datacenter compute.'
  },
  {
    id: '5nm_auto',
    name: '5nm Automotive Grade (AEC-Q100)',
    transistorDensity: 140,
    defectDensity: 0.0012,
    powerReductionPct: 20,
    performanceGainPct: 15,
    leadTimeWeeks: 10,
    description: 'Zero-ppm defect tolerance automotive node rated for -40°C to +150°C autonomous driving clusters.'
  },
  {
    id: 'photonics',
    name: 'Optical & Silicon Photonics Co-Packaged',
    transistorDensity: 95,
    defectDensity: 0.0028,
    powerReductionPct: 45,
    performanceGainPct: 35,
    leadTimeWeeks: 16,
    description: 'Integrated laser waveguides and electro-optic modulators for terabit co-packaged optical interconnects.'
  }
];

export const FoundryCalculator: React.FC<FoundryCalculatorProps> = ({ onOpenRfp }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('sub2nm');
  const [waferDiameter, setWaferDiameter] = useState<300 | 200>(300);
  const [dieSizeMm2, setDieSizeMm2] = useState<number>(350); // mm²
  const [monthlyWafers, setMonthlyWafers] = useState<number>(500);

  const activeNode = useMemo(() => {
    return NODES.find((n) => n.id === selectedNodeId) || NODES[0];
  }, [selectedNodeId]);

  // Gross Dies Per Wafer (DPW) using standard semiconductor geometry
  // DPW = (pi * (d/2)^2) / A - (pi * d) / sqrt(2 * A)
  const calculations = useMemo(() => {
    const radius = waferDiameter / 2;
    const waferArea = Math.PI * radius * radius;
    const grossDies = Math.floor(
      waferArea / dieSizeMm2 - (Math.PI * waferDiameter) / Math.sqrt(2 * dieSizeMm2)
    );

    // Murphy's Yield Model: Y = ((1 - exp(-D0 * A)) / (D0 * A))^2
    // Convert dieSizeMm2 to cm² (divide by 100)
    const areaCm2 = dieSizeMm2 / 100;
    const d0 = activeNode.defectDensity;
    const d0A = d0 * areaCm2;
    let yieldRate = Math.pow((1 - Math.exp(-d0A)) / d0A, 2);
    if (isNaN(yieldRate) || yieldRate > 0.99) yieldRate = 0.96;
    if (yieldRate < 0.5) yieldRate = 0.55;

    const goodDiesPerWafer = Math.floor(grossDies * yieldRate);
    const totalMonthlyGoodDies = goodDiesPerWafer * monthlyWafers;
    const totalTransistorsPerDie = Math.round((activeNode.transistorDensity * dieSizeMm2) / 1000); // in Billions

    return {
      grossDies: Math.max(1, grossDies),
      yieldPct: (yieldRate * 100).toFixed(1),
      goodDiesPerWafer: Math.max(1, goodDiesPerWafer),
      totalMonthlyGoodDies: Math.max(1, totalMonthlyGoodDies),
      totalTransistorsPerDie
    };
  }, [waferDiameter, dieSizeMm2, activeNode, monthlyWafers]);

  const handleExportToRfp = () => {
    const note = `Configured in Foundry Calculator:\n- Node: ${activeNode.name}\n- Wafer: ${waferDiameter}mm\n- Die Area: ${dieSizeMm2} mm²\n- Monthly Volume: ${monthlyWafers} wafers\n- Est. Yield: ${calculations.yieldPct}%\n- Projected Monthly Good Dies: ${calculations.totalMonthlyGoodDies.toLocaleString()}`;
    onOpenRfp(activeNode.name, note);
  };

  return (
    <section
      id="calculator"
      className="py-32 md:py-44 bg-[#111210] relative z-40 px-6 md:px-12 lg:px-16 text-[#EDE9E0] border-t border-[#2C2C2A]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E8622A] font-semibold mb-3">
            <Calculator className="w-4 h-4" />
            <span>INTERACTIVE FOUNDRY ARCHITECTURE TOOL</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-[#EDE9E0]">
            Silicon Yield Estimator.
          </h2>
          <p className="mt-6 text-base md:text-xl text-[#EDE9E0]/70 font-sans leading-relaxed">
            Simulate your chip architecture tapeout. Select your target process node, die dimensions, and monthly wafer starts to project defect density, net good dies per wafer, and lead times.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Configuration Column */}
          <div className="lg:col-span-7 bg-[#181917] border border-[#2C2C2A] rounded-2xl p-6 md:p-8 space-y-8">
            
            {/* Step 1: Select Node */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#EDE9E0]/70 mb-3">
                1. Target Process Node &amp; Transistor Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {NODES.map((node) => {
                  const isSelected = selectedNodeId === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#242522] border-[#E8622A] shadow-[0_0_15px_rgba(232,98,42,0.2)]'
                          : 'bg-[#111210]/60 border-[#2C2C2A] hover:border-[#3D3D39] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-['Barlow_Condensed'] uppercase font-bold text-lg text-[#EDE9E0]">
                          {node.name.split(' (')[0]}
                        </span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-[#E8622A]" />}
                      </div>
                      <span className="text-[11px] font-mono text-[#E8622A] block mb-2">
                        {node.transistorDensity} MTr/mm²
                      </span>
                      <p className="text-xs text-[#EDE9E0]/60 line-clamp-2">
                        {node.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Wafer Diameter & Die Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#2C2C2A]">
              
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#EDE9E0]/70 mb-2">
                  2. Wafer Substrate Diameter
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setWaferDiameter(300)}
                    className={`flex-1 py-3 px-4 rounded-xl font-mono text-xs uppercase font-bold border transition-colors cursor-pointer ${
                      waferDiameter === 300
                        ? 'bg-[#E8622A] text-white border-[#E8622A]'
                        : 'bg-[#111210] text-[#EDE9E0]/70 border-[#2C2C2A] hover:border-[#3D3D39]'
                    }`}
                  >
                    300mm Monocrystalline
                  </button>
                  <button
                    onClick={() => setWaferDiameter(200)}
                    className={`flex-1 py-3 px-4 rounded-xl font-mono text-xs uppercase font-bold border transition-colors cursor-pointer ${
                      waferDiameter === 200
                        ? 'bg-[#E8622A] text-white border-[#E8622A]'
                        : 'bg-[#111210] text-[#EDE9E0]/70 border-[#2C2C2A] hover:border-[#3D3D39]'
                    }`}
                  >
                    200mm SiC / GaN
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#EDE9E0]/70">
                    3. Die Footprint Area
                  </label>
                  <span className="text-sm font-mono font-bold text-[#E8622A]">{dieSizeMm2} mm²</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="820"
                  step="10"
                  value={dieSizeMm2}
                  onChange={(e) => setDieSizeMm2(parseInt(e.target.value))}
                  className="w-full accent-[#E8622A] cursor-pointer mt-2"
                  aria-label="Die footprint area slider"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#EDE9E0]/40 mt-1">
                  <span>50 mm² (Edge SoC)</span>
                  <span>400 mm²</span>
                  <span>820 mm² (Reticle Limit)</span>
                </div>
              </div>

            </div>

            {/* Step 3: Monthly Volume */}
            <div className="pt-4 border-t border-[#2C2C2A]">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-[#EDE9E0]/70">
                  4. Monthly Wafer Starts (WSPM)
                </label>
                <span className="text-sm font-mono font-bold text-[#E8622A]">{monthlyWafers.toLocaleString()} Wafers / Mo</span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={monthlyWafers}
                onChange={(e) => setMonthlyWafers(parseInt(e.target.value))}
                className="w-full accent-[#E8622A] cursor-pointer"
                aria-label="Monthly wafer starts slider"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#EDE9E0]/40 mt-1">
                <span>50 (MPW Shuttle / Prototype)</span>
                <span>1,500</span>
                <span>5,000+ (High Volume)</span>
              </div>
            </div>

          </div>

          {/* Right Calculations & Output Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#1F201D] to-[#181917] border border-[#E8622A]/40 rounded-2xl p-6 md:p-8 shadow-2xl relative">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8622A] font-bold block mb-4">
              SIMULATED FOUNDRY METRICS
            </span>

            <div className="border-b border-[#2C2C2A] pb-6 mb-6">
              <span className="text-xs font-mono text-[#EDE9E0]/60 uppercase block">Selected Architecture</span>
              <h3 className="font-['Barlow_Condensed'] font-bold text-3xl uppercase text-[#EDE9E0] mt-1">
                {activeNode.name}
              </h3>
              <p className="text-xs text-[#EDE9E0]/70 font-sans mt-1">
                {waferDiameter}mm Wafer · {dieSizeMm2} mm² Die Area
              </p>
            </div>

            {/* Metrics Breakdown */}
            <div className="space-y-4 mb-8">
              
              <div className="flex items-center justify-between p-3 bg-[#111210]/60 rounded-xl border border-[#2C2C2A]">
                <span className="text-xs font-mono text-[#EDE9E0]/70">Est. Transistor Count per Die:</span>
                <span className="text-base font-mono font-bold text-[#00E5FF]">
                  ~{calculations.totalTransistorsPerDie} Billion
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#111210]/60 rounded-xl border border-[#2C2C2A]">
                <span className="text-xs font-mono text-[#EDE9E0]/70">Gross Dies / Wafer (DPW):</span>
                <span className="text-base font-mono font-bold text-[#EDE9E0]">
                  {calculations.grossDies.toLocaleString()} dies
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#111210]/60 rounded-xl border border-[#2C2C2A]">
                <span className="text-xs font-mono text-[#EDE9E0]/70">Projected Murphy Die Yield:</span>
                <span className="text-base font-mono font-bold text-emerald-400">
                  {calculations.yieldPct}%
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#111210]/60 rounded-xl border border-[#2C2C2A]">
                <span className="text-xs font-mono text-[#EDE9E0]/70">Net Good Dies / Wafer:</span>
                <span className="text-base font-mono font-bold text-[#E8622A]">
                  {calculations.goodDiesPerWafer.toLocaleString()} dies
                </span>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-[#2C2C2A]/60 rounded-xl border border-[#E8622A]/30">
                <div>
                  <span className="text-xs font-mono text-[#EDE9E0]/80 block">MONTHLY GOOD DIES:</span>
                  <span className="text-xs text-[#EDE9E0]/50 font-sans">Based on {monthlyWafers.toLocaleString()} wafer starts</span>
                </div>
                <span className="text-xl md:text-2xl font-mono font-bold text-white">
                  {calculations.totalMonthlyGoodDies.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#111210]/60 rounded-xl border border-[#2C2C2A]">
                <span className="text-xs font-mono text-[#EDE9E0]/70">Engineering Sample Lead Time:</span>
                <span className="text-sm font-mono font-bold text-[#EDE9E0]">
                  {activeNode.leadTimeWeeks} Weeks
                </span>
              </div>

            </div>

            {/* Action Button: Attach to RFP */}
            <button
              onClick={handleExportToRfp}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 text-xs md:text-sm font-mono uppercase font-bold tracking-wider text-white bg-[#E8622A] hover:bg-[#D0531F] rounded-xl transition-all shadow-[0_0_25px_rgba(232,98,42,0.35)] cursor-pointer"
            >
              <span>Attach Specs &amp; Request Foundry Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-[#EDE9E0]/40 font-mono mt-3">
              * Yield estimations based on SemiconductorEra statistical baseline D₀ = {activeNode.defectDensity}/cm².
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
