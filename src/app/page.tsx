'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search,
  Vote,
  Building2,
  Crown,
  Coins,
  Scale,
  History,
  MapPin,
  FileText,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  BookOpen,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';
import { PoliticianCard } from '@/components/PoliticianCard';
import { SalaryChart } from '@/components/SalaryChart';
import { DistrictMapExplorer } from '@/components/DistrictMapExplorer';
import { VerificationBadge } from '@/components/VerificationBadge';

export default function HomePage() {
  const { t, isTamil } = useLanguage();
  const { politicians, publicRecords, districts } = useStore();
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/politicians?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const featuredPoliticians = politicians.slice(0, 4);
  const recentRecords = publicRecords.slice(0, 4);

  const quickNavCards = [
    {
      title: t.nav.mlas,
      desc: isTamil ? "234 சட்டமன்ற உறுப்பினர்கள், தொகுதிகள் & கட்சி விவரங்கள்" : "234 Assembly Representatives, Constituencies & Parties",
      icon: Vote,
      href: "/mlas",
      count: "234",
      color: "from-emerald-700 to-emerald-900",
    },
    {
      title: t.nav.mps,
      desc: isTamil ? "39 மக்களவை + 18 மாநிலங்களவை உறுப்பினர்கள்" : "39 Lok Sabha + 18 Rajya Sabha MPs from Tamil Nadu",
      icon: Building2,
      href: "/mps",
      count: "57",
      color: "from-teal-700 to-teal-900",
    },
    {
      title: t.nav.ministers,
      desc: isTamil ? "மாநில முதலமைச்சர் மற்றும் அமைச்சரவை இலாகாக்கள்" : "Chief Minister & Cabinet Ministerial Portfolios",
      icon: Crown,
      href: "/ministers",
      count: "35",
      color: "from-amber-700 to-amber-900",
    },
    {
      title: t.nav.salary,
      desc: isTamil ? "அதிகாரப்பூர்வ மாத ஊதியம், படிகள் & தொகுதி நிதி (MLACDS)" : "Statutory Monthly Emoluments & MLACDS / MPLADS Funds",
      icon: Coins,
      href: "/salary",
      count: "Act 2018",
      color: "from-emerald-800 to-emerald-950",
    },
    {
      title: t.nav.powers,
      desc: isTamil ? "அரசியலமைப்புச் சட்டப் பொறுப்புகள் & அதிகார வரம்புகள்" : "Constitutional Roles, State vs Union List & Legal Limits",
      icon: Scale,
      href: "/powers",
      count: "Sch. 7",
      color: "from-slate-700 to-slate-900",
    },
    {
      title: t.nav.history,
      desc: isTamil ? "1952 முதல் தமிழக முதலமைச்சர்கள் & வரலாற்று மாற்றங்கள்" : "Timeline of CM tenures, landmark legislation from 1952",
      icon: History,
      href: "/history",
      count: "1952-2026",
      color: "from-stone-700 to-stone-900",
    },
  ];

  return (
    <div className="space-y-12">
      
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#062c1f] via-[#0b4330] to-[#125e45] text-white p-6 sm:p-10 lg:p-14 shadow-xl border border-emerald-800/40">
        
        {/* Subtle patterned backdrop glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          
          {/* Tag & Verified Pill */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400 text-emerald-950 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isTamil ? "100% அதிகாரப்பூர்வ ஆவணங்கள்" : "100% Official Records"}</span>
            </span>
            <span className="text-xs text-emerald-200/90 font-medium">
              {t.tagline}
            </span>
          </div>

          {/* Titles */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-white leading-tight">
              {t.home.heroTitle}
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-sans max-w-2xl">
              {t.home.heroSubtitle}
            </p>
          </div>

          {/* Hero Search Bar */}
          <form onSubmit={handleSearch} className="relative max-w-xl">
            <div className="flex items-center bg-white rounded-2xl p-1.5 shadow-lg border border-emerald-900/10">
              <div className="pl-3 pr-2 text-gray-400">
                <Search className="w-5 h-5 text-emerald-700" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.home.searchPrompt}
                className="w-full py-2.5 px-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-hidden"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#0d4a36] hover:bg-[#073324] text-amber-300 font-semibold text-xs sm:text-sm transition-all shadow-xs shrink-0"
              >
                {isTamil ? "தேடுக" : "Search"}
              </button>
            </div>
          </form>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-emerald-800/60">
            <div className="bg-emerald-950/50 rounded-xl p-3 border border-emerald-800/40">
              <span className="block text-xl font-bold text-amber-300 font-serif">234</span>
              <span className="text-[11px] text-emerald-200/80">{isTamil ? "சட்டமன்ற தொகுதிகள்" : "Assembly Seats"}</span>
            </div>
            <div className="bg-emerald-950/50 rounded-xl p-3 border border-emerald-800/40">
              <span className="block text-xl font-bold text-amber-300 font-serif">39 + 18</span>
              <span className="text-[11px] text-emerald-200/80">{isTamil ? "மக்களவை + மாநிலங்களவை" : "MPs (Lok/Rajya Sabha)"}</span>
            </div>
            <div className="bg-emerald-950/50 rounded-xl p-3 border border-emerald-800/40">
              <span className="block text-xl font-bold text-amber-300 font-serif">38</span>
              <span className="text-[11px] text-emerald-200/80">{isTamil ? "மாவட்டங்கள்" : "Districts of TN"}</span>
            </div>
            <div className="bg-emerald-950/50 rounded-xl p-3 border border-emerald-800/40">
              <span className="block text-xl font-bold text-amber-300 font-serif">100%</span>
              <span className="text-[11px] text-emerald-200/80">{isTamil ? "அரசிதழ் சரிபார்ப்பு" : "Verified Citations"}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#073324] font-serif flex items-center gap-2">
            <span>{isTamil ? "அரசாங்க தகவல்கள் விரைவு அணுகல்" : "Explore Governance Modules"}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickNavCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group relative bg-white p-5 rounded-2xl border border-gray-200/90 hover:border-emerald-700/40 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#073324] to-[#16654b] text-amber-300 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {card.count}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-900 transition-colors mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-semibold text-emerald-800 group-hover:text-emerald-950">
                  <span>{t.common.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Salary & Emoluments Comparison Chart Section */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-[#073324] font-serif">
              {t.home.salaryComparisonCardTitle}
            </h2>
            <p className="text-xs text-gray-500">
              {t.home.salaryComparisonCardDesc}
            </p>
          </div>
          <Link
            href="/salary"
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 self-start"
          >
            <span>{isTamil ? "முழு சம்பள ஒப்பீட்டு பக்கம்" : "View Full Comparison"}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <SalaryChart />
      </section>

      {/* Featured Politician Profiles */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#073324] font-serif">
              {t.home.featuredReps}
            </h2>
            <p className="text-xs text-gray-500">
              {isTamil
                ? "சமீபத்தில் சரிபார்க்கப்பட்ட மக்கள் பிரதிநிதிகள் மற்றும் அமைச்சரவை உறுப்பினர்கள்"
                : "Recently verified representatives and key state leaders"}
            </p>
          </div>
          <Link
            href="/politicians"
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
          >
            <span>{isTamil ? "அனைத்து 234+ உறுப்பினர்கள்" : "View All Representatives"}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredPoliticians.map((pol) => (
            <PoliticianCard key={pol.id} politician={pol} />
          ))}
        </div>
      </section>

      {/* District & Constituency Explorer Teaser */}
      <section className="space-y-4">
        <DistrictMapExplorer />
      </section>

      {/* Recently Published Public Records */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#073324] font-serif flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-800" />
              <span>{t.home.recentRecords}</span>
            </h2>
            <p className="text-xs text-gray-500">
              {isTamil
                ? "சட்டப்பேரவை, தேர்தல் ஆணையம் மற்றும் நிதித்துறையின் அதிகாரப்பூர்வ அரசிதழ்கள்"
                : "Official gazettes and legislative orders verified against official archives"}
            </p>
          </div>
          <Link
            href="/records"
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
          >
            <span>{isTamil ? "அனைத்து ஆவணங்கள்" : "View All Records"}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentRecords.map((rec) => (
            <div
              key={rec.id}
              className="p-4 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:border-emerald-700/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {rec.category}
                  </span>
                  <VerificationBadge status={rec.verification_status} />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  {isTamil ? rec.title_ta : rec.title_en}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {isTamil ? rec.summary_ta : rec.summary_en}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>{rec.record_date} • {rec.document_ref}</span>
                <a
                  href={rec.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-semibold"
                >
                  <span>{t.common.officialSource}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
