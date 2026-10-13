'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Users, Vote, Building2, ChevronRight, Search } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';

export const DistrictMapExplorer: React.FC = () => {
  const { isTamil } = useLanguage();
  const { districts, constituencies, politicians } = useStore();
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>('chennai');
  const [searchDistrict, setSearchDistrict] = useState<string>('');

  const filteredDistricts = districts.filter(d => 
    d.name_en.toLowerCase().includes(searchDistrict.toLowerCase()) ||
    d.name_ta.includes(searchDistrict)
  );

  const activeDistrict = districts.find(d => d.id === selectedDistrictId) || districts[0];
  const districtConstituencies = constituencies.filter(c => c.district_id === activeDistrict?.id);
  const districtPoliticians = politicians.filter(p => p.district_id === activeDistrict?.id);

  return (
    <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden">
      
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-[#073324] to-[#16654b] text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider text-amber-300 uppercase">
              {isTamil ? "மண்டல & தொகுதி வழிகாட்டி" : "Constituency Navigator"}
            </span>
            <h2 className="text-2xl font-bold font-serif mt-1">
              {isTamil ? "தமிழ்நாடு 38 மாவட்டங்கள் மற்றும் தொகுதிகள்" : "Explore Tamil Nadu Districts & Representatives"}
            </h2>
          </div>
          <div className="relative max-w-xs w-full">
            <input
              type="text"
              value={searchDistrict}
              onChange={(e) => setSearchDistrict(e.target.value)}
              placeholder={isTamil ? "மாவட்டம் தேடுக..." : "Search district..."}
              className="w-full pl-9 pr-4 py-2 text-xs bg-emerald-900/60 text-white placeholder-emerald-300/70 border border-emerald-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-400"
            />
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-emerald-300" />
          </div>
        </div>
      </div>

      {/* Grid Layout: Left District Pill List, Right District Details & Reps */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        
        {/* District selector column */}
        <div className="lg:col-span-4 border-r border-gray-100 p-4 max-h-[500px] overflow-y-auto space-y-1">
          {filteredDistricts.map((d) => {
            const isSelected = d.id === selectedDistrictId;
            return (
              <button
                key={d.id}
                onClick={() => setSelectedDistrictId(d.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#0d4a36] text-amber-300 font-bold shadow-xs'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-gray-400'}`} />
                  <span>{isTamil ? d.name_ta : d.name_en}</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isSelected ? 'bg-amber-400 text-emerald-950 font-bold' : 'bg-gray-100 text-gray-600'
                }`}>
                  {d.assembly_seats_count} {isTamil ? "தொகுதிகள்" : "Seats"}
                </span>
              </button>
            );
          })}
        </div>

        {/* District Detail View */}
        <div className="lg:col-span-8 p-6 space-y-6">
          {activeDistrict && (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {isTamil ? activeDistrict.name_ta : activeDistrict.name_en} {isTamil ? "மாவட்டம்" : "District"}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {isTamil ? "தலைமையிடம்:" : "Headquarters:"} {isTamil ? activeDistrict.headquarters_ta : activeDistrict.headquarters_en} • {activeDistrict.population ? (isTamil ? `மக்கள் தொகை: ${activeDistrict.population}` : `Population: ${activeDistrict.population}`) : ''}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-emerald-50 text-emerald-800 font-semibold px-3 py-1 rounded-full border border-emerald-200">
                    {activeDistrict.assembly_seats_count} {isTamil ? "சட்டமன்ற தொகுதிகள்" : "Assembly Constituencies"}
                  </span>
                </div>
              </div>

              {/* Assembly Constituencies in District */}
              <div>
                <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Vote className="w-4 h-4 text-emerald-700" />
                  <span>{isTamil ? "சட்டமன்ற மற்றும் நாடாளுமன்ற தொகுதிகள்" : "Assembly & Parliamentary Constituencies"}</span>
                </h4>
                {districtConstituencies.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {districtConstituencies.map((c) => (
                      <div key={c.id} className="p-3 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-white hover:border-emerald-300 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-gray-900">
                            {isTamil ? c.name_ta : c.name_en}
                          </span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-sm font-semibold ${
                            c.type === 'assembly' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {c.type === 'assembly' ? (isTamil ? 'சட்டமன்றம்' : 'Assembly') : (isTamil ? 'மக்களவை' : 'Lok Sabha')}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-600">
                          {isTamil ? "பிரதிநிதி:" : "Current Rep:"}{" "}
                          <span className="font-semibold text-emerald-800">
                            {isTamil ? c.current_representative_name_ta : c.current_representative_name_en}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 italic">
                    {isTamil ? "இம்மாவட்டத்திற்கான முழு பட்டியல் சேர்க்கப்படுகிறது..." : "Full constituency records being mapped..."}
                  </p>
                )}
              </div>

              {/* Representatives from this district */}
              <div>
                <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-700" />
                  <span>{isTamil ? "ஆவணப்படுத்தப்பட்ட மக்கள் பிரதிநிதிகள்" : "Elected Representatives"}</span>
                </h4>
                {districtPoliticians.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {districtPoliticians.map((p) => (
                      <Link
                        key={p.id}
                        href={`/politicians/${p.id}`}
                        className="p-3 rounded-xl border border-gray-200/90 bg-white hover:border-emerald-600 hover:shadow-xs transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2.5">
                          <img
                            src={p.photo_url}
                            alt={p.name_en}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div>
                            <p className="text-xs font-bold text-gray-900 group-hover:text-emerald-900">
                              {isTamil ? p.name_ta : p.name_en}
                            </p>
                            <span className="text-[10px] text-emerald-800 font-medium">
                              {isTamil ? p.position_title_ta : p.position_title_en}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-700" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 italic">
                    {isTamil ? "கூடுதல் விபரங்கள் சேர்க்கப்பட்டு வருகின்றன..." : "Representatives data being updated..."}
                  </p>
                )}
              </div>

            </>
          )}
        </div>

      </div>

    </div>
  );
};
