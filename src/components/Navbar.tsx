'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Bookmark, Shield, Menu, X, Landmark, Globe, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';

interface NavbarProps {
  onToggleSidebar?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const { language, setLanguage, t, isTamil } = useLanguage();
  const { savedPoliticianIds, isDemoMode, isAdminAuthenticated } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/politicians?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-emerald-900/10 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Left: Mobile hamburger & Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-emerald-900 hover:bg-emerald-50 focus:outline-hidden"
              aria-label="Toggle navigation"
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#073324] to-[#16654b] text-amber-300 flex items-center justify-center shadow-md shadow-emerald-950/10 group-hover:scale-105 transition-transform">
                <Landmark className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#073324] font-serif flex items-center gap-2">
                  <span>அரசியல் அறிவு</span>
                  <span className="text-xs font-sans font-medium text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full hidden sm:inline-block">
                    Arasiyal Arivu
                  </span>
                </span>
                <span className="text-[11px] font-medium text-gray-500 tracking-wide">
                  {isTamil ? "உங்கள் அரசாங்கத்தை அறிந்துகொள்ளுங்கள்" : "Know Your Government"}
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Quick Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.common.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50/80 hover:bg-gray-100/80 focus:bg-white text-gray-900 border border-gray-200 focus:border-emerald-600 rounded-full focus:outline-hidden focus:ring-2 focus:ring-emerald-600/20 transition-all shadow-2xs"
              />
              <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-gray-400" />
            </form>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Mode badge */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isDemoMode ? "Verified Official Dataset" : "Live Supabase Sync"}</span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-gray-100 p-1 rounded-full border border-gray-200">
              <button
                onClick={() => setLanguage('ta')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                  language === 'ta'
                    ? 'bg-[#0d4a36] text-amber-300 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                title="தமிழ் (Tamil)"
              >
                தமிழ்
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-[#0d4a36] text-amber-300 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Saved Bookmarks */}
            <Link
              href="/saved"
              className="relative p-2 rounded-full text-gray-600 hover:text-emerald-800 hover:bg-emerald-50 transition-colors"
              title={t.nav.saved}
            >
              <Bookmark className="w-5 h-5" />
              {savedPoliticianIds.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-amber-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {savedPoliticianIds.length}
                </span>
              )}
            </Link>

            {/* Admin Login Button */}
            <Link
              href="/admin"
              className={`p-2 rounded-full transition-colors flex items-center gap-1.5 text-xs font-medium px-3 ${
                isAdminAuthenticated
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'text-gray-600 hover:text-emerald-900 hover:bg-emerald-50'
              }`}
              title={t.nav.admin}
            >
              <Shield className="w-4 h-4 text-emerald-700" />
              <span className="hidden sm:inline">
                {isAdminAuthenticated ? 'Admin Panel' : t.nav.admin}
              </span>
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};
