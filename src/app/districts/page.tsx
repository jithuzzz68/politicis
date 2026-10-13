'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { DistrictMapExplorer } from '@/components/DistrictMapExplorer';

export default function DistrictsPage() {
  const { isTamil } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#073324] to-[#16654b] text-white p-6 md:p-8 rounded-3xl shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold font-serif text-white flex items-center gap-3">
          <MapPin className="w-7 h-7 text-amber-400" />
          <span>
            {isTamil
              ? "தமிழ்நாடு மாவட்டங்கள் & சட்டமன்ற தொகுதிகள்"
              : "Tamil Nadu Districts & Assembly Constituencies"}
          </span>
        </h1>
        <p className="text-xs md:text-sm text-emerald-100/90 mt-1 max-w-2xl leading-relaxed">
          {isTamil
            ? "உங்கள் மாவட்டம் மற்றும் தொகுதியை தேர்ந்தெடுத்து பிரதிநிதி விவரங்களை அறியுங்கள். இந்த தகவல்கள் இந்திய தேர்தல் ஆணையம் மற்றும் சட்டமன்றப் பேரவை ஆவணங்களிலிருந்து பெறப்பட்டவை."
            : "Explore Tamil Nadu's 38 districts and their assembly/parliamentary constituencies. Representatives verified against ECI and Legislative Assembly records."}
        </p>
      </div>

      <DistrictMapExplorer />
    </div>
  );
}
