'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, Search, Info, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';
import { PoliticianCard } from '@/components/PoliticianCard';

export default function MPsPage() {
  const { t, isTamil } = useLanguage();
  const { politicians } = useStore();
  const [search, setSearch] = useState('');
  const [houseFilter, setHouseFilter] = useState<'all' | 'lok_sabha' | 'rajya_sabha'>('all');

  const mps = politicians.filter(
    (p) => p.type === 'MP_LOK_SABHA' || p.type === 'MP_RAJYA_SABHA'
  );

  const filtered = mps.filter((p) => {
    if (houseFilter === 'lok_sabha' && p.type !== 'MP_LOK_SABHA') return false;
    if (houseFilter === 'rajya_sabha' && p.type !== 'MP_RAJYA_SABHA') return false;

    if (!search.trim()) return true;
    const q = search.toLowerCase().trim();
    return (
      p.name_en.toLowerCase().includes(q) ||
      p.name_ta.includes(q) ||
      (p.constituency_name_en && p.constituency_name_en.toLowerCase().includes(q)) ||
      (p.constituency_name_ta && p.constituency_name_ta.includes(q)) ||
      p.party_abbr.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#063327] via-[#094736] to-[#125843] text-white p-6 md:p-8 rounded-3xl shadow-sm border border-emerald-800/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-400 text-emerald-950">
                18வது மக்களவை & மாநிலங்களவை
              </span>
              <span className="text-xs text-emerald-200">39 மக்களவை + 18 மாநிலங்களவை</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold font-serif text-white">
              {isTamil ? "தமிழ்நாடு நாடாளுமன்ற உறுப்பினர்கள் (MPs)" : "Members of Parliament (MPs) - Tamil Nadu"}
            </h1>
            <p className="text-xs md:text-sm text-emerald-100/90 mt-1 max-w-2xl leading-relaxed">
              {isTamil
                ? "இந்திய நாடாளுமன்றத்தில் தமிழ்நாட்டைப் பிரதிநிதித்துவப்படுத்தும் 39 மக்களவை மற்றும் 18 மாநிலங்களவை உறுப்பினர்களின் அதிகாரப்பூர்வ விவரங்கள்."
                : "Official legislative records, parliamentary questions, and documented works of MPs representing Tamil Nadu in the Parliament of India."}
            </p>
          </div>

          <div className="relative max-w-xs w-full">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={isTamil ? "எம்.பி பெயர் அல்லது தொகுதி..." : "Search MP or constituency..."}
              className="w-full pl-9 pr-4 py-2 text-xs bg-emerald-950/70 text-white placeholder-emerald-300/70 border border-emerald-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-400"
            />
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-emerald-300" />
          </div>
        </div>
      </div>

      {/* Statutory Clarification Banner */}
      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-xs text-emerald-950">
        <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-emerald-900">
            {isTamil ? "சட்டப்பூர்வ ஊதியத் தெளிவுரை:" : "Statutory Salary Clarification:"}
          </p>
          <p className="leading-relaxed text-emerald-900/90">
            {isTamil
              ? "தமிழ்நாட்டைப் பிரதிநிதித்துவப்படுத்தும் நாடாளுமன்ற உறுப்பினர்கள், இந்தியாவின் பிற மாநில உறுப்பினர்களைப் போன்றே மத்திய நாடாளுமன்ற ஊதிய விதிகளின்படி (Salary, Allowances and Pension of Members of Parliament Act, 1954) மாத ஊதியம் ₹2,30,000 மற்றும் ஆண்டுக்கு ₹5 கோடி MPLADS தொகுதி நிதி பெறுகிறார்கள். மாநில அரசால் MPக்களுக்கு தனி ஊதியம் வழங்கப்படுவதில்லை."
              : "MPs representing Tamil Nadu receive the identical statutory salary as MPs representing any other state in India, governed centrally by the Parliament of India (₹2,30,000 monthly emoluments and ₹5 Crore annual MPLADS grant). State assemblies do not determine MP salaries."}
          </p>
        </div>
      </div>

      {/* Parliament Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
          <span className="text-xs text-gray-500 block mb-1">{isTamil ? "தமிழ்நாடு நாடாளுமன்ற பிரதிநிதித்துவம்" : "Total TN Seats in Parliament"}</span>
          <span className="text-2xl font-bold text-emerald-950 font-serif">57</span>
          <span className="text-[11px] text-gray-500 block mt-0.5">{isTamil ? "39 மக்களவை (Lok Sabha) + 18 மாநிலங்களவை (Rajya Sabha)" : "39 Lok Sabha + 18 Rajya Sabha"}</span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
          <span className="text-xs text-gray-500 block mb-1">{isTamil ? "நாடாளுமன்ற மாதாந்திர ஊதியம்" : "Official MP Monthly Pay"}</span>
          <span className="text-2xl font-bold text-emerald-950 font-serif">₹2,30,000</span>
          <span className="text-[11px] text-gray-500 block mt-0.5">{isTamil ? "நாடாளுமன்ற சட்டம் 1954 விதிகளின்படி" : "As per Parliament Act 1954"}</span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
          <span className="text-xs text-gray-500 block mb-1">{isTamil ? "தொகுதி மேம்பாட்டு நிதி (MPLADS)" : "Annual MPLADS Fund"}</span>
          <span className="text-2xl font-bold text-amber-700 font-serif">₹5.00 கோடி</span>
          <span className="text-[11px] text-gray-500 block mt-0.5">{isTamil ? "ஆண்டுதோறும் தொகுதி பொதுப்பணிகளுக்கு" : "PFMS direct district works release"}</span>
        </div>
      </div>

      {/* House Filter Tabs */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setHouseFilter('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            houseFilter === 'all'
              ? 'bg-[#0d4a36] text-amber-300 shadow-xs'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          {isTamil ? "அனைத்து உறுப்பினர்கள்" : "All MPs (57)"}
        </button>
        <button
          onClick={() => setHouseFilter('lok_sabha')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            houseFilter === 'lok_sabha'
              ? 'bg-[#0d4a36] text-amber-300 shadow-xs'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          {isTamil ? "மக்களவை (Lok Sabha - 39)" : "Lok Sabha (39)"}
        </button>
        <button
          onClick={() => setHouseFilter('rajya_sabha')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            houseFilter === 'rajya_sabha'
              ? 'bg-[#0d4a36] text-amber-300 shadow-xs'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          {isTamil ? "மாநிலங்களவை (Rajya Sabha - 18)" : "Rajya Sabha (18)"}
        </button>
      </div>

      {/* Grid of MPs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((mp) => (
          <PoliticianCard key={mp.id} politician={mp} />
        ))}
      </div>

    </div>
  );
}
