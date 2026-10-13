'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ta' | 'en';

export interface Translations {
  appName: string;
  appTamilName: string;
  tagline: string;
  nav: {
    home: string;
    politicians: string;
    mlas: string;
    mps: string;
    ministers: string;
    salary: string;
    powers: string;
    history: string;
    districts: string;
    records: string;
    saved: string;
    about: string;
    admin: string;
  };
  common: {
    searchPlaceholder: string;
    filterByParty: string;
    filterByDistrict: string;
    filterByRole: string;
    filterByStatus: string;
    allParties: string;
    allDistricts: string;
    allRoles: string;
    allStatus: string;
    current: string;
    former: string;
    verified: string;
    verificationPending: string;
    dataUnavailable: string;
    viewProfile: string;
    saveProfile: string;
    saved: string;
    unsaved: string;
    reportCorrection: string;
    officialSource: string;
    lastVerified: string;
    clearFilters: string;
    noResultsFound: string;
    showingResults: string;
    learnMore: string;
    backToList: string;
    overview: string;
    salaryAndAllowances: string;
    powersAndResponsibilities: string;
    electionHistory: string;
    legislativeWork: string;
    sourcesAndAudit: string;
    neutralityNotice: string;
    disclaimer: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    searchPrompt: string;
    quickStats: {
      mlasCount: string;
      mpsCount: string;
      districtsCount: string;
      verifiedRecords: string;
    };
    featuredReps: string;
    recentRecords: string;
    exploreByDistrict: string;
    salaryComparisonCardTitle: string;
    salaryComparisonCardDesc: string;
    powersCardTitle: string;
    powersCardDesc: string;
    historyCardTitle: string;
    historyCardDesc: string;
  };
  salary: {
    title: string;
    subtitle: string;
    statutoryBasic: string;
    constituencyAllowance: string;
    telephoneOfficeAllowance: string;
    dailySessionAllowance: string;
    totalMonthlyPay: string;
    devFundTitle: string;
    devFundExplainer: string;
    separateNotice: string;
    rulesAndActs: string;
  };
  powers: {
    title: string;
    subtitle: string;
    stateListDesc: string;
    unionListDesc: string;
    concurrentListDesc: string;
    limitsTitle: string;
  };
}

const translations: Record<Language, Translations> = {
  ta: {
    appName: "அரசியல் அறிவு",
    appTamilName: "அரசியல் அறிவு",
    tagline: "உங்கள் அரசாங்கத்தை அறிந்துகொள்ளுங்கள் • Know Your Government",
    nav: {
      home: "முகப்பு",
      politicians: "அரசியல்வாதிகள்",
      mlas: "சட்டமன்ற உறுப்பினர்கள் (MLAs)",
      mps: "நாடாளுமன்ற உறுப்பினர்கள் (MPs)",
      ministers: "முதல்வர் & அமைச்சர்கள்",
      salary: "சம்பளம் & படிகள்",
      powers: "அதிகாரங்கள் & கடமைகள்",
      history: "அரசியல் வரலாறு",
      districts: "மாவட்டங்கள் & தொகுதிகள்",
      records: "அரசு ஆவணங்கள்",
      saved: "சேமிக்கப்பட்டவை",
      about: "விளக்கம் & ஆதாரங்கள்",
      admin: "நிர்வாகக் குழு",
    },
    common: {
      searchPlaceholder: "பெயர், தொகுதி அல்லது கட்சி மூலம் தேடுக...",
      filterByParty: "கட்சி வாரியாக வடிகட்டு",
      filterByDistrict: "மாவட்டம் வாரியாக",
      filterByRole: "பதவி வாரியாக",
      filterByStatus: "நிலை",
      allParties: "அனைத்து கட்சிகள்",
      allDistricts: "அனைத்து மாவட்டங்கள்",
      allRoles: "அனைத்து பதவிகள்",
      allStatus: "அனைத்தும்",
      current: "தற்போதைய",
      former: "முன்னாள்",
      verified: "சரிபார்க்கப்பட்டது",
      verificationPending: "சரிபார்ப்பு நிலுவையில்",
      dataUnavailable: "தகவல் இல்லை",
      viewProfile: "விவரங்களை பார்க்க",
      saveProfile: "சுயவிவரத்தை சேமி",
      saved: "சேமிக்கப்பட்டது",
      unsaved: "சேமிப்பை நீக்கு",
      reportCorrection: "தவறை சரிசெய்ய விண்ணப்பி",
      officialSource: "அதிகாரப்பூர்வ ஆதாரம்",
      lastVerified: "கடைசியாக சரிபார்க்கப்பட்டது",
      clearFilters: "வடிகட்டிகளை அழிக்க",
      noResultsFound: "பொருத்தமான தகவல்கள் எதுவும் கிடைக்கவில்லை",
      showingResults: "காட்டப்படும் முடிவுகள்",
      learnMore: "மேலும் அறிய",
      backToList: "பட்டியலுக்குத் திரும்பு",
      overview: "சுயவிவரம்",
      salaryAndAllowances: "சம்பளம் & படிகள்",
      powersAndResponsibilities: "அதிகாரங்கள் & பொறுப்புகள்",
      electionHistory: "தேர்தல் & கட்சி வரலாறு",
      legislativeWork: "சட்டமன்றப் பணிகள் & திட்டங்கள்",
      sourcesAndAudit: "ஆதாரங்கள் & உண்மை சரிபார்ப்பு",
      neutralityNotice: "அரசியல் நடுநிலை கொள்கை: இந்த தளம் எந்தவொரு அரசியல் கட்சிக்கும் சார்பற்றது. அனைத்து தகவல்களும் அதிகாரப்பூர்வ அரசு ஆவணங்கள் மற்றும் தேர்தல் ஆணையத்தின் பதிவுகளிலிருந்து மட்டுமே பெறப்படுகின்றன.",
      disclaimer: "அரசியல் அறிவு என்பது பொது மக்கள் விழிப்புணர்வுக்கான தகவல் தளமாகும். இங்குள்ள தகவல்கள் சட்ட ஆலோசனையாகவோ அதிகாரப்பூர்வ அரசிதழாகவோ கருதப்படக்கூடாது.",
    },
    home: {
      heroTitle: "தமிழ்நாடு அரசியல் மற்றும் பிரதிநிதிகளின் வெளிப்படைத்தன்மை தளம்",
      heroSubtitle: "உங்கள் எம்.எல்.ஏ மற்றும் எம்.பி. யார்? அவர்களின் அதிகாரப்பூர்வ சம்பளம், படிகள், அரசமைப்புச் சட்டப் பொறுப்புகள் மற்றும் ஆவணப்படுத்தப்பட்ட பணிகளை வெளிப்படையாக அறியுங்கள்.",
      searchPrompt: "உங்களுக்கு தேவையான பிரதிநிதியை எளிதாகத் தேடுங்கள்",
      quickStats: {
        mlasCount: "234 சட்டமன்ற தொகுதிகள்",
        mpsCount: "39 மக்களவை + 18 மாநிலங்களவை உறுப்பினர்கள்",
        districtsCount: "38 மாவட்டங்கள்",
        verifiedRecords: "100% அதிகாரப்பூர்வ ஆதாரங்களுடன்",
      },
      featuredReps: "முக்கிய தேர்ந்தெடுக்கப்பட்ட பிரதிநிதிகள்",
      recentRecords: "சமீபத்திய அரசு ஆவணங்கள் & அரசானைகள்",
      exploreByDistrict: "உங்கள் மாவட்டம் மற்றும் தொகுதியை ஆராயுங்கள்",
      salaryComparisonCardTitle: "சம்பள ஒப்பீட்டு மையம்",
      salaryComparisonCardDesc: "ஒரு MLA, MP மற்றும் அமைச்சரின் அதிகாரப்பூர்வ அடிப்படை சம்பளம், தொகுதி படிகள் மற்றும் தொகுதி மேம்பாட்டு நிதி (MLACDS / MPLADS) வேறுபாடுகளை விரிவாகக் காண்க.",
      powersCardTitle: "அதிகாரங்கள் & பொறுப்புகள் வழிகாட்டி",
      powersCardDesc: "மாநில பட்டியல், மத்திய பட்டியல் மற்றும் பொதுப் பட்டியலின் கீழ் ஒரு தேர்ந்தெடுக்கப்பட்ட பிரதிநிதியின் சட்டப்பூர்வ அதிகார வரம்புகளைப் புரிந்து கொள்ளுங்கள்.",
      historyCardTitle: "தமிழக அரசியல் வரலாறு (1952 - இன்று வரை)",
      historyCardDesc: "முதலமைச்சர்கள், முக்கிய சட்டங்கள் மற்றும் ஆட்சி மாற்றங்களின் முழுமையான காலவரிசை.",
    },
    salary: {
      title: "அரசாங்க பிரதிநிதிகளின் அதிகாரப்பூர்வ ஊதியம் & படிகள்",
      subtitle: "சட்டமன்ற மற்றும் நாடாளுமன்ற விதிகளின்படி நிர்ணயிக்கப்பட்ட உண்மையான சம்பள விவரங்கள். தனிநபர் ஊதியமும் தொகுதி மேம்பாட்டு நிதியும் தெளிவாகப் பிரிக்கப்பட்டுள்ளன.",
      statutoryBasic: "அடிப்படை சம்பளம் (மாதம்)",
      constituencyAllowance: "தொகுதிப் படி (மாதம்)",
      telephoneOfficeAllowance: "தொலைபேசி & அஞ்சல் படி",
      dailySessionAllowance: "கூட்டத்தொடர் தினசரி படி",
      totalMonthlyPay: "மொத்த மாத ஊதியம்",
      devFundTitle: "தொகுதி மேம்பாட்டு நிதி (வருடாந்திரம்)",
      devFundExplainer: "கவனிக்க: தொகுதி மேம்பாட்டு நிதி (MLACDS ₹3 கோடி / MPLADS ₹5 கோடி) என்பது பொதுப்பணி மற்றும் உள்கட்டமைப்பு பணிகளுக்கு மட்டுமே ஒதுக்கப்படும் அரசு நிதி. இது பிரதிநிதியின் தனிப்பட்ட சம்பளம் அல்லது வங்கிக் கணக்கு அல்ல.",
      separateNotice: "தனிப்பட்ட ஊதியம் மற்றும் தொகுதி மேம்பாட்டுத் திட்டச் செலவுகள் முற்றிலும் வெவ்வேறானவை.",
      rulesAndActs: "பொருந்தக்கூடிய சட்டம் & அரசு உத்தரவு",
    },
    powers: {
      title: "அரசமைப்புச் சட்ட அதிகாரங்கள் & பொறுப்புகள்",
      subtitle: "இந்திய அரசியலமைப்பு சட்டம் (Schedule 7) மற்றும் மக்கள் பிரதிநிதித்துவ சட்டம் ஆகியவற்றின் கீழ் மக்கள் பிரதிநிதிகளின் எல்லைகள்.",
      stateListDesc: "மாநிலப் பட்டியல் (State List): பொது ஒழுங்கு, காவல்துறை, விவசாயம், சுகாதாரம் மற்றும் உள்ளாட்சி அமைப்புகள் மாநில அரசின் அதிகார வரம்பிற்குள் உள்ளன.",
      unionListDesc: "மத்தியப் பட்டியல் (Union List): பாதுகாப்பு, வெளியுறவு, இரயில்வே, தேசிய நெடுஞ்சாலைகள், அணுசக்தி ஆகியவை நாடாளுமன்றத்தின் கீழ் உள்ளன.",
      concurrentListDesc: "பொதுப் பட்டியல் (Concurrent List): கல்வி, வனம், தொழிற்சங்கங்கள், சிவில் நடைமுறைகள் ஆகியவற்றில் இரு அமைப்புகளுக்கும் அதிகாரம் உண்டு.",
      limitsTitle: "அதிகார வரம்புகள் மற்றும் வரம்புகள் (Limitations of Authority)",
    },
  },
  en: {
    appName: "Arasiyal Arivu",
    appTamilName: "அரசியல் அறிவு",
    tagline: "Know Your Government • உங்கள் அரசாங்கத்தை அறிந்துகொள்ளுங்கள்",
    nav: {
      home: "Home",
      politicians: "Politicians",
      mlas: "MLAs (Assembly)",
      mps: "MPs (Parliament)",
      ministers: "CM & Ministers",
      salary: "Salary & Allowances",
      powers: "Powers & Roles",
      history: "Political History",
      districts: "Districts & Constituencies",
      records: "Public Records",
      saved: "Saved Profiles",
      about: "About & Sources",
      admin: "Admin Dashboard",
    },
    common: {
      searchPlaceholder: "Search by name, constituency, or party...",
      filterByParty: "Filter by Party",
      filterByDistrict: "Filter by District",
      filterByRole: "Filter by Role",
      filterByStatus: "Status",
      allParties: "All Parties",
      allDistricts: "All Districts",
      allRoles: "All Roles",
      allStatus: "All",
      current: "Current",
      former: "Former",
      verified: "Verified",
      verificationPending: "Verification Pending",
      dataUnavailable: "Data Unavailable",
      viewProfile: "View Full Profile",
      saveProfile: "Bookmark Profile",
      saved: "Saved",
      unsaved: "Remove Bookmark",
      reportCorrection: "Submit Correction",
      officialSource: "Official Source",
      lastVerified: "Last Verified",
      clearFilters: "Clear Filters",
      noResultsFound: "No matching political records found",
      showingResults: "Showing results",
      learnMore: "Learn More",
      backToList: "Back to Directory",
      overview: "Overview",
      salaryAndAllowances: "Salary & Allowances",
      powersAndResponsibilities: "Powers & Responsibilities",
      electionHistory: "Elections & Party History",
      legislativeWork: "Legislative Records & Projects",
      sourcesAndAudit: "Sources & Verification",
      neutralityNotice: "Strict Political Neutrality: This portal is strictly non-partisan. Information is verified exclusively through official assembly gazettes, Digital Sansad, and the Election Commission of India.",
      disclaimer: "Arasiyal Arivu is a public educational transparency initiative. Content does not constitute legal counsel or an official government gazette.",
    },
    home: {
      heroTitle: "Tamil Nadu Civic Transparency & Political Information Portal",
      heroSubtitle: "Know who represents your constituency, understand their official salaries, verified allowances, constitutional powers, and public legislative records.",
      searchPrompt: "Search verified representatives and public data across Tamil Nadu",
      quickStats: {
        mlasCount: "234 Assembly Seats",
        mpsCount: "39 Lok Sabha + 18 Rajya Sabha",
        districtsCount: "38 Administrative Districts",
        verifiedRecords: "100% Sourced & Documented",
      },
      featuredReps: "Elected Representatives & Cabinet",
      recentRecords: "Recently Published Public Records & Orders",
      exploreByDistrict: "Explore Tamil Nadu By District",
      salaryComparisonCardTitle: "Official Remuneration Comparison",
      salaryComparisonCardDesc: "Understand statutory basic pay, constituency allowances, telephone benefits, and clearly distinguish personal pay from Constituency Development Funds (MLACDS ₹3 Cr / MPLADS ₹5 Cr).",
      powersCardTitle: "Constitutional Powers & Responsibilities",
      powersCardDesc: "Deep-dive into State List vs Union List mandates, what an MLA or MP can and cannot legally authorize, and citizen grievance channels.",
      historyCardTitle: "Tamil Nadu Political Timeline (1952 – Present)",
      historyCardDesc: "Explore terms of Chief Ministers, landmark legislative enactments, and historic transitions of governance.",
    },
    salary: {
      title: "Official Remuneration, Salaries & Statutory Allowances",
      subtitle: "Verified salaries governed by the TN Payment of Salaries Act and Parliament of India rules. Clear demarcation between personal remuneration and public development allocations.",
      statutoryBasic: "Statutory Basic Pay (Monthly)",
      constituencyAllowance: "Constituency Allowance (Monthly)",
      telephoneOfficeAllowance: "Secretarial & Office Allowance",
      dailySessionAllowance: "Daily Session Attendance Allowance",
      totalMonthlyPay: "Total Monthly Official Emoluments",
      devFundTitle: "Constituency Development Fund (Annual)",
      devFundExplainer: "CRITICAL DISTINCTION: Local Area Development Funds (MLACDS ₹3 Crore / MPLADS ₹5 Crore) are public funds allocated exclusively for civic infrastructure works. They are never personal income or deposited in private bank accounts.",
      separateNotice: "Personal remuneration and public constituency work funds are strictly non-fungible.",
      rulesAndActs: "Governing Legislation / Statutory Gazette",
    },
    powers: {
      title: "Constitutional Mandates & Division of Powers",
      subtitle: "Defined under the Seventh Schedule of the Constitution of India and Representation of the People Act, 1951.",
      stateListDesc: "State List (List II): Police, Public Order, Agriculture, Local Government, Public Health are exclusively under the Tamil Nadu Legislative Assembly.",
      unionListDesc: "Union List (List I): National Defense, Foreign Affairs, Atomic Energy, Railways, National Highways, and Currency are under the Parliament of India.",
      concurrentListDesc: "Concurrent List (List III): Education, Forests, Civil Procedure, and Trade Unions allow legislative powers to both State and Union.",
      limitsTitle: "Statutory Limitations & Constitutional Boundaries",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isTamil: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ta');

  useEffect(() => {
    const saved = localStorage.getItem('arasiyal_lang') as Language;
    if (saved === 'ta' || saved === 'en') {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('arasiyal_lang', lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
        isTamil: language === 'ta',
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
