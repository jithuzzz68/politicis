'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bookmark, MapPin, ChevronRight, Coins, ShieldCheck } from 'lucide-react';
import { Politician } from '@/types';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';
import { VerificationBadge } from './VerificationBadge';

interface PoliticianCardProps {
  politician: Politician;
}

export const PoliticianCard: React.FC<PoliticianCardProps> = ({ politician }) => {
  const { isTamil, t } = useLanguage();
  const { isPoliticianSaved, toggleSavePolitician } = useStore();
  const isSaved = isPoliticianSaved(politician.id);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200/90 hover:border-emerald-700/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Top Banner & Status bar */}
      <div className="flex items-center justify-between p-3.5 pb-2 bg-gradient-to-r from-gray-50 to-emerald-50/30 border-b border-gray-100">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className="text-[11px] font-bold px-2 py-0.5 rounded-md text-white shadow-2xs"
            style={{ backgroundColor: politician.party_color || '#16654b' }}
          >
            {politician.party_abbr}
          </span>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">
            {politician.is_current ? t.common.current : t.common.former}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <VerificationBadge status={politician.verification_status} showText={false} />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleSavePolitician(politician.id);
            }}
            className={`p-1.5 rounded-full transition-colors ${
              isSaved
                ? 'text-amber-500 bg-amber-50 hover:bg-amber-100'
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
            }`}
            title={isSaved ? t.common.unsaved : t.common.saveProfile}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start gap-3.5 mb-3">
          
          {/* Avatar / Photo */}
          <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-emerald-100/60 shrink-0 border border-emerald-900/10 shadow-2xs">
            {politician.photo_url ? (
              <img
                src={politician.photo_url}
                alt={politician.name_en}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-bold text-emerald-800 text-xl">
                {politician.name_en.charAt(0)}
              </div>
            )}
          </div>

          {/* Names and Title */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-900 transition-colors truncate">
              {isTamil ? politician.name_ta : politician.name_en}
            </h3>
            <p className="text-xs text-gray-500 truncate mb-1">
              {isTamil ? politician.name_en : politician.name_ta}
            </p>
            <p className="text-xs font-semibold text-emerald-800 line-clamp-1">
              {isTamil ? politician.position_title_ta : politician.position_title_en}
            </p>
          </div>
        </div>

        {/* Constituency & District */}
        {(politician.constituency_name_en || politician.district_name_en) && (
          <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-3 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
            <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span className="truncate">
              {isTamil
                ? `${politician.constituency_name_ta || ''}${
                    politician.district_name_ta ? ` (${politician.district_name_ta})` : ''
                  }`
                : `${politician.constituency_name_en || ''}${
                    politician.district_name_en ? ` (${politician.district_name_en})` : ''
                  }`}
            </span>
          </div>
        )}

        {/* Short Bio snippet */}
        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4 flex-1">
          {isTamil ? politician.biography_ta : politician.biography_en}
        </p>

        {/* Official Statutory Salary Badge */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs mb-3">
          <div className="flex items-center gap-1.5 text-gray-500">
            <Coins className="w-3.5 h-3.5 text-amber-600" />
            <span>{isTamil ? "சட்டப்பூர்வ ஊதியம்" : "Statutory Pay"}</span>
          </div>
          <span className="font-bold text-emerald-900">
            {formatCurrency(politician.remuneration.total_monthly_emoluments)}
            <span className="text-[10px] text-gray-500 font-normal"> / {isTamil ? "மாதம்" : "mo"}</span>
          </span>
        </div>

        {/* Action Link */}
        <Link
          href={`/politicians/${politician.id}`}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gray-50 hover:bg-emerald-800 hover:text-white text-xs font-semibold text-emerald-900 border border-gray-200 hover:border-emerald-800 transition-all group-hover:bg-[#073324] group-hover:text-amber-300"
        >
          <span>{t.common.viewProfile}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>

      </div>
    </div>
  );
};
