'use client';

import React from 'react';
import Link from 'next/link';
import { Crown, ExternalLink, AlertTriangle, ShieldCheck, Info } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';
import { PoliticianCard } from '@/components/PoliticianCard';
import { VerificationBadge } from '@/components/VerificationBadge';

export default function MinistersPage() {
  const { t, isTamil } = useLanguage();
  const { politicians } = useStore();

  const cm = politicians.filter((p) => p.type === 'CHIEF_MINISTER');
  const ministers = politicians.filter((p) => p.type === 'MINISTER');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#073324] to-[#16654b] text-white p-6 md:p-8 rounded-3xl shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-400 text-emerald-950">
            {isTamil ? "16வது சட்டமன்றம் — ஆட்சி (2021 - தற்போது)" : "16th Assembly Cabinet (2021 – Present)"}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-serif text-white">
          {isTamil ? "முதலமைச்சர் & அமைச்சரவை உறுப்பினர்கள்" : "Chief Minister & Council of Ministers"}
        </h1>
        <p className="text-xs md:text-sm text-emerald-100/90 mt-1 max-w-2xl leading-relaxed">
          {isTamil
            ? "மாநில நிர்வாகத்தை வழிநடத்தும் முதலமைச்சர் மற்றும் அமைச்சரவையின் அதிகாரப்பூர்வ இலாகா விவரங்கள்."
            : "Official ministerial portfolios, legislative records, and constitutional responsibilities of the Tamil Nadu Cabinet."}
        </p>
      </div>

      {/* Chief Minister */}
      {cm.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-[#073324] font-serif flex items-center gap-2">
            <Crown className="w-5 h-5 text-amber-600" />
            <span>{isTamil ? "முதலமைச்சர்" : "Chief Minister"}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cm.map((p) => <PoliticianCard key={p.id} politician={p} />)}
          </div>
        </section>
      )}

      {/* State Ministers */}
      {ministers.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-[#073324] font-serif flex items-center gap-2">
            <Crown className="w-5 h-5 text-emerald-700" />
            <span>{isTamil ? "அமைச்சரவை உறுப்பினர்கள்" : "Cabinet Ministers"}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ministers.map((p) => <PoliticianCard key={p.id} politician={p} />)}
          </div>
        </section>
      )}

      {/* Constitutional context */}
      <div className="p-5 bg-white rounded-2xl border border-gray-200 shadow-2xs space-y-3">
        <h3 className="text-base font-bold text-gray-900 font-serif flex items-center gap-2">
          <Info className="w-4 h-4 text-emerald-700" />
          <span>{isTamil ? "அமைச்சரவை அமைப்பு — அரசியலமைப்புச் சட்ட விதிகள்" : "Council of Ministers — Constitutional Basis"}</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
          <div className="p-3 bg-gray-50 rounded-xl">
            <span className="font-bold text-emerald-900 block mb-1">Article 163</span>
            <span>{isTamil ? "ஆளுநருக்கு உதவி மற்றும் ஆலோசனை வழங்க அமைச்சரவை அமைக்கப்படுகிறது." : "Council of Ministers to aid and advise the Governor in the exercise of his functions."}</span>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl">
            <span className="font-bold text-emerald-900 block mb-1">Article 164</span>
            <span>{isTamil ? "முதலமைச்சர் ஆளுநரால் நியமிக்கப்படுகிறார்; பிற அமைச்சர்கள் CM பரிந்துரையின்படி." : "Chief Minister appointed by Governor; other Ministers on CM's advice."}</span>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl">
            <span className="font-bold text-emerald-900 block mb-1">Article 167</span>
            <span>{isTamil ? "முதலமைச்சர் அமைச்சரவை முடிவுகளை ஆளுநருக்கு தெரிவிக்க கடமைப்பட்டவர்." : "Chief Minister obligated to communicate Cabinet decisions to the Governor."}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
