'use client';

import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Coins, AlertTriangle, ShieldCheck, Info } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export const SalaryChart: React.FC = () => {
  const { isTamil, t } = useLanguage();
  const [viewMode, setViewMode] = useState<'monthly' | 'devfund'>('monthly');

  const monthlyData = [
    {
      role: isTamil ? "சட்டமன்ற உறுப்பினர் (MLA)" : "TN MLA",
      basic: 30000,
      constituency: 25000,
      office: 25000,
      total: 105000,
    },
    {
      role: isTamil ? "அமைச்சர் (Minister)" : "TN Minister",
      basic: 30000,
      constituency: 25000,
      office: 35000,
      total: 115000,
    },
    {
      role: isTamil ? "முதலமைச்சர் (CM)" : "Chief Minister",
      basic: 30000,
      constituency: 25000,
      office: 45000,
      total: 125000,
    },
    {
      role: isTamil ? "நாடாளுமன்ற உறுப்பினர் (MP)" : "Parliament MP",
      basic: 100000,
      constituency: 70000,
      office: 60000,
      total: 230000,
    },
  ];

  const devFundData = [
    {
      role: isTamil ? "MLA தொகுதி நிதி (MLACDS)" : "MLA Scheme (MLACDS)",
      fundInCrores: 3.0,
      fundInLakhs: 300,
    },
    {
      role: isTamil ? "MP தொகுதி நிதி (MPLADS)" : "MP Scheme (MPLADS)",
      fundInCrores: 5.0,
      fundInLakhs: 500,
    },
  ];

  const formatRupees = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm p-5 md:p-6">
      
      {/* Header and Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
        <div>
          <h3 className="text-lg font-bold text-[#073324] flex items-center gap-2">
            <Coins className="w-5 h-5 text-amber-600" />
            <span>{isTamil ? "சட்டப்பூர்வ ஊதிய ஒப்பீட்டு வரைபடம்" : "Official Remuneration Breakdown"}</span>
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            {isTamil
              ? "தமிழ்நாடு சட்டமன்றம் & இந்திய நாடாளுமன்ற அதிகாரப்பூர்வ சட்டம் 2018 விதிகளின்படி"
              : "Governed strictly by TN Act No. 12 of 2018 & Parliament Act 1954"}
          </p>
        </div>

        {/* View toggle */}
        <div className="flex items-center bg-gray-100 p-1 rounded-xl text-xs font-semibold self-start sm:self-auto">
          <button
            onClick={() => setViewMode('monthly')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'monthly'
                ? 'bg-[#0d4a36] text-amber-300 shadow-2xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {isTamil ? "மாதாந்திர ஊதியம் (₹)" : "Monthly Emoluments (₹)"}
          </button>
          <button
            onClick={() => setViewMode('devfund')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'devfund'
                ? 'bg-[#0d4a36] text-amber-300 shadow-2xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {isTamil ? "தொகுதி மேம்பாட்டு நிதி (₹ கோடி)" : "Constituency Funds (₹ Cr)"}
          </button>
        </div>
      </div>

      {/* Recharts chart */}
      <div className="h-72 w-full">
        {viewMode === 'monthly' ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="role" stroke="#6b7280" tick={{ fontSize: 12 }} />
              <YAxis
                stroke="#6b7280"
                tickFormatter={(val) => `₹${val / 1000}k`}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                formatter={(value: any) => [formatRupees(Number(value)), '']}
                contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
              <Bar
                dataKey="basic"
                name={isTamil ? "அடிப்படை சம்பளம்" : "Basic Pay"}
                fill="#0d4a36"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="constituency"
                name={isTamil ? "தொகுதிப் படி" : "Constituency Allowance"}
                fill="#d97706"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="office"
                name={isTamil ? "அலுவலகம்/தொலைபேசி படி" : "Office & Secretarial"}
                fill="#0284c7"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={devFundData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="role" stroke="#6b7280" tick={{ fontSize: 12 }} />
              <YAxis
                stroke="#6b7280"
                tickFormatter={(val) => `₹${val} Cr`}
                tick={{ fontSize: 12 }}
                domain={[0, 6]}
              />
              <Tooltip
                formatter={(value: any) => [`₹${value} Crore (₹${Number(value) * 100} Lakhs)`, 'Annual Allocation']}
                contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb' }}
              />
              <Bar
                dataKey="fundInCrores"
                name={isTamil ? "ஆண்டு வளர்ச்சி நிதி (₹ கோடி)" : "Annual Fund (₹ Crore)"}
                fill="#059669"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Critical Educational Distinction Banner */}
      <div className="mt-4 p-3.5 rounded-xl bg-amber-50/90 border border-amber-200/90 flex items-start gap-3 text-xs text-amber-950">
        <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-amber-900">
            {isTamil ? "முக்கிய விழிப்புணர்வு வேறுபாடு:" : "Critical Public Distinction:"}
          </p>
          <p className="leading-relaxed text-amber-900/90">
            {t.salary.devFundExplainer}
          </p>
        </div>
      </div>

    </div>
  );
};
