'use client';

import React, { useState } from 'react';
import { Info, ExternalLink, ShieldCheck, Scale, BookOpen, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { CorrectionModal } from '@/components/CorrectionModal';

const SOURCES = [
  { name: "Tamil Nadu Legislative Assembly (NEVA Portal)", url: "https://tnla.neva.gov.in/", desc_en: "Official proceedings, Assembly Rules, MLA salary notifications", desc_ta: "சட்டப்பேரவை நடவடிக்கைகள், MLA சம்பள அரசிதழ்" },
  { name: "Election Commission of India", url: "https://www.eci.gov.in/", desc_en: "Constituency-wise election results 1952-2024, Statistical reports", desc_ta: "தொகுதிவாரி தேர்தல் முடிவுகள் 1952-2024, புள்ளியியல் அறிக்கைகள்" },
  { name: "Digital Sansad / Sansad TV", url: "https://sansad.in/", desc_en: "Parliamentary questions, MP profiles, Parliamentary proceedings", desc_ta: "நாடாளுமன்ற கேள்விகள், MP சுயவிவரங்கள், நாடாளுமன்ற நடவடிக்கைகள்" },
  { name: "Ministry of Parliamentary Affairs", url: "https://mpa.gov.in/", desc_en: "MP salary, MPLADS guidelines, Parliamentary rules", desc_ta: "MP சம்பளம், MPLADS வழிகாட்டுதல்கள், நாடாளுமன்ற விதிகள்" },
  { name: "Tamil Nadu Government Portal", url: "https://www.tn.gov.in/", desc_en: "Government Orders (GOs), State policies, Cabinet decisions", desc_ta: "அரசிதழ்கள் (GO), மாநிலக் கொள்கைகள், அமைச்சரவை முடிவுகள்" },
];

export default function AboutPage() {
  const { isTamil } = useLanguage();
  const [correctionOpen, setCorrectionOpen] = useState(false);

  return (
    <div className="space-y-8" id="about">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#073324] to-[#16654b] text-white p-6 md:p-8 rounded-3xl shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold font-serif text-white flex items-center gap-3">
          <Info className="w-7 h-7 text-amber-400" />
          <span>{isTamil ? "அரசியல் அறிவு — விளக்கம் & ஆதாரங்கள்" : "About Arasiyal Arivu & Authoritative Sources"}</span>
        </h1>
        <p className="text-xs md:text-sm text-emerald-100/90 mt-1 max-w-2xl">
          {isTamil
            ? "அரசியல் அறிவு என்பது தமிழ்நாட்டு குடிமக்களுக்காக உருவாக்கப்பட்ட 100% அரசியல் நடுநிலை வெளிப்படைத்தன்மை தளம்."
            : "Arasiyal Arivu is a strictly non-partisan civic transparency initiative built for Tamil Nadu citizens."}
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-4">
        <h2 className="text-xl font-bold text-[#073324] font-serif flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-800" />
          <span>{isTamil ? "எங்கள் நோக்கம்" : "Our Mission"}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-700">
          <p className="leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
            {isTamil
              ? "ஒவ்வொரு குடிமகனும் தங்கள் தேர்ந்தெடுக்கப்பட்ட பிரதிநிதியின் பெயர், தொகுதி, அதிகாரப்பூர்வ சம்பளம், அரசமைப்புச் சட்டப் பொறுப்புகள் மற்றும் ஆவணப்படுத்தப்பட்ட பொதுப் பணிகளை அறியும் உரிமை கொண்டுள்ளார். இத்தளம் அந்த தகவல்களை எளிமையாகவும் வெளிப்படையாகவும் வழங்குகிறது."
              : "Every citizen has the right to know their elected representative, their official remuneration, constitutional duties, and documented public work. Arasiyal Arivu makes this information easily accessible."}
          </p>
          <p className="leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
            {isTamil
              ? "இங்குள்ள அனைத்து தகவல்களும் இந்திய தேர்தல் ஆணையம், சட்டமன்றப் பேரவை செயலகம், நாடாளுமன்ற செயலகம் மற்றும் அரசு கெஜட்டிலிருந்து மட்டுமே பெறப்படுகின்றன. எந்தவொரு அரசியல் கட்சியின் நலனுக்காகவும் இத்தளம் பயன்படுத்தப்படுவதில்லை."
              : "All information is sourced exclusively from the ECI, Legislative Assembly Secretariat, Sansad, and official government gazettes. No political party benefits from or influences this platform."}
          </p>
        </div>
      </div>

      {/* Principles */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-4">
        <h2 className="text-xl font-bold text-[#073324] font-serif flex items-center gap-2">
          <Scale className="w-5 h-5 text-emerald-800" />
          <span>{isTamil ? "நடுநிலை கொள்கைகள்" : "Political Neutrality Principles"}</span>
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
          {[
            { en: "Equal treatment of all parties — same verification standards applied to every representative", ta: "அனைத்து கட்சிகளுக்கும் சம நிலை — ஒவ்வொரு பிரதிநிதிக்கும் ஒரே சரிபார்ப்பு தரநிலை" },
            { en: "No popularity, performance, or corruption scores are generated or implied", ta: "பிரபலம், செயல்திறன் அல்லது ஊழல் மதிப்பெண்கள் எந்தவொரு வகையிலும் வழங்கப்படுவதில்லை" },
            { en: "Allegations are clearly distinguished from verified facts and official convictions", ta: "குற்றச்சாட்டுகள் உண்மைகளிலிருந்து தெளிவாக பிரித்து காட்டப்படுகின்றன" },
            { en: "Citizens can report inaccuracies via the Correction Request system", ta: "குடிமக்கள் திருத்தப் படிவம் மூலம் தவறான தகவல்களை அறிக்கைசெய்யலாம்" },
            { en: "Data limitations are acknowledged openly — absent records ≠ no work done", ta: "தகவல் இல்லை என்பது பணி செய்யவில்லை என்று அர்த்தமல்ல — வரம்புகள் வெளிப்படையாக குறிப்பிடப்படும்" },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{isTamil ? item.ta : item.en}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Authoritative Sources */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-4">
        <h2 className="text-xl font-bold text-[#073324] font-serif">
          {isTamil ? "அதிகாரப்பூர்வ ஆதாரங்கள்" : "Verified Authoritative Sources"}
        </h2>
        <div className="space-y-3">
          {SOURCES.map((src) => (
            <div key={src.url} className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{src.name}</h3>
                  <p className="text-xs text-gray-600 mt-0.5">{isTamil ? src.desc_ta : src.desc_en}</p>
                </div>
              </div>
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-emerald-800 hover:text-emerald-950 font-semibold shrink-0"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Correction Request Section */}
      <div id="corrections" className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-300 space-y-4">
        <h2 className="text-xl font-bold text-amber-950 font-serif flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-700" />
          <span>{isTamil ? "தவறான தகவல் சரிசெய்யப் படிவம்" : "Submit a Correction Request"}</span>
        </h2>
        <p className="text-xs text-amber-900 leading-relaxed">
          {isTamil
            ? "எந்தவொரு தகவலிலும் முரண்பாடு அல்லது பழைய விவரம் கண்டால், அதிகாரப்பூர்வ ஆதாரத்துடன் அறிக்கையிடுங்கள். நமது சரிபார்ப்புக் குழு ஆய்வு செய்து தேவையானால் திருத்தம் செய்யும்."
            : "If you spot outdated, missing, or incorrect information, submit a correction with an official citation. Our verification desk will review and update if verified."}
        </p>
        <button
          onClick={() => setCorrectionOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0d4a36] text-amber-300 rounded-xl text-sm font-semibold hover:bg-[#073324] transition-colors"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>{isTamil ? "திருத்தப் படிவத்தை திறக்கவும்" : "Open Correction Form"}</span>
        </button>
      </div>

      <CorrectionModal isOpen={correctionOpen} onClose={() => setCorrectionOpen(false)} />
    </div>
  );
}
