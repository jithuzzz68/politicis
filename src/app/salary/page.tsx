'use client';

import React, { useState } from 'react';
import { Coins, AlertTriangle, ExternalLink, Info, ShieldCheck, Scale } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { useStore } from '@/lib/storeContext';
import { SalaryChart } from '@/components/SalaryChart';
import { VerificationBadge } from '@/components/VerificationBadge';

export default function SalaryPage() {
  const { t, isTamil } = useLanguage();
  const { remunerationRules } = useStore();
  const [compareMode, setCompareMode] = useState(false);

  const rules = Object.values(remunerationRules);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  const formatCrore = (val: number) => {
    const crores = val / 10000000;
    return `₹${crores.toFixed(2)} ${isTamil ? 'கோடி' : 'Crore'}`;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#073324] to-[#16654b] text-white p-6 md:p-8 rounded-3xl shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-400 text-emerald-950">
            {isTamil ? "அதிகாரப்பூர்வ ஆவணம் சரிபார்க்கப்பட்டது" : "Verified Official Records"}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-serif text-white">
          {t.salary.title}
        </h1>
        <p className="text-xs md:text-sm text-emerald-100/90 mt-1 max-w-2xl leading-relaxed">
          {t.salary.subtitle}
        </p>
      </div>

      {/* Critical Distinction Banner */}
      <div className="p-5 bg-amber-50 border-2 border-amber-300 rounded-2xl flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1.5 text-xs text-amber-900">
          <p className="font-bold text-sm">{isTamil ? "மிக முக்கியமான வேறுபாடு — அனைத்து குடிமக்களும் அறிய வேண்டியது:" : "Critical Public Distinction You Must Understand:"}</p>
          <p className="leading-relaxed">{t.salary.devFundExplainer}</p>
          <p className="font-semibold">{t.salary.separateNotice}</p>
        </div>
      </div>

      {/* Salary Comparison Chart */}
      <SalaryChart />

      {/* Detailed Comparison Table */}
      <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50">
          <h2 className="text-xl font-bold text-[#073324] font-serif flex items-center gap-2">
            <Scale className="w-5 h-5 text-emerald-800" />
            <span>{isTamil ? "ஒப்பீட்டு ஊதிய அட்டவணை — அனைத்து பதவிகளும்" : "Detailed Remuneration Comparison Table"}</span>
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            {isTamil
              ? "ஒவ்வொரு கூறும் அதிகாரப்பூர்வ சட்டச் சான்றுடன் காட்டப்படுகிறது."
              : "Each component shown with its authoritative legal citation and effective date."}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-5 py-3 text-gray-600 font-semibold text-[11px] uppercase tracking-wider">{isTamil ? "ஊதியக் கூறு" : "Remuneration Component"}</th>
                {rules.map((r) => (
                  <th key={r.id} className="px-4 py-3 text-center text-gray-700 font-bold text-[11px]">
                    {isTamil ? r.position_name_ta : r.position_name_en}
                    <div className="text-[10px] font-normal text-gray-500 mt-0.5">{r.level}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {/* Basic Salary */}
              <tr>
                <td className="px-5 py-3 font-semibold text-gray-900">{t.salary.statutoryBasic}</td>
                {rules.map((r) => (
                  <td key={r.id} className="px-4 py-3 text-center font-bold text-emerald-900">
                    {formatCurrency(r.basic_salary)}
                  </td>
                ))}
              </tr>

              {/* Constituency Allowance */}
              <tr className="bg-gray-50/50">
                <td className="px-5 py-3 font-semibold text-gray-900">{t.salary.constituencyAllowance}</td>
                {rules.map((r) => (
                  <td key={r.id} className="px-4 py-3 text-center font-medium text-gray-800">
                    {formatCurrency(r.constituency_allowance)}
                  </td>
                ))}
              </tr>

              {/* Secretarial Allowance */}
              <tr>
                <td className="px-5 py-3 font-semibold text-gray-900">{t.salary.telephoneOfficeAllowance}</td>
                {rules.map((r) => (
                  <td key={r.id} className="px-4 py-3 text-center font-medium text-gray-800">
                    {formatCurrency(r.telephone_secretarial_allowance)}
                  </td>
                ))}
              </tr>

              {/* Daily Allowance */}
              <tr className="bg-gray-50/50">
                <td className="px-5 py-3 font-semibold text-gray-900">{t.salary.dailySessionAllowance}</td>
                {rules.map((r) => (
                  <td key={r.id} className="px-4 py-3 text-center font-medium text-gray-800">
                    {formatCurrency(r.daily_allowance_session)}/day
                  </td>
                ))}
              </tr>

              {/* Monthly Total */}
              <tr className="bg-emerald-50 border-t-2 border-emerald-200">
                <td className="px-5 py-3 font-extrabold text-emerald-950 text-sm">{t.salary.totalMonthlyPay}</td>
                {rules.map((r) => (
                  <td key={r.id} className="px-4 py-3 text-center font-extrabold text-emerald-900 text-sm">
                    {formatCurrency(r.total_monthly_emoluments)}
                  </td>
                ))}
              </tr>

              {/* Pension */}
              <tr className="bg-gray-50/50">
                <td className="px-5 py-3 font-semibold text-gray-900">{isTamil ? "ஓய்வூதியம் (மாதம்)" : "Monthly Pension"}</td>
                {rules.map((r) => (
                  <td key={r.id} className="px-4 py-3 text-center font-medium text-gray-700">
                    {r.pension_monthly ? formatCurrency(r.pension_monthly) : 'N/A'}
                  </td>
                ))}
              </tr>

              {/* Dev Fund - clearly separated */}
              <tr className="border-t-4 border-amber-300 bg-amber-50/60">
                <td className="px-5 py-3">
                  <span className="font-bold text-amber-950">{t.salary.devFundTitle}</span>
                  <p className="text-[10px] text-amber-700 mt-0.5">
                    {isTamil ? "⚠ பொது வளர்ச்சி நிதி — தனிப்பட்ட சம்பளம் அல்ல" : "⚠ Public works fund — not personal income"}
                  </p>
                </td>
                {rules.map((r) => (
                  <td key={r.id} className="px-4 py-3 text-center font-bold text-amber-800">
                    {formatCrore(r.development_fund_annual)}{isTamil ? ' / ஆண்டு' : ' / year'}
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

        {/* Sources Row */}
        <div className="p-5 border-t border-gray-100 bg-gray-50 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rules.map((r) => (
            <div key={r.id} className="p-3 bg-white rounded-xl border border-gray-200 text-xs space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-gray-900 text-[11px]">
                  {isTamil ? r.position_name_ta : r.position_name_en}
                </span>
                <VerificationBadge status={r.verification_status} showText={false} />
              </div>
              <p className="text-gray-600">{isTamil ? r.act_or_rule_ta : r.act_or_rule_en}</p>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-gray-500">{t.common.lastVerified}: {r.last_verified_date}</span>
                <a
                  href={r.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-semibold"
                >
                  <span>{r.source_name}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
