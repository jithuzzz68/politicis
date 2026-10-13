'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ExternalLink, Scale, Landmark, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export const Footer: React.FC = () => {
  const { t, isTamil } = useLanguage();

  return (
    <footer className="bg-[#052118] text-white pt-12 pb-24 lg:pb-12 border-t border-emerald-950 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Neutrality Notice */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center font-bold">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-amber-300 font-serif">அரசியல் அறிவு</h3>
                <p className="text-xs text-emerald-300">Arasiyal Arivu</p>
              </div>
            </div>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              {t.common.neutralityNotice}
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-300/90 bg-emerald-950 p-2.5 rounded-lg border border-emerald-800/60">
              <Scale className="w-4 h-4 shrink-0 text-amber-400" />
              <span>{isTamil ? "100% வெளிப்படையான பொது விழிப்புணர்வு தளம்" : "Strictly non-partisan civic platform"}</span>
            </div>
          </div>

          {/* Key Links */}
          <div>
            <h4 className="text-sm font-semibold text-amber-300 tracking-wider uppercase mb-4">
              {isTamil ? "விரைவு இணைப்புகள்" : "Quick Navigation"}
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200/90">
              <li>
                <Link href="/mlas" className="hover:text-amber-300 transition-colors">
                  {t.nav.mlas}
                </Link>
              </li>
              <li>
                <Link href="/mps" className="hover:text-amber-300 transition-colors">
                  {t.nav.mps}
                </Link>
              </li>
              <li>
                <Link href="/ministers" className="hover:text-amber-300 transition-colors">
                  {t.nav.ministers}
                </Link>
              </li>
              <li>
                <Link href="/salary" className="hover:text-amber-300 transition-colors">
                  {t.nav.salary}
                </Link>
              </li>
              <li>
                <Link href="/powers" className="hover:text-amber-300 transition-colors">
                  {t.nav.powers}
                </Link>
              </li>
              <li>
                <Link href="/districts" className="hover:text-amber-300 transition-colors">
                  {t.nav.districts}
                </Link>
              </li>
              <li>
                <Link href="/records" className="hover:text-amber-300 transition-colors">
                  {t.nav.records}
                </Link>
              </li>
            </ul>
          </div>

          {/* Authoritative Sources */}
          <div>
            <h4 className="text-sm font-semibold text-amber-300 tracking-wider uppercase mb-4">
              {isTamil ? "அதிகாரப்பூர்வ ஆதாரங்கள்" : "Authoritative Sources"}
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-200/90">
              <li>
                <a
                  href="https://tnla.neva.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-amber-300 transition-colors"
                >
                  <span>TN Legislative Assembly (NEVA)</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://sansad.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-amber-300 transition-colors"
                >
                  <span>Digital Sansad (Parliament)</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.eci.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-amber-300 transition-colors"
                >
                  <span>Election Commission of India (ECI)</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://mpa.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-amber-300 transition-colors"
                >
                  <span>Ministry of Parliamentary Affairs</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tn.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-amber-300 transition-colors"
                >
                  <span>Government of Tamil Nadu Portal</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Citizen Participation & Transparency */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-amber-300 tracking-wider uppercase">
              {isTamil ? "பொதுமக்கள் பங்களிப்பு" : "Civic Integrity"}
            </h4>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              {isTamil
                ? "ஏதேனும் தகவல்களில் முரண்பாடு அல்லது பழைய விபரம் இருந்தால், குடிமக்கள் நேரடியாக திருத்தப் படிவத்தை சமர்ப்பிக்கலாம்."
                : "Spot an outdated figure or missing record? Citizens can submit verified correction requests anytime."}
            </p>
            <Link
              href="/about#corrections"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-xs font-semibold text-amber-300 transition-colors border border-emerald-600/40"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.common.reportCorrection}</span>
            </Link>
          </div>

        </div>

        {/* Legal Disclaimer & Bottom line */}
        <div className="pt-8 border-t border-emerald-900/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
          <p className="text-center md:text-left">
            {t.common.disclaimer}
          </p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Dedicated to civic transparency in Tamil Nadu</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
