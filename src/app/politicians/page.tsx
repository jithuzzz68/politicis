'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, RotateCcw, Users } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';
import { PoliticianCard } from '@/components/PoliticianCard';

function PoliticiansContent() {
  const { t, isTamil } = useLanguage();
  const { politicians, parties, districts } = useStore();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get('q') || '';
  const initialRole = searchParams.get('role') || 'all';

  const [search, setSearch] = useState(initialQuery);
  const [selectedRole, setSelectedRole] = useState(initialRole);
  const [selectedParty, setSelectedParty] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredPoliticians = useMemo(() => {
    return politicians.filter((p) => {
      // Search text
      if (search.trim()) {
        const q = search.toLowerCase().trim();
        const matchesName =
          p.name_en.toLowerCase().includes(q) ||
          p.name_ta.includes(q) ||
          (p.constituency_name_en && p.constituency_name_en.toLowerCase().includes(q)) ||
          (p.constituency_name_ta && p.constituency_name_ta.includes(q)) ||
          p.party_name_en.toLowerCase().includes(q) ||
          p.party_abbr.toLowerCase().includes(q);
        if (!matchesName) return false;
      }

      // Role filter
      if (selectedRole !== 'all') {
        if (selectedRole === 'mla' && p.type !== 'MLA' && p.type !== 'CHIEF_MINISTER' && p.type !== 'MINISTER') return false;
        if (selectedRole === 'mp' && p.type !== 'MP_LOK_SABHA' && p.type !== 'MP_RAJYA_SABHA') return false;
        if (selectedRole === 'cm' && p.type !== 'CHIEF_MINISTER') return false;
        if (selectedRole === 'minister' && p.type !== 'MINISTER') return false;
        if (selectedRole === 'historical' && p.type !== 'HISTORICAL') return false;
      }

      // Party filter
      if (selectedParty !== 'all' && p.party_id !== selectedParty) {
        return false;
      }

      // District filter
      if (selectedDistrict !== 'all' && p.district_id !== selectedDistrict) {
        return false;
      }

      // Status filter
      if (selectedStatus === 'current' && !p.is_current) return false;
      if (selectedStatus === 'former' && p.is_current) return false;

      return true;
    });
  }, [politicians, search, selectedRole, selectedParty, selectedDistrict, selectedStatus]);

  const handleResetFilters = () => {
    setSearch('');
    setSelectedRole('all');
    setSelectedParty('all');
    setSelectedDistrict('all');
    setSelectedStatus('all');
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#073324] flex items-center gap-2.5">
            <Users className="w-6 h-6 text-emerald-800" />
            <span>{isTamil ? "மக்கள் பிரதிநிதிகள் தகவல் களஞ்சியம்" : "Tamil Nadu Representatives Directory"}</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            {isTamil
              ? "சட்டமன்ற உறுப்பினர்கள், மக்களவை/மாநிலங்களவை உறுப்பினர்கள் மற்றும் முன்னாள் முதலமைச்சர்கள்"
              : "Searchable directory of MLAs, MPs, Cabinet Ministers, and historical leaders"}
          </p>
        </div>

        <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 self-start md:self-auto">
          {t.common.showingResults}: <span className="font-bold">{filteredPoliticians.length}</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs space-y-4">
        
        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.common.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-700 focus:outline-hidden"
          />
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
        </div>

        {/* Multi-Filter Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          
          {/* Role */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-600 mb-1">
              {t.common.filterByRole}
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-hidden"
            >
              <option value="all">{t.common.allRoles}</option>
              <option value="mla">{isTamil ? "சட்டமன்ற உறுப்பினர் (MLA)" : "MLA (Assembly)"}</option>
              <option value="mp">{isTamil ? "நாடாளுமன்ற உறுப்பினர் (MP)" : "MP (Parliament)"}</option>
              <option value="cm">{isTamil ? "முதலமைச்சர் (CM)" : "Chief Minister"}</option>
              <option value="minister">{isTamil ? "அமைச்சர் (Minister)" : "State Minister"}</option>
              <option value="historical">{isTamil ? "வரலாற்று தலைவர்கள்" : "Historical Leaders"}</option>
            </select>
          </div>

          {/* Party */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-600 mb-1">
              {t.common.filterByParty}
            </label>
            <select
              value={selectedParty}
              onChange={(e) => setSelectedParty(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-hidden"
            >
              <option value="all">{t.common.allParties}</option>
              {parties.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.abbreviation} - {isTamil ? p.name_ta : p.name_en}
                </option>
              ))}
            </select>
          </div>

          {/* District */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-600 mb-1">
              {t.common.filterByDistrict}
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-hidden"
            >
              <option value="all">{t.common.allDistricts}</option>
              {districts.map((d) => (
                <option key={d.id} value={d.id}>
                  {isTamil ? d.name_ta : d.name_en}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-600 mb-1">
              {t.common.filterByStatus}
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-hidden"
            >
              <option value="all">{t.common.allStatus}</option>
              <option value="current">{t.common.current}</option>
              <option value="former">{t.common.former}</option>
            </select>
          </div>

        </div>

        {/* Clear Filters Button */}
        {(search || selectedRole !== 'all' || selectedParty !== 'all' || selectedDistrict !== 'all' || selectedStatus !== 'all') && (
          <div className="pt-2 flex justify-end">
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-emerald-800 font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.common.clearFilters}</span>
            </button>
          </div>
        )}

      </div>

      {/* Grid of Results */}
      {filteredPoliticians.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPoliticians.map((pol) => (
            <PoliticianCard key={pol.id} politician={pol} />
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-3">
          <div className="w-12 h-12 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-gray-800">{t.common.noResultsFound}</h3>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            {isTamil
              ? "வடிகட்டிகளை மாற்றி அல்லது தேடல் சொல்லை சுருக்கி மீண்டும் முயற்சிக்கவும்."
              : "Try adjusting your search terms or clearing one of the filters above."}
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-2 px-4 py-2 text-xs font-semibold bg-[#0d4a36] text-amber-300 rounded-xl hover:bg-[#073324]"
          >
            {t.common.clearFilters}
          </button>
        </div>
      )}

    </div>
  );
}

export default function PoliticiansPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-gray-500">Loading directory...</div>}>
      <PoliticiansContent />
    </Suspense>
  );
}
