'use client';

import React, { useState } from 'react';
import { Scale, CheckCircle2, AlertTriangle, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const POWERS_DATA = {
  mla: {
    title_en: "Member of Legislative Assembly (MLA)",
    title_ta: "சட்டமன்ற உறுப்பினர் (MLA)",
    governing_body_en: "Tamil Nadu Legislative Assembly",
    governing_body_ta: "தமிழ்நாடு சட்டமன்றப் பேரவை",
    description_en: "An MLA represents a specific assembly constituency in the State Legislature. They hold the mandate to legislate on State List subjects, oversee state executive actions, and act as a conduit between constituents and the state government.",
    description_ta: "ஒரு சட்டமன்ற உறுப்பினர் மாநில சட்டமன்றத்தில் ஒரு குறிப்பிட்ட தொகுதியைப் பிரதிநிதித்துவப்படுத்துகிறார். மாநிலப் பட்டியல் பாடங்களில் சட்டமியற்றவும், மாநில நிர்வாக நடவடிக்கைகளை மேற்பார்வையிடவும் மற்றும் வாக்காளர்களுக்கும் அரசுக்கும் இடையே பாலமாகவும் செயல்படுகிறார்.",
    constitutional_articles: ["Article 168-212 (State Legislature)", "Article 174 (Sessions of the State Legislature)", "Article 194 (Powers, Privileges and Immunities)", "Seventh Schedule – State List (List II)"],
    can_do_en: [
      "Introduce Private Member Bills on State List subjects",
      "Question the State Government during Question Hour, Zero Hour, and Calling Attention motions",
      "Vote on the State Budget (Appropriation Bill) and Annual Financial Statement",
      "Recommend constituency development works under MLACDS (₹3 Crore annually)",
      "Participate in Legislative Assembly committees and hearings",
      "Represent constituents' petitions to state departments"
    ],
    can_do_ta: [
      "மாநிலப் பட்டியல் பாடங்களில் தனிநபர் மசோதாக்களை அறிமுகப்படுத்துதல்",
      "கேள்வி நேரம், பூஜ்ய நேரம் மற்றும் கவன ஈர்ப்பு தீர்மானங்கள் மூலம் மாநில அரசை கேள்வி கேட்டல்",
      "மாநில வரவு செலவுத் திட்டம் (ஒதுக்கீட்டு மசோதா) மீது வாக்களித்தல்",
      "MLACDS கீழ் தொகுதி மேம்பாட்டு பணிகளை (ஆண்டுக்கு ₹3 கோடி) பரிந்துரைத்தல்",
      "சட்டமன்ற குழுக்கள் மற்றும் ஒப்பந்தக் குழுக்களில் பங்கேற்றல்",
      "மாவட்ட நிர்வாகத்திடம் மக்கள் கோரிக்கைகளை முன்வைத்தல்"
    ],
    cannot_do_en: [
      "Legislate on Union List subjects (Defence, Foreign Affairs, Railways, Currency, Nuclear Energy)",
      "Issue executive orders to civil servants or police independently",
      "Authorize or deny MLACDS fund disbursements — District Collector administers funds",
      "Override judgments of the Madras High Court or Supreme Court"
    ],
    cannot_do_ta: [
      "மத்தியப் பட்டியல் பாடங்களில் சட்டமியற்ற முடியாது (பாதுகாப்பு, வெளியுறவு, ரயில்வே, நாணயம்)",
      "தன்னிச்சையாக அரசு அதிகாரிகளுக்கோ காவல்துறைக்கோ நேரடி நிர்வாக உத்தரவுகளை பிறப்பிக்க முடியாது",
      "MLACDS நிதியை நேரடியாக வழங்க முடியாது — மாவட்ட ஆட்சியர் மட்டுமே நிதியை நிர்வகிப்பார்",
      "சென்னை உயர்நீதிமன்றம் அல்லது உச்சநீதிமன்றத்தின் தீர்ப்புகளை மேலெழுத முடியாது"
    ],
  },
  mp: {
    title_en: "Member of Parliament (MP - Lok Sabha / Rajya Sabha)",
    title_ta: "நாடாளுமன்ற உறுப்பினர் (மக்களவை / மாநிலங்களவை)",
    governing_body_en: "Parliament of India (Lok Sabha & Rajya Sabha)",
    governing_body_ta: "இந்திய நாடாளுமன்றம் (மக்களவை & மாநிலங்களவை)",
    description_en: "An MP participates in legislating Union List subjects, scrutinizing the Union Budget, overseeing Central Ministries, and recommending MPLADS works. MPs representing Tamil Nadu follow the same statutory framework as MPs from any other state.",
    description_ta: "ஒரு நாடாளுமன்ற உறுப்பினர் மத்தியப் பட்டியல் சட்டங்களை இயற்றுவதிலும், மத்திய வரவு செலவுத் திட்டத்தை ஆய்வு செய்வதிலும், மத்திய அமைச்சகங்களை மேற்பார்வையிடுவதிலும் பங்கேற்கிறார். தமிழ்நாட்டை பிரதிநிதித்துவப்படுத்தும் நாடாளுமன்ற உறுப்பினர்கள் வேறு மாநில உறுப்பினர்களைப் போன்றே அதே சட்ட கட்டமைப்பைப் பின்பற்றுகிறார்கள்.",
    constitutional_articles: ["Article 79-123 (Parliament)", "Article 84 (Qualifications for membership)", "Article 105 (Powers, Privileges and Immunities)", "Seventh Schedule – Union List (List I)"],
    can_do_en: [
      "Introduce Bills and amendments on Union List subjects (Defence, Railways, Finance, etc.)",
      "Vote on Constitutional Amendment Bills (Article 368 — requiring special majority)",
      "Question Central Ministers during Question Hour and Zero Hour in Parliament",
      "Recommend infrastructure works under MPLADS — ₹5 Crore annual allocation",
      "Serve on Parliamentary Standing Committees and Consultative Committees",
      "Move Adjournment Motions, Privilege Motions, and No-Confidence Motions in Lok Sabha"
    ],
    can_do_ta: [
      "மத்தியப் பட்டியல் பாடங்களில் (பாதுகாப்பு, ரயில்வே, நிதி) மசோதாக்களை அறிமுகப்படுத்துதல்",
      "அரசியலமைப்புத் திருத்த மசோதாக்கள் மீது வாக்களித்தல் (சிறப்பு பெரும்பான்மை தேவை)",
      "நாடாளுமன்றத்தில் கேள்வி நேரம் மற்றும் பூஜ்ய நேரத்தில் மத்திய அமைச்சர்களை கேள்வி கேட்டல்",
      "MPLADS கீழ் தொகுதி பொது வளர்ச்சிப் பணிகளை பரிந்துரைத்தல் (₹5 கோடி ஆண்டு நிதி)",
      "நாடாளுமன்ற நிலைக்குழுக்கள் மற்றும் ஆலோசனைக் குழுக்களில் பங்கேற்றல்",
      "மக்களவையில் ஒத்திவைப்பு தீர்மானம், சலுகை மனு, நம்பிக்கையில்லா தீர்மானம் கொண்டு வருதல்"
    ],
    cannot_do_en: [
      "Legislate exclusively on State List subjects (State Police, Agricultural policies, Local Government)",
      "Directly issue MPLADS spending orders — District Collector releases funds through PFMS",
      "Override State Legislature decisions on matters within State List jurisdiction",
      "Parliamentary immunity does not protect against criminal law prosecution outside Parliament"
    ],
    cannot_do_ta: [
      "மாநிலப் பட்டியல் பாடங்களில் (மாநில காவல், வேளாண்மை, உள்ளாட்சி) தன்னிச்சையாக சட்டமியற்ற முடியாது",
      "MPLADS நிதியை நேரடியாக செலவிட உத்தரவிட முடியாது — மாவட்ட ஆட்சியர் PFMS வழி நிதி வெளியிடுவார்",
      "மாநில சட்டமன்ற தீர்மானங்களை மேலெழுத அதிகாரம் இல்லை",
      "நாடாளுமன்ற சலுகைகள் நாடாளுமன்றத்திற்கு வெளியே குற்றவியல் சட்டங்களிலிருந்து விலக்கு வழங்காது"
    ],
  },
  cm: {
    title_en: "Chief Minister of Tamil Nadu",
    title_ta: "தமிழ்நாட்டின் முதலமைச்சர்",
    governing_body_en: "Government of Tamil Nadu",
    governing_body_ta: "தமிழ்நாடு அரசு",
    description_en: "The Chief Minister is the head of the elected government in Tamil Nadu, functioning as the principal link between the Governor and the Council of Ministers. The CM chairs Cabinet meetings, allocates portfolios, and directs state administration.",
    description_ta: "முதலமைச்சர் தேர்ந்தெடுக்கப்பட்ட மாநில அரசின் தலைவர், ஆளுநருக்கும் அமைச்சரவைக்கும் இடையிலான முக்கிய பாலமாக செயல்படுகிறார். CM அமைச்சரவைக் கூட்டங்களுக்கு தலைமை தாங்குகிறார், இலாகாக்களை ஒதுக்குகிறார் மற்றும் மாநில நிர்வாகத்தை வழிநடத்துகிறார்.",
    constitutional_articles: ["Article 163 (Aid and Advice to Governor)", "Article 164 (Ministers to hold office during pleasure of Governor)", "Article 167 (Duties of CM wrt Governor)"],
    can_do_en: [
      "Allocate, reallocate, and reshuffle ministerial portfolios",
      "Advise the Governor on summoning, proroguing, and dissolving the Assembly",
      "Chair Cabinet and sub-committee deliberations on all State matters",
      "Recommend appointment of the Advocate General, State Election Commissioner, State Vigilance Commission"
    ],
    can_do_ta: [
      "அமைச்சர்களுக்கான இலாகாக்களை ஒதுக்குதல், மாற்றுதல் மற்றும் திரும்பப் பெறுதல்",
      "சட்டமன்றக் கூட்டத்தொடரை கூட்டுவது, ஒத்திவைப்பது மற்றும் கலைப்பது குறித்து ஆளுநருக்கு பரிந்துரைத்தல்",
      "மாநில விவகாரங்கள் அனைத்திலும் அமைச்சரவை மற்றும் உப குழு ஆலோசனைகளுக்கு தலைமை தாங்குதல்",
      "மாநில தலைமை வழக்கறிஞர், தேர்தல் ஆணையர் மற்றும் விஜிலன்ஸ் ஆணைய நியமனங்களை பரிந்துரைத்தல்"
    ],
    cannot_do_en: [
      "Legislate on Union List subjects or override Union legislation",
      "Prevent Governor from exercising discretionary constitutional functions",
      "Actions are subject to judicial review by the High Court and Supreme Court",
      "Expenditure beyond Legislature-approved budget appropriations"
    ],
    cannot_do_ta: [
      "மத்தியப் பட்டியல் பாடங்களில் சட்டமியற்றவோ அல்லது மத்திய சட்டங்களை மேலெழுதவோ முடியாது",
      "ஆளுநரின் விருப்புரிமை அரசியலமைப்பு செயல்பாடுகளை தடுக்க முடியாது",
      "நடவடிக்கைகள் சென்னை உயர்நீதிமன்றம் மற்றும் உச்சநீதிமன்றத்தின் நீதித்துறை ஆய்வுக்கு உட்பட்டவை",
      "சட்டமன்றத்தால் அங்கீகரிக்கப்பட்ட வரவு செலவுத் திட்டத்திற்கு அப்பால் செலவினங்கள் செய்ய முடியாது"
    ],
  },
};

export default function PowersPage() {
  const { t, isTamil } = useLanguage();
  const [activeRole, setActiveRole] = useState<'mla' | 'mp' | 'cm'>('mla');

  const roleData = POWERS_DATA[activeRole];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#073324] to-[#16654b] text-white p-6 md:p-8 rounded-3xl shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold font-serif text-white">
          {t.powers.title}
        </h1>
        <p className="text-xs md:text-sm text-emerald-100/90 mt-1 max-w-2xl leading-relaxed">
          {t.powers.subtitle}
        </p>
      </div>

      {/* Seventh Schedule Education Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1.5">
          <span className="font-bold text-emerald-900 text-sm">
            {isTamil ? "மாநிலப் பட்டியல் (List II)" : "State List (List II)"}
          </span>
          <p className="text-emerald-800 leading-relaxed">{t.powers.stateListDesc}</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200 space-y-1.5">
          <span className="font-bold text-blue-900 text-sm">
            {isTamil ? "மத்தியப் பட்டியல் (List I)" : "Union List (List I)"}
          </span>
          <p className="text-blue-800 leading-relaxed">{t.powers.unionListDesc}</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 space-y-1.5">
          <span className="font-bold text-purple-900 text-sm">
            {isTamil ? "பொதுப் பட்டியல் (List III)" : "Concurrent List (List III)"}
          </span>
          <p className="text-purple-800 leading-relaxed">{t.powers.concurrentListDesc}</p>
        </div>
      </div>

      {/* Role Selector Tabs */}
      <div className="flex gap-2 flex-wrap">
        {(['mla', 'mp', 'cm'] as const).map((role) => (
          <button
            key={role}
            onClick={() => setActiveRole(role)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeRole === role
                ? 'bg-[#0d4a36] text-amber-300 shadow-xs'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {role === 'mla' ? (isTamil ? 'சட்டமன்ற உறுப்பினர் (MLA)' : 'MLA Powers') :
             role === 'mp' ? (isTamil ? 'நாடாளுமன்ற உறுப்பினர் (MP)' : 'MP Powers') :
             (isTamil ? 'முதலமைச்சர் (CM)' : 'Chief Minister Powers')}
          </button>
        ))}
      </div>

      {/* Powers Detail Card */}
      <div className="bg-white rounded-3xl border border-gray-200/90 shadow-sm overflow-hidden">
        {/* Role Header */}
        <div className="p-6 bg-gradient-to-r from-gray-50 to-emerald-50/40 border-b border-gray-100">
          <h2 className="text-xl font-bold text-[#073324] font-serif">
            {isTamil ? roleData.title_ta : roleData.title_en}
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            {isTamil ? roleData.governing_body_ta : roleData.governing_body_en}
          </p>
          <p className="text-sm text-gray-700 mt-3 leading-relaxed">
            {isTamil ? roleData.description_ta : roleData.description_en}
          </p>

          {/* Constitutional Articles */}
          <div className="mt-4 flex flex-wrap gap-2">
            {roleData.constitutional_articles.map((art, i) => (
              <span key={i} className="text-[11px] bg-white text-emerald-900 px-2.5 py-1 rounded-lg border border-emerald-200 font-mono shadow-2xs">
                {art}
              </span>
            ))}
          </div>
        </div>

        {/* Powers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          
          {/* CAN DO */}
          <div className="p-6 space-y-4">
            <h3 className="text-base font-bold text-emerald-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>{isTamil ? "அதிகாரப்பூர்வ அதிகாரங்கள் & பொறுப்புகள்" : "Constitutional Powers & Duties"}</span>
            </h3>
            <ul className="space-y-2.5">
              {(isTamil ? roleData.can_do_ta : roleData.can_do_en).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CANNOT DO */}
          <div className="p-6 space-y-4">
            <h3 className="text-base font-bold text-red-800 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span>{t.powers.limitsTitle}</span>
            </h3>
            <ul className="space-y-2.5">
              {(isTamil ? roleData.cannot_do_ta : roleData.cannot_do_en).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700 bg-red-50/50 p-3 rounded-xl border border-red-100">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
