'use client';

import React, { useState, Suspense } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Bookmark,
  ShieldCheck,
  MapPin,
  Calendar,
  Building,
  Coins,
  Scale,
  History,
  FileText,
  ExternalLink,
  Vote,
  AlertTriangle,
  HelpCircle,
  Clock,
  CheckCircle2,
  Share2,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';
import { VerificationBadge } from '@/components/VerificationBadge';
import { CorrectionModal } from '@/components/CorrectionModal';

function ProfileContent() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const { t, isTamil } = useLanguage();
  const { politicians, isPoliticianSaved, toggleSavePolitician } = useStore();

  const [activeTab, setActiveTab] = useState<'overview' | 'salary' | 'powers' | 'elections' | 'legislative' | 'sources'>('overview');
  const [isCorrectionOpen, setIsCorrectionOpen] = useState(false);

  const politician = politicians.find((p) => p.id === id || p.slug === id);

  if (!politician) {
    return (
      <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-4 my-8">
        <HelpCircle className="w-12 h-12 text-gray-400 mx-auto" />
        <h2 className="text-xl font-bold text-gray-800">
          {isTamil ? "பிரதிநிதி விவரம் கிடைக்கவில்லை" : "Politician Profile Not Found"}
        </h2>
        <p className="text-xs text-gray-500 max-w-sm mx-auto">
          {isTamil
            ? "நீங்கள் தேடும் பிரதிநிதியின் பதிவு சரிபார்க்கப்படும் நிலையில் இருக்கலாம் அல்லது முகவரி தவறானது."
            : "The representative record might be undergoing verification or the URL is incorrect."}
        </p>
        <Link
          href="/politicians"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#0d4a36] text-amber-300 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.common.backToList}</span>
        </Link>
      </div>
    );
  }

  const isSaved = isPoliticianSaved(politician.id);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const tabs = [
    { id: 'overview', label: t.common.overview, icon: Building },
    { id: 'salary', label: t.common.salaryAndAllowances, icon: Coins },
    { id: 'powers', label: t.common.powersAndResponsibilities, icon: Scale },
    { id: 'elections', label: t.common.electionHistory, icon: History },
    { id: 'legislative', label: t.common.legislativeWork, icon: FileText },
    { id: 'sources', label: t.common.sourcesAndAudit, icon: ShieldCheck },
  ];

  return (
    <div className="space-y-6">
      
      {/* Back button & Action row */}
      <div className="flex items-center justify-between">
        <Link
          href="/politicians"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-emerald-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.common.backToList}</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleSavePolitician(politician.id)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              isSaved
                ? 'bg-amber-50 text-amber-900 border-amber-300'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span>{isSaved ? t.common.saved : t.common.saveProfile}</span>
          </button>

          <button
            onClick={() => setIsCorrectionOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.common.reportCorrection}</span>
          </button>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 bg-gradient-to-r from-emerald-900 via-[#073324] to-[#042419] text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            
            {/* Photograph */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-xl shrink-0 bg-emerald-950">
              {politician.photo_url ? (
                <img
                  src={politician.photo_url}
                  alt={politician.name_en}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-bold text-3xl text-amber-300">
                  {politician.name_en.charAt(0)}
                </div>
              )}
            </div>

            {/* Profile Core Details */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-xs font-bold px-2.5 py-0.5 rounded-md text-white shadow-xs"
                  style={{ backgroundColor: politician.party_color || '#16654b' }}
                >
                  {politician.party_abbr} • {isTamil ? politician.party_name_ta : politician.party_name_en}
                </span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-white/20 text-white backdrop-blur-xs">
                  {politician.is_current ? t.common.current : t.common.former}
                </span>
                <VerificationBadge status={politician.verification_status} />
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold font-serif text-white">
                {isTamil ? politician.name_ta : politician.name_en}
              </h1>
              <p className="text-sm text-emerald-200">
                {isTamil ? politician.name_en : politician.name_ta}
              </p>

              <div className="text-sm font-semibold text-amber-300">
                {isTamil ? politician.position_title_ta : politician.position_title_en}
              </div>

              {/* Meta tags */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-emerald-100/80">
                {(politician.constituency_name_en || politician.district_name_en) && (
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>
                      {isTamil
                        ? `${politician.constituency_name_ta || ''}${politician.district_name_ta ? ` (${politician.district_name_ta})` : ''}`
                        : `${politician.constituency_name_en || ''}${politician.district_name_en ? ` (${politician.district_name_en})` : ''}`}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    {isTamil ? "பதவிக்காலம்:" : "Term:"} {politician.term_start} {politician.term_end ? `– ${politician.term_end}` : `– ${isTamil ? 'தற்போது' : 'Present'}`}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center overflow-x-auto border-b border-gray-200 px-4 sm:px-6 bg-gray-50/70">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold border-b-2 whitespace-nowrap transition-all ${
                  isActive
                    ? 'border-[#0d4a36] text-[#073324] bg-white'
                    : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#0d4a36]' : 'text-gray-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            
            {/* Biography */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3">
              <h2 className="text-base font-bold text-gray-900 font-serif">
                {isTamil ? "வாழ்க்கைக் குறிப்பு & பின்னணி" : "Biography & Profile Overview"}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {isTamil ? politician.biography_ta : politician.biography_en}
              </p>
            </div>

            {/* Portfolio if Minister */}
            {politician.portfolio_en && (
              <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3">
                <h2 className="text-base font-bold text-gray-900 font-serif">
                  {isTamil ? "அமைச்சரவை இலாகாக்கள்" : "Assigned Ministerial Portfolios"}
                </h2>
                <p className="text-sm text-emerald-900 font-medium leading-relaxed bg-emerald-50/70 p-3 rounded-xl border border-emerald-100">
                  {isTamil ? politician.portfolio_ta : politician.portfolio_en}
                </p>
              </div>
            )}

            {/* Education and Basic Facts */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-4">
              <h2 className="text-base font-bold text-gray-900 font-serif">
                {isTamil ? "அடிப்படைத் தகவல்கள்" : "Key Biographical Facts"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {politician.birth_year && (
                  <div className="p-3 rounded-xl bg-gray-50">
                    <span className="block text-gray-500 mb-0.5">{isTamil ? "பிறந்த ஆண்டு" : "Birth Year"}</span>
                    <span className="font-bold text-gray-900">{politician.birth_year}</span>
                  </div>
                )}
                {politician.education_en && (
                  <div className="p-3 rounded-xl bg-gray-50">
                    <span className="block text-gray-500 mb-0.5">{isTamil ? "கல்வித் தகுதி" : "Education"}</span>
                    <span className="font-bold text-gray-900">{isTamil ? politician.education_ta : politician.education_en}</span>
                  </div>
                )}
                <div className="p-3 rounded-xl bg-gray-50">
                  <span className="block text-gray-500 mb-0.5">{isTamil ? "அரசியல் அமைப்பு பதவி" : "Legislative Body"}</span>
                  <span className="font-bold text-gray-900">{politician.assembly_or_parliament_term}</span>
                </div>
                <div className="p-3 rounded-xl bg-gray-50">
                  <span className="block text-gray-500 mb-0.5">{isTamil ? "கடைசி சரிபார்ப்பு தேதி" : "Last Verified"}</span>
                  <span className="font-bold text-emerald-800">{politician.last_verified_at}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right sidebar quick stats */}
          <div className="space-y-6">
            
            {/* Quick Remuneration Callout */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">{isTamil ? "அதிகாரப்பூர்வ மாத ஊதியம்" : "Statutory Monthly Pay"}</span>
                <Coins className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-2xl font-bold text-emerald-900">
                {formatCurrency(politician.remuneration.total_monthly_emoluments)}
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                {isTamil
                  ? "அடிப்படை சம்பளம், தொகுதிப்படி மற்றும் அலுவலக படி உட்பட சட்டப்பூர்வ தொகை."
                  : "Includes statutory basic pay, constituency allowance, and secretarial office allowance."}
              </p>
              <button
                onClick={() => setActiveTab('salary')}
                className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline"
              >
                {isTamil ? "விரிவான சம்பள விவரம் காண்க →" : "View complete salary breakdown →"}
              </button>
            </div>

            {/* Political Party Card */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3">
              <span className="text-xs font-semibold text-gray-500">{isTamil ? "கட்சிப் பின்னணி" : "Political Affiliation"}</span>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl text-white font-bold flex items-center justify-center text-xs"
                  style={{ backgroundColor: politician.party_color }}
                >
                  {politician.party_abbr}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-900">
                    {isTamil ? politician.party_name_ta : politician.party_name_en}
                  </h3>
                  <span className="text-[11px] text-gray-500">{politician.party_abbr}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Tab 2: Salary and Allowances */}
      {activeTab === 'salary' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-6">
            
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                <h2 className="text-lg font-bold text-gray-900 font-serif flex items-center gap-2">
                  <Coins className="w-5 h-5 text-amber-600" />
                  <span>{t.salary.title}</span>
                </h2>
                <VerificationBadge status={politician.remuneration.verification_status} />
              </div>
              <p className="text-xs text-gray-500">
                {politician.remuneration.act_or_rule_en} (Effective: {politician.remuneration.effective_date})
              </p>
            </div>

            {/* Detailed Salary Table */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="px-4 py-3">{isTamil ? "கூறு / படி விவரம்" : "Remuneration Component"}</th>
                    <th className="px-4 py-3">{isTamil ? "விதி / வரம்பு" : "Statutory Rule"}</th>
                    <th className="px-4 py-3 text-right">{isTamil ? "தொகை (ரூபாய்)" : "Official Amount (INR)"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">{t.salary.statutoryBasic}</td>
                    <td className="px-4 py-3 text-gray-500">Fixed under TN Payment of Salaries Act</td>
                    <td className="px-4 py-3 font-bold text-right text-gray-900">
                      {formatCurrency(politician.remuneration.basic_salary)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">{t.salary.constituencyAllowance}</td>
                    <td className="px-4 py-3 text-gray-500">Monthly constituency touring allocation</td>
                    <td className="px-4 py-3 font-bold text-right text-gray-900">
                      {formatCurrency(politician.remuneration.constituency_allowance)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">{t.salary.telephoneOfficeAllowance}</td>
                    <td className="px-4 py-3 text-gray-500">Secretarial and communication expenses</td>
                    <td className="px-4 py-3 font-bold text-right text-gray-900">
                      {formatCurrency(politician.remuneration.telephone_secretarial_allowance)}
                    </td>
                  </tr>
                  <tr className="bg-emerald-50/50">
                    <td className="px-4 py-3 font-bold text-emerald-950 text-sm">{t.salary.totalMonthlyPay}</td>
                    <td className="px-4 py-3 text-emerald-800">Monthly direct gross emoluments</td>
                    <td className="px-4 py-3 font-extrabold text-right text-emerald-900 text-sm">
                      {formatCurrency(politician.remuneration.total_monthly_emoluments)}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">{t.salary.dailySessionAllowance}</td>
                    <td className="px-4 py-3 text-gray-500">Per day during official Assembly / Parliament sessions</td>
                    <td className="px-4 py-3 font-bold text-right text-gray-900">
                      {formatCurrency(politician.remuneration.daily_allowance_session)} / day
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Travel and Medical Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="font-bold text-gray-900 block mb-1">
                  {isTamil ? "பயணச் சலுகைகள்" : "Travel Concessions"}
                </span>
                <p className="text-gray-600 leading-relaxed">
                  {isTamil ? politician.remuneration.travel_concessions_ta : politician.remuneration.travel_concessions_en}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="font-bold text-gray-900 block mb-1">
                  {isTamil ? "மருத்துவ சலுகைகள்" : "Healthcare & Medical Coverage"}
                </span>
                <p className="text-gray-600 leading-relaxed">
                  {isTamil ? politician.remuneration.medical_benefits_ta : politician.remuneration.medical_benefits_en}
                </p>
              </div>
            </div>

            {/* Crucial Public Infrastructure Fund Distinction */}
            <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
                <span>
                  {t.salary.devFundTitle}: {formatCurrency(politician.remuneration.development_fund_annual)}
                </span>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed">
                {t.salary.devFundExplainer}
              </p>
              <div className="text-[11px] text-amber-800 font-medium">
                {isTamil ? "திட்டப் பெயர்:" : "Scheme:"} {isTamil ? politician.remuneration.development_fund_name_ta : politician.remuneration.development_fund_name_en}
              </div>
            </div>

            {/* Statutory Source link */}
            <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
              <span>{isTamil ? "ஆதாரம்:" : "Official Source:"} {politician.remuneration.source_name}</span>
              <a
                href={politician.remuneration.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-semibold"
              >
                <span>{t.common.officialSource}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Tab 3: Powers & Responsibilities */}
      {activeTab === 'powers' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-6">
            
            {/* Header description */}
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-gray-900 font-serif flex items-center gap-2">
                <Scale className="w-5 h-5 text-emerald-800" />
                <span>{t.powers.title}</span>
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isTamil
                  ? politician.powers_and_responsibilities.role_description_ta
                  : politician.powers_and_responsibilities.role_description_en}
              </p>
            </div>

            {/* Constitutional Articles */}
            {politician.powers_and_responsibilities.constitutional_articles.length > 0 && (
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <span className="text-xs font-bold text-emerald-950 block mb-2">
                  {isTamil ? "பொருந்தக்கூடிய இந்திய அரசியலமைப்பு சட்டப்பிரிவுகள்:" : "Governing Constitutional Articles:"}
                </span>
                <div className="flex flex-wrap gap-2">
                  {politician.powers_and_responsibilities.constitutional_articles.map((art, idx) => (
                    <span key={idx} className="text-xs bg-white text-emerald-900 px-2.5 py-1 rounded-lg border border-emerald-300 font-mono">
                      {art}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Statutory Powers & Responsibilities 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Statutory Powers */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>{isTamil ? "சட்டப்பூர்வ அதிகாரங்கள்" : "Statutory Powers"}</span>
                </h3>
                <ul className="space-y-2 text-xs text-gray-700">
                  {(isTamil
                    ? politician.powers_and_responsibilities.statutory_powers_ta
                    : politician.powers_and_responsibilities.statutory_powers_en
                  ).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-emerald-700 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Responsibilities */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>{isTamil ? "முக்கிய மக்கள் பொறுப்புகள்" : "Key Responsibilities"}</span>
                </h3>
                <ul className="space-y-2 text-xs text-gray-700">
                  {(isTamil
                    ? politician.powers_and_responsibilities.key_responsibilities_ta
                    : politician.powers_and_responsibilities.key_responsibilities_en
                  ).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <span className="text-emerald-700 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Legal Limitations of Authority */}
            <div className="p-4 rounded-xl bg-red-50/60 border border-red-200 space-y-2">
              <h3 className="text-xs font-bold text-red-900 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-700" />
                <span>{t.powers.limitsTitle}</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-red-800">
                {(isTamil
                  ? politician.powers_and_responsibilities.limitations_of_authority_ta
                  : politician.powers_and_responsibilities.limitations_of_authority_en
                ).map((limit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-700 font-bold">•</span>
                    <span>{limit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      )}

      {/* Tab 4: Election History */}
      {activeTab === 'elections' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-6">
            
            <h2 className="text-lg font-bold text-gray-900 font-serif flex items-center gap-2">
              <History className="w-5 h-5 text-emerald-800" />
              <span>{t.common.electionHistory}</span>
            </h2>

            {/* Elections Table */}
            {politician.election_history.length > 0 ? (
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold uppercase text-[10px]">
                    <tr>
                      <th className="px-4 py-3">{isTamil ? "தேர்தல் ஆண்டு" : "Year"}</th>
                      <th className="px-4 py-3">{isTamil ? "தொகுதி" : "Constituency"}</th>
                      <th className="px-4 py-3">{isTamil ? "கட்சி" : "Party"}</th>
                      <th className="px-4 py-3">{isTamil ? "பெற்ற வாக்குகள்" : "Votes"}</th>
                      <th className="px-4 py-3">{isTamil ? "வித்தியாசம்" : "Margin"}</th>
                      <th className="px-4 py-3">{isTamil ? "முடிவு" : "Result"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {politician.election_history.map((el) => (
                      <tr key={el.id} className="hover:bg-gray-50/50">
                        <td className="px-4 py-3 font-bold text-gray-900">{el.election_year}</td>
                        <td className="px-4 py-3">{isTamil ? el.constituency_ta : el.constituency_en}</td>
                        <td className="px-4 py-3 font-semibold text-emerald-900">{isTamil ? el.party_name_ta : el.party_name_en}</td>
                        <td className="px-4 py-3">
                          {el.votes_secured.toLocaleString()} ({el.vote_percentage}%)
                        </td>
                        <td className="px-4 py-3 font-mono text-gray-600">+{el.margin.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${
                            el.result === 'Won' ? 'bg-emerald-100 text-emerald-900' : 'bg-red-100 text-red-900'
                          }`}>
                            {el.result === 'Won' ? (isTamil ? 'வெற்றி' : 'Won') : (isTamil ? 'தோல்வி' : 'Lost')}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-xs text-gray-500 italic">
                {isTamil ? "தேர்தல் பதிவுகள் ஆவணப்படுத்தப்படுகின்றன..." : "Election records being archived..."}
              </p>
            )}

            {/* Party Timeline History */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <h3 className="text-sm font-bold text-gray-900">
                {isTamil ? "கட்சிப் பொறுப்புகள் & வரலாறு" : "Party History & Affiliations"}
              </h3>
              <div className="space-y-2">
                {politician.party_history.map((ph) => (
                  <div key={ph.id} className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-gray-900">{isTamil ? ph.party_name_ta : ph.party_name_en}</span>
                      <p className="text-gray-500 text-[11px] mt-0.5">{isTamil ? ph.role_ta : ph.role_en}</p>
                    </div>
                    <span className="font-mono text-emerald-800 font-semibold">
                      {ph.from_year} – {ph.to_year || (isTamil ? 'தற்போது' : 'Present')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Tab 5: Legislative Records & Public Works */}
      {activeTab === 'legislative' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-6">
            
            <h2 className="text-lg font-bold text-gray-900 font-serif flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-800" />
              <span>{t.common.legislativeWork}</span>
            </h2>

            {politician.legislative_records.length > 0 ? (
              <div className="space-y-4">
                {politician.legislative_records.map((rec) => (
                  <div key={rec.id} className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900">
                        {rec.category}
                      </span>
                      <span className="text-xs text-gray-500">{rec.date} • {rec.status}</span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">
                      {isTamil ? rec.title_ta : rec.title_en}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {isTamil ? rec.details_ta : rec.details_en}
                    </p>
                    <div className="pt-2 flex justify-end">
                      <a
                        href={rec.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-emerald-800 hover:text-emerald-950 font-semibold"
                      >
                        <span>{isTamil ? "சட்டப்பேரவை ஆவணம் காண்க" : "View Official Record"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-500 italic">
                {isTamil ? "சட்டமன்ற கேள்விகள் மற்றும் உரைகள் பதிவேற்றப்படுகின்றன..." : "Legislative proceedings being digitized..."}
              </p>
            )}

          </div>
        </div>
      )}

      {/* Tab 6: Sources & Verification */}
      {activeTab === 'sources' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-6">
            
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <h2 className="text-lg font-bold text-gray-900 font-serif flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-800" />
                <span>{t.common.sourcesAndAudit}</span>
              </h2>
              <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {t.common.lastVerified}: {politician.last_verified_at}
              </span>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed">
              {isTamil
                ? "அரசியல் அறிவு தளத்தில் இடம்பெறும் ஒவ்வொரு தகவலும் இந்திய தேர்தல் ஆணையம், தமிழ்நாடு சட்டப்பேரவை செயலகம் மற்றும் அரசு கெஜட் ஆகியவற்றின் மூலம் சரிபார்க்கப்படுகிறது."
                : "Every claim on Arasiyal Arivu is audited against official legislative proceedings, ECI filings, and statutory notifications."}
            </p>

            {/* Sources list */}
            <div className="space-y-3">
              {politician.sources.map((src) => (
                <div key={src.id} className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-gray-900">
                      {isTamil ? src.claim_or_field_ta : src.claim_or_field_en}
                    </span>
                    <VerificationBadge status={src.status} />
                  </div>
                  <p className="text-xs text-gray-600">
                    <span className="font-semibold">{src.source_name}</span> (Pub: {src.publication_date})
                  </p>
                  <div className="flex justify-end pt-1">
                    <a
                      href={src.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-emerald-800 hover:text-emerald-950 font-semibold"
                    >
                      <span>{src.source_url}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* Citizen Correction Modal Trigger */}
      <CorrectionModal
        isOpen={isCorrectionOpen}
        onClose={() => setIsCorrectionOpen(false)}
        politicianId={politician.id}
        politicianName={politician.name_en}
      />

    </div>
  );
}

export default function PoliticianProfilePage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-24">
          <div className="w-8 h-8 border-4 border-emerald-700 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ProfileContent />
    </Suspense>
  );
}
