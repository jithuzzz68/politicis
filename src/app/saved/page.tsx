'use client';

import React from 'react';
import Link from 'next/link';
import { Bookmark, BookmarkX, Users } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';
import { PoliticianCard } from '@/components/PoliticianCard';

export default function SavedPage() {
  const { t, isTamil } = useLanguage();
  const { politicians, savedPoliticianIds } = useStore();

  const saved = politicians.filter((p) => savedPoliticianIds.includes(p.id));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#073324] flex items-center gap-2">
            <Bookmark className="w-6 h-6 text-amber-600" />
            <span>{isTamil ? "சேமிக்கப்பட்ட சுயவிவரங்கள்" : "Saved Politician Profiles"}</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            {isTamil
              ? "நீங்கள் சேமித்த பிரதிநிதிகளின் விவரங்கள் உங்கள் சாதனத்தில் சேமிக்கப்பட்டுள்ளன."
              : "Profiles you have bookmarked are saved locally on this device."}
          </p>
        </div>
        <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
          {saved.length} {isTamil ? "சேமிக்கப்பட்டது" : "Saved"}
        </span>
      </div>

      {saved.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {saved.map((p) => <PoliticianCard key={p.id} politician={p} />)}
        </div>
      ) : (
        <div className="bg-white p-16 rounded-3xl border border-gray-200 text-center space-y-4">
          <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto">
            <BookmarkX className="w-8 h-8 text-amber-500" />
          </div>
          <h2 className="text-lg font-bold text-gray-800">
            {isTamil ? "இதுவரை எந்த சுயவிவரமும் சேமிக்கப்படவில்லை" : "No Saved Profiles Yet"}
          </h2>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            {isTamil
              ? "அரசியல்வாதிகளின் கார்டில் உள்ள புத்தக அடையாளம் ஐகானை அழுத்தி விவரங்களை சேமிக்கவும்."
              : "Click the bookmark icon on any politician card to save profiles for quick access."}
          </p>
          <Link
            href="/politicians"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0d4a36] text-amber-300 rounded-xl text-sm font-semibold hover:bg-[#073324] transition-colors"
          >
            <Users className="w-4 h-4" />
            <span>{isTamil ? "பிரதிநிதிகளை உலாவுக" : "Browse Representatives"}</span>
          </Link>
        </div>
      )}
    </div>
  );
}
