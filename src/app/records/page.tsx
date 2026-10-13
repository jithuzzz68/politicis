'use client';

import React, { useState, useMemo } from 'react';
import { FileText, Search, Filter, ExternalLink, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';
import { VerificationBadge } from '@/components/VerificationBadge';

const CATEGORIES = [
  'all',
  'Gazette',
  'Assembly Debates',
  'Election Results',
  'Salary Notification',
  'Government Order (G.O)',
  'Audit & Committee Report',
] as const;

export default function RecordsPage() {
  const { t, isTamil } = useLanguage();
  const { publicRecords } = useStore();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('all');

  const filtered = useMemo(() => {
    return publicRecords.filter((r) => {
      if (category !== 'all' && r.category !== category) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          r.title_en.toLowerCase().includes(q) ||
          r.title_ta.includes(q) ||
          r.summary_en.toLowerCase().includes(q) ||
          r.document_ref.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [publicRecords, search, category]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#073324] to-[#16654b] text-white p-6 md:p-8 rounded-3xl shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold font-serif text-white flex items-center gap-3">
          <FileText className="w-7 h-7 text-amber-400" />
          <span>{isTamil ? "அரசு ஆவணங்கள் & அரசிதழ்கள்" : "Public Records & Official Gazettes"}</span>
        </h1>
        <p className="text-xs md:text-sm text-emerald-100/90 mt-1 max-w-2xl leading-relaxed">
          {isTamil
            ? "சட்டப்பேரவை நடவடிக்கைகள், தேர்தல் முடிவுகள், சம்பள அறிவிப்புகள், அரசானைகள் மற்றும் அரசு ஆணைகளின் நேரடி ஆவண இணைப்புகள்."
            : "Legislative proceedings, ECI election results, salary gazettes, and GO documents with direct authoritative source links."}
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs space-y-3">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={isTamil ? "ஆவணம், குறிப்பு எண் அல்லது தலைப்பு தேடுக..." : "Search records by title, reference, or content..."}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-700 focus:outline-hidden"
          />
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                category === cat
                  ? 'bg-[#0d4a36] text-amber-300'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat === 'all' ? (isTamil ? 'அனைத்து வகைகள்' : 'All Categories') : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <div className="text-xs font-semibold text-gray-600">
        {t.common.showingResults}: <span className="text-emerald-900 font-bold">{filtered.length}</span>
      </div>

      {/* Records Grid */}
      {filtered.length > 0 ? (
        <div className="space-y-4">
          {filtered.map((rec) => (
            <div key={rec.id} className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-2xs hover:border-emerald-700/40 hover:shadow-md transition-all space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200">
                      {rec.category}
                    </span>
                    <VerificationBadge status={rec.verification_status} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    {isTamil ? rec.title_ta : rec.title_en}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {isTamil ? rec.issuing_authority_ta : rec.issuing_authority_en} • Ref: {rec.document_ref}
                  </p>
                </div>
                <span className="text-xs font-mono text-gray-500 shrink-0">{rec.record_date}</span>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                {isTamil ? rec.summary_ta : rec.summary_en}
              </p>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">
                  {t.common.lastVerified}: {rec.last_verified}
                </span>
                <a
                  href={rec.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 border border-emerald-200 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  <span>{rec.source_name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-3">
          <FileText className="w-10 h-10 text-gray-300 mx-auto" />
          <p className="text-sm font-semibold text-gray-700">{t.common.noResultsFound}</p>
          <button
            onClick={() => { setSearch(''); setCategory('all'); }}
            className="text-xs text-emerald-800 font-semibold underline"
          >
            {t.common.clearFilters}
          </button>
        </div>
      )}
    </div>
  );
}
