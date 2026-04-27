import React, { useState } from 'react';
import { 
  TrendingUp, Calendar, MapPin, Users, DollarSign, 
  Mic, PlayCircle, BarChart3, LayoutDashboard, Target, Sparkles
} from 'lucide-react';

// --- DATA MODELS ---

const talentData = [
  { name: "Urooj Ashfaq", gender: "Female", fit: 9.5, fee: "₹ 3-5L", style: "Observational, charming [cite: 36]" },
  { name: "Aishwarya Mohanraj", gender: "Female", fit: 9.0, fee: "₹ 2-4L", style: "Mainstream, relatable [cite: 36]" },
  { name: "Kullu (Aaditya)", gender: "Male", fit: 9.0, fee: "₹ 3-6L", style: "Observational Hindi, viral [cite: 38]" },
  { name: "Sharon Verma", gender: "Female", fit: 8.5, fee: "TBD", style: "Bihar-origin, viral spike [cite: 202]" },
];

const venueData = [
  { name: "Indira Gandhi Indoor Stadium", capacity: "14,300-15,000", cost: "₹ 15-25L", pros: "Monsoon-proof, AC, Top Pick [cite: 83, 253]" },
  { name: "NSIC Exhibition Grounds", capacity: "10-20K", cost: "₹ 15-25L", pros: "Flexible build, Outdoor [cite: 83, 253]" },
  { name: "JLN Stadium (Outdoor)", capacity: "60K (20K config)", cost: "₹ 20-40L", pros: "Scale optionality [cite: 83]" },
];

const lineupCombos = [
  { name: "Combo A (Female Mass)", lineup: "AP Dhillon + Anuv Jain + Aishwarya + Hanumankind", fee: "₹ 2.2-3 Cr", tickets: "12-15K [cite: 94]" },
  { name: "Combo D (Recommended)", lineup: "Anuv Jain + Karan Aujla + Zakir Khan + Hanumankind", fee: "₹ 2.0-2.8 Cr", tickets: "13-16K [cite: 94]" },
  { name: "Combo E (Indie Premium)", lineup: "Ritviz + Talwiinder & Lou + The Local Train + Bassi", fee: "₹ 1.2-1.8 Cr", tickets: "9-12K [cite: 94]" },
];

// --- COMPONENTS ---

const Card = ({ children, className = "" }) => (
  <div className={`bg-gray-900 border border-gray-800 rounded-xl p-6 ${className}`}>
    {children}
  </div>
);

const ProgressBar = ({ label, value, max, colorClass = "bg-amber-500", prefix = "" }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm text-gray-400 mb-1">
      <span>{label}</span>
      <span>{prefix}{value} / {prefix}{max}</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-2">
      <div className={`${colorClass} h-2 rounded-full transition-all duration-500`} style={{ width: `${(value / max) * 100}%` }}></div>
    </div>
  </div>
);

// --- MAIN DASHBOARD VIEW ---
const ExecutiveDashboard = ({ setView }) => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="mb-8">
      <h2 className="text-3xl font-light text-white mb-2">Executive Overview</h2>
      <p className="text-gray-400 max-w-3xl leading-relaxed">
        Palmonas needs an owned-IP content engine that compounds attention, lowers CAC versus paid social, and converts cultural relevance into purchase intent. [cite: 9] The June 2026 initiative comprises two interlocking IPs to create a defensible brand moat ahead of luxe sub-brand launches. [cite: 10, 19]
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <div className="flex items-center gap-4 mb-4 text-amber-500">
          <DollarSign size={24} />
          <h3 className="font-semibold text-white">Gross Investment</h3>
        </div>
        <p className="text-4xl font-light text-white">₹ 8.07 Cr</p>
        <p className="text-sm text-gray-400 mt-2">Combined initiative spend [cite: 21]</p>
      </Card>
      <Card>
        <div className="flex items-center gap-4 mb-4 text-amber-500">
          <Target size={24} />
          <h3 className="font-semibold text-white">Net Brand Spend</h3>
        </div>
        <p className="text-4xl font-light text-white">~₹ 0 - 1 Cr</p>
        <p className="text-sm text-gray-400 mt-2">After projected sponsor & ticket offset [cite: 21]</p>
      </Card>
      <Card>
        <div className="flex items-center gap-4 mb-4 text-amber-500">
          <Users size={24} />
          <h3 className="font-semibold text-white">Audience Touchpoints</h3>
        </div>
        <p className="text-4xl font-light text-white">50M+</p>
        <p className="text-sm text-gray-400 mt-2">12K live + 30M+ digital [cite: 21]</p>
      </Card>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <button onClick={() => setView('comedy')} className="text-left group cursor-pointer hover:ring-2 ring-amber-500 rounded-xl transition-all">
        <Card className="h-full bg-gradient-to-br from-gray-900 to-gray-950 group-hover:from-gray-800">
          <PlayCircle size={32} className="text-amber-500 mb-4" />
          <h3 className="text-xl font-medium text-white mb-2">Project 1: Comedy Show IP</h3>
          <p className="text-gray-400 text-sm mb-4">A weekly YouTube-first comedy/talk format owned by Palmonas. "Spill the Bling" (working title)[cite: 12].</p>
          <div className="text-amber-400 text-sm font-medium flex items-center gap-2">
            Enter Intelligence Lab <TrendingUp size={16} />
          </div>
        </Card>
      </button>

      <button onClick={() => setView('event')} className="text-left group cursor-pointer hover:ring-2 ring-amber-500 rounded-xl transition-all">
        <Card className="h-full bg-gradient-to-br from-gray-900 to-gray-950 group-hover:from-gray-800">
          <MapPin size={32} className="text-amber-500 mb-4" />
          <h3 className="text-xl font-medium text-white mb-2">Project 2: Delhi Live Event</h3>
          <p className="text-gray-400 text-sm mb-4">A single-day branded music + comedy festival, 12K paid + 1.2K comp audience[cite: 15]. Target date: July 2026.</p>
          <div className="text-amber-400 text-sm font-medium flex items-center gap-2">
            Enter Strategy Hub <TrendingUp size={16} />
          </div>
        </Card>
      </button>
    </div>
  </div>
);

// --- PROJECT 1: COMEDY IP VIEW ---
const ComedyLab = () => {
  const [sponsorRecovery, setSponsorRecovery] = useState(2.12); // Base case in Cr [cite: 67]
  const cost = 3.0; // Fixed budget [cite: 65]

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-light text-white flex items-center gap-3">
            <Mic className="text-amber-500" /> Comedy IP Intelligence Lab
          </h2>
          <p className="text-gray-400 mt-2">Evaluating format, talent, and economics for a 8-episode YouTube season[cite: 13, 64].</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-medium text-white mb-4 border-b border-gray-800 pb-2">Strategic Direction</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-800/50 rounded-lg border border-amber-500/30">
              <h4 className="text-amber-400 font-medium flex justify-between">
                <span>Female Host (Recommended)</span>
                <span className="text-xs bg-amber-500/20 px-2 py-1 rounded">Direction A</span>
              </h4>
              <p className="text-sm text-gray-300 mt-2">Identity-aligned with 95% female base. Authentic. Press narrative = 'female-led brand backs female creator economy'. [cite: 28]</p>
            </div>
            <div className="p-4 bg-gray-800/30 rounded-lg">
              <h4 className="text-gray-100 font-medium flex justify-between">
                <span>Male Host + Female Guest Panel</span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded">Direction B</span>
              </h4>
              <p className="text-sm text-gray-400 mt-2">Reaches male partners/gifters. Larger raw subscriber bases. Risk: looks performative if not curated carefully. [cite: 28]</p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-medium text-white mb-4 border-b border-gray-800 pb-2">Concept Winner: "Spill the Bling"</h3>
          <p className="text-sm text-gray-300 mb-4">
            Female-host gossip-comedy. Guests 'spill' stories tagged with truth/dare jewellery prompts. 10/10 Brand Fit. [cite: 45]
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-start gap-2"><Sparkles size={16} className="text-amber-500 shrink-0 mt-0.5" /> Set integration: Branded display piece on set. Host wears 3+ pieces. [cite: 59]</li>
            <li className="flex items-start gap-2"><Sparkles size={16} className="text-amber-500 shrink-0 mt-0.5" /> Spill Cards = Jewellery boxes: Branded boxes used as format prop. [cite: 59]</li>
            <li className="flex items-start gap-2"><Sparkles size={16} className="text-amber-500 shrink-0 mt-0.5" /> Stack Drop: Host reveals limited-edition piece launching 24h post-airing. [cite: 49]</li>
          </ul>
        </Card>

        <Card className="lg:col-span-2">
          <h3 className="text-lg font-medium text-white mb-4 border-b border-gray-800 pb-2">Talent Database</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="text-xs text-gray-500 uppercase bg-gray-800/50">
                <tr>
                  <th className="px-4 py-3">Comic</th>
                  <th className="px-4 py-3">Gender</th>
                  <th className="px-4 py-3">Brand Fit (/10)</th>
                  <th className="px-4 py-3">Est. Fee/Ep</th>
                  <th className="px-4 py-3">Style Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {talentData.map((t, idx) => (
                  <tr key={idx} className="hover:bg-gray-800/30">
                    <td className="px-4 py-3 font-medium text-white">{t.name}</td>
                    <td className="px-4 py-3">{t.gender}</td>
                    <td className="px-4 py-3 text-amber-400">{t.fit}</td>
                    <td className="px-4 py-3">{t.fee}</td>
                    <td className="px-4 py-3 text-gray-400">{t.style}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="lg:col-span-2 bg-gradient-to-r from-gray-900 to-gray-800">
          <h3 className="text-lg font-medium text-white mb-4 border-b border-gray-700 pb-2 flex justify-between">
            <span>Financial Scenario Sandbox</span>
            <span className="text-sm font-normal text-gray-400">Values in ₹ Cr</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Adjust Target Sponsor & Ad Recovery [cite: 67]</label>
              <input 
                type="range" 
                min="1.0" max="3.5" step="0.1" 
                value={sponsorRecovery} 
                onChange={(e) => setSponsorRecovery(parseFloat(e.target.value))}
                className="w-full accent-amber-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Conservative (1.39 Cr)</span>
                <span>Optimistic (3.05 Cr)</span>
              </div>
            </div>
            <div className="space-y-4">
              <ProgressBar label="Total Cost (S1, 8 Eps) [cite: 65]" value={cost} max={4} prefix="₹" colorClass="bg-red-500" />
              <ProgressBar label="Projected Recovery" value={sponsorRecovery} max={4} prefix="₹" colorClass="bg-emerald-500" />
              <div className="pt-4 border-t border-gray-700 flex justify-between items-center">
                <span className="text-gray-300">Net Palmonas Spend:</span>
                <span className={`text-2xl font-semibold ${cost - sponsorRecovery <= 0 ? 'text-emerald-400' : 'text-white'}`}>
                  ₹ {Math.max(0, cost - sponsorRecovery).toFixed(2)} Cr
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// --- PROJECT 2: EVENT STRATEGY HUB ---
const EventHub = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-light text-white flex items-center gap-3">
            <Calendar className="text-amber-500" /> Delhi Event Strategy Hub
          </h2>
          <p className="text-gray-400 mt-2">Tentpole branded festival, 12K paid. Evaluating venue, lineup, and profitability[cite: 15, 76].</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1">
          <h3 className="text-lg font-medium text-white mb-4 border-b border-gray-800 pb-2">Target Date</h3>
          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
            <h4 className="text-amber-400 font-semibold text-xl">4-5 July 2026</h4>
            <p className="text-sm text-gray-300 mt-2">Active monsoon — indoor mandatory. Lower competing-event noise. [cite: 80]</p>
          </div>
        </Card>

        <Card className="col-span-1 lg:col-span-2">
          <h3 className="text-lg font-medium text-white mb-4 border-b border-gray-800 pb-2">Venue Intelligence</h3>
          <div className="space-y-3">
            {venueData.map((v, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                <div>
                  <h4 className="text-gray-100 font-medium">{v.name}</h4>
                  <p className="text-xs text-gray-400">{v.pros}</p>
                </div>
                <div className="text-right">
                  <span className="block text-sm text-white font-medium">{v.capacity} pax</span>
                  <span className="block text-xs text-gray-500">{v.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-3">
          <h3 className="text-lg font-medium text-white mb-4 border-b border-gray-800 pb-2">Lineup Architecture matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="text-xs text-gray-500 uppercase bg-gray-800/50">
                <tr>
                  <th className="px-4 py-3">Combo Strategy</th>
                  <th className="px-4 py-3">Lineup</th>
                  <th className="px-4 py-3">Total Fee</th>
                  <th className="px-4 py-3">Ticket Pull</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {lineupCombos.map((c, idx) => (
                  <tr key={idx} className={c.name.includes('Recommended') ? "bg-amber-500/10 border-l-2 border-amber-500" : "hover:bg-gray-800/30"}>
                    <td className="px-4 py-3 font-medium text-white">{c.name}</td>
                    <td className="px-4 py-3">{c.lineup}</td>
                    <td className="px-4 py-3">{c.fee}</td>
                    <td className="px-4 py-3">{c.tickets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            *Combo D wins because: Anuv Jain locks premium female demo, Karan Aujla brings mass, Zakir adds comedy, Hanumankind opens with Gen-Z heat. [cite: 95]
          </p>
        </Card>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-lg font-medium text-white mb-4 border-b border-gray-800 pb-2">Mid-Case Revenue Model [cite: 108]</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Tickets (12K @ ₹2,500 avg)</span>
                <span className="text-white">₹ 3.00 Cr</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Sponsors (Cash)</span>
                <span className="text-white">₹ 2.50 Cr</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">In-kind / Merch</span>
                <span className="text-white">₹ 0.70 Cr</span>
              </div>
              <div className="flex justify-between font-bold pt-2">
                <span className="text-amber-500">Total Revenue Forecast</span>
                <span className="text-amber-500">₹ 6.20 Cr</span>
              </div>
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-medium text-white mb-4 border-b border-gray-800 pb-2">Profitability Architecture</h3>
            <div className="space-y-4">
              <ProgressBar label="Target Production Cost [cite: 106]" value={5.07} max={7} prefix="₹" colorClass="bg-red-500" />
              <ProgressBar label="Total Revenue [cite: 108]" value={6.20} max={7} prefix="₹" colorClass="bg-emerald-500" />
              <p className="text-sm text-gray-300 mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <strong>Strategic Mandate:</strong> Event must be self-funding via sponsors. Ticket revenue + Palmonas activations (₹3.0 Cr+) become pure brand-building margin. Net Surplus: <strong>₹ 1.13 Cr</strong>. [cite: 18, 108, 111]
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// --- APP SHELL ---
export default function ConceptDeckApp() {
  const [view, setView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans selection:bg-amber-500/30">
      {/* Top Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-gray-900 font-bold">P</div>
            <span className="text-white font-medium tracking-widest text-sm ml-2 uppercase">Palmonas // Founder's Office</span>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setView('dashboard')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${view === 'dashboard' ? 'bg-gray-800 text-amber-500' : 'text-gray-400 hover:text-white'}`}
            >
              <LayoutDashboard size={18} className="inline mr-2" />
              Dashboard
            </button>
            <button 
              onClick={() => setView('comedy')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${view === 'comedy' ? 'bg-gray-800 text-amber-500' : 'text-gray-400 hover:text-white'}`}
            >
              <PlayCircle size={18} className="inline mr-2" />
              Comedy IP
            </button>
            <button 
              onClick={() => setView('event')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${view === 'event' ? 'bg-gray-800 text-amber-500' : 'text-gray-400 hover:text-white'}`}
            >
              <MapPin size={18} className="inline mr-2" />
              Delhi Event
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-8 pb-20">
        {view === 'dashboard' && <ExecutiveDashboard setView={setView} />}
        {view === 'comedy' && <ComedyLab />}
        {view === 'event' && <EventHub />}
      </main>
    </div>
  );
}