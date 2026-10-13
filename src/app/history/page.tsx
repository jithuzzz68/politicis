'use client';

import React, { useState } from 'react';
import { History, Filter, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';
import { VerificationBadge } from '@/components/VerificationBadge';

const CATEGORY_COLORS: Record<string, string> = {
  'Election': 'bg-blue-100 text-blue-900 border-blue-200',
  'Chief Minister': 'bg-amber-100 text-amber-900 border-amber-200',
  'Landmark Legislation': 'bg-emerald-100 text-emerald-900 border-emerald-200',
  'Governance Milestone': 'bg-purple-100 text-purple-900 border-purple-200',
  'Political Movement': 'bg-red-100 text-red-900 border-red-200',
};

export default function HistoryPage() {
  const { isTamil } = useLanguage();
  const { timelineEvents } = useStore();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Election', 'Chief Minister', 'Landmark Legislation', 'Governance Milestone', 'Political Movement'];

  const filtered = activeCategory === 'all'
    ? timelineEvents
    : timelineEvents.filter((e) => e.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#073324] to-[#16654b] text-white p-6 md:p-8 rounded-3xl shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold font-serif text-white flex items-center gap-3">
          <History className="w-7 h-7 text-amber-400" />
          <span>{isTamil ? "தமிழக அரசியல் வரலாறு — 1952 முதல் இன்று வரை" : "Tamil Nadu Political History (1952 – Present)"}</span>
        </h1>
        <p className="text-xs md:text-sm text-emerald-100/90 mt-1 max-w-2xl leading-relaxed">
          {isTamil
            ? "சுதந்திரத்திற்கு பின் மெட்ராஸ் மாகாணம் முதல் தற்போதைய தமிழ்நாட்டின் ஆட்சி மாற்றங்கள், முக்கிய சட்டங்கள் மற்றும் வரலாற்றுச் சிறப்புமிக்க தேர்தல்கள்."
            : "Chronological record of elections, governance milestones, landmark legislation, and Chief Ministerial transitions in Tamil Nadu."}
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-[#0d4a36] text-amber-300 shadow-xs'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {cat === 'all' ? (isTamil ? 'அனைத்தும்' : 'All Events') :
             cat === 'Election' ? (isTamil ? 'தேர்தல்கள்' : 'Elections') :
             cat === 'Chief Minister' ? (isTamil ? 'முதலமைச்சர்கள்' : 'CM Transitions') :
             cat === 'Landmark Legislation' ? (isTamil ? 'முக்கிய சட்டங்கள்' : 'Landmark Laws') :
             cat === 'Governance Milestone' ? (isTamil ? 'ஆட்சி மைல்கற்கள்' : 'Governance Milestones') :
             (isTamil ? 'அரசியல் இயக்கங்கள்' : 'Political Movements')}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical spine */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-200/70" />

        <div className="space-y-6 pl-16">
          {filtered.map((event) => (
            <div key={event.id} className="relative">
              {/* Year marker on the spine */}
              <div className="absolute -left-16 top-3 w-10 h-10 rounded-full bg-[#0d4a36] text-white flex items-center justify-center text-[10px] font-bold shadow-md border-2 border-white">
                <span className="text-center leading-tight">{event.year}</span>
              </div>

              {/* Event Card */}
              <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs hover:border-emerald-700/40 hover:shadow-md transition-all p-5 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${CATEGORY_COLORS[event.category] || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
                    {event.category}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500">{event.date_formatted}</span>
                  <VerificationBadge status={event.verification_status} showText={false} />
                </div>

                <h3 className="text-base font-bold text-gray-900">
                  {isTamil ? event.title_ta : event.title_en}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {isTamil ? event.description_ta : event.description_en}
                </p>

                {event.key_figures_en.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {(isTamil ? event.key_figures_ta : event.key_figures_en).map((fig, i) => (
                      <span key={i} className="text-[11px] bg-emerald-50 text-emerald-900 px-2.5 py-0.5 rounded-full border border-emerald-200 font-medium">
                        {fig}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-end pt-1">
                  <a
                    href={event.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-emerald-800 hover:text-emerald-950 font-semibold"
                  >
                    <span>{event.source_name}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
