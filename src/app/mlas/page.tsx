'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Vote, Search, MapPin, Building, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';
import { PoliticianCard } from '@/components/PoliticianCard';

export default function MLAsPage() {
  const { t, isTamil } = useLanguage();
  const { politicians } = useStore();
  const [search, setSearch] = useState('');

  // MLAs include MLAs, CM, and Ministers who sit in the Assembly
  const mlas = politicians.filter(
    (p) => p.type === 'MLA' || p.type === 'CHIEF_MINISTER' || p.type === 'MINISTER'
  );

  const filtered = mlas.filter((p) => {
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
      <div className="bg-gradient-to-r from-[#073324] via-[#0d4a36] to-[#156046] text-white p-6 md:p-8 rounded-3xl shadow-sm border border-emerald-800/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-400 text-emerald-950">
                16வது சட்டமன்றப் பேரவை (16th Assembly)
              </span>
              <span className="text-xs text-emerald-200">234 தொகுதிகள்</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold font-serif text-white">
              {isTamil ? "தமிழ்நாடு சட்டமன்ற உறுப்பினர்கள் (MLAs)" : "Members of the Legislative Assembly (MLAs)"}
            </h1>
            <p className="text-xs md:text-sm text-emerald-100/90 mt-1 max-w-2xl leading-relaxed">
              {isTamil
                ? "தமிழ்நாட்டின் 234 சட்டமன்ற தொகுதிகளின் பிரதிநிதிகள், அவர்களின் கட்சி, சட்டப்பூர்வ சம்பளம் மற்றும் சட்டப்பேரவை ஆவணங்கள்."
                : "Explore elected MLAs of Tamil Nadu, their assembly constituencies, statutory allowances, and legislative participations."}
            </p>
          </div>

          <div className="relative max-w-xs w-full">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={isTamil ? "எம்.எல்.ஏ பெயர் அல்லது தொகுதி..." : "Search MLA or constituency..."}
              className="w-full pl-9 pr-4 py-2 text-xs bg-emerald-950/70 text-white placeholder-emerald-300/70 border border-emerald-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-400"
            />
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-emerald-300" />
          </div>
        </div>
      </div>

      {/* Assembly Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
          <span className="text-xs text-gray-500 block mb-1">{isTamil ? "மொத்த இடங்கள்" : "Total Seats"}</span>
          <span className="text-2xl font-bold text-emerald-950 font-serif">234</span>
          <span className="text-[11px] text-gray-500 block mt-0.5">{isTamil ? "188 பொது + 44 தனி (SC) + 2 பழங்குடி (ST)" : "188 General + 44 SC + 2 ST"}</span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
          <span className="text-xs text-gray-500 block mb-1">{isTamil ? "சட்டமன்ற மாதாந்திர ஊதியம்" : "Official Monthly Pay"}</span>
          <span className="text-2xl font-bold text-emerald-950 font-serif">₹1,05,000</span>
          <span className="text-[11px] text-gray-500 block mt-0.5">{isTamil ? "சட்டம் 2018 திருத்தத்தின்படி" : "As per TN Act 12 of 2018"}</span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs">
          <span className="text-xs text-gray-500 block mb-1">{isTamil ? "தொகுதி மேம்பாட்டு நிதி (MLACDS)" : "Constituency Scheme"}</span>
          <span className="text-2xl font-bold text-amber-700 font-serif">₹3.00 கோடி</span>
          <span className="text-[11px] text-gray-500 block mt-0.5">{isTamil ? "ஆண்டுதோறும் பொது வளர்ச்சிப் பணிகளுக்கு" : "Annual infrastructure works grant"}</span>
        </div>
      </div>

      {/* Grid of MLAs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((mla) => (
          <PoliticianCard key={mla.id} politician={mla} />
        ))}
      </div>

    </div>
  );
}
