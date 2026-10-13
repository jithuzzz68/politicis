import { Politician, PoliticalParty, District, Constituency, RemunerationRule, PublicRecordItem, TimelineEvent } from '@/types';

export const POLITICAL_PARTIES: PoliticalParty[] = [
  {
    id: "dmk",
    name_en: "Dravida Munnetra Kazhagam",
    name_ta: "திராவிட முன்னேற்றக் கழகம்",
    abbreviation: "DMK",
    symbol: "Rising Sun (உதயசூரியன்)",
    color: "#dc2626", // Red-Black tradition represented cleanly
    founded_year: 1949,
    founder_en: "C. N. Annadurai",
    founder_ta: "பேரறிஞர் சி. என். அண்ணாதுரை",
    description_en: "State party founded in 1949 advocating Dravidian social justice, state autonomy, and federalism.",
    description_ta: "சமூக நீதி, மாநில சுயாட்சி மற்றும் கூட்டாட்சி தத்துவத்தை முதன்மையாகக் கொண்டு 1949ல் நிறுவப்பட்ட மாநிலக் கட்சி.",
  },
  {
    id: "aiadmk",
    name_en: "All India Anna Dravida Munnetra Kazhagam",
    name_ta: "அனைத்திந்திய அண்ணா திராவிட முன்னேற்றக் கழகம்",
    abbreviation: "AIADMK",
    symbol: "Two Leaves (இரட்டை இலை)",
    color: "#15803d",
    founded_year: 1972,
    founder_en: "M. G. Ramachandran",
    founder_ta: "எம். ஜி. ராமச்சந்திரன் (எம்.ஜி.ஆர்)",
    description_en: "Major Dravidian party founded in 1972 focusing on welfare programs, social equity, and administrative reforms.",
    description_ta: "1972 இல் புரட்சித்தலைவர் எம்.ஜி.ஆரால் மக்கள் நல்வாழ்வு மற்றும் சமத்துவக் கொள்கைகளுக்காக நிறுவப்பட்ட கட்சி.",
  },
  {
    id: "inc",
    name_en: "Indian National Congress",
    name_ta: "இந்திய தேசிய காங்கிரஸ்",
    abbreviation: "INC",
    symbol: "Hand (கை)",
    color: "#0284c7",
    founded_year: 1885,
    founder_en: "Allan Octavian Hume",
    founder_ta: "ஏ. ஓ. ஹியூம்",
    description_en: "National political party with historic governance in Madras State under K. Kamaraj.",
    description_ta: "பெருந்தலைவர் காமராஜர் தலைமையில் மெட்ராஸ் மாகாணத்தில் பொற்கால ஆட்சி புரிந்த தேசிய பேரியக்கம்.",
  },
  {
    id: "bjp",
    name_en: "Bharatiya Janata Party",
    name_ta: "பாரதிய ஜனதா கட்சி",
    abbreviation: "BJP",
    symbol: "Lotus (தாமரை)",
    color: "#ea580c",
    founded_year: 1980,
    founder_en: "Atal Bihari Vajpayee, L. K. Advani",
    founder_ta: "அடல் பிகாரி வாஜ்பாய், எல். கே. அத்வானி",
    description_en: "National political party advocating cultural nationalism, economic governance, and federal coordination.",
    description_ta: "தேசியவாதக் கொள்கைகளையும் நாட்டின் ஒருங்கிணைந்த வளர்ச்சியையும் வலியுறுத்தும் தேசிய கட்சி.",
  },
  {
    id: "vck",
    name_en: "Viduthalai Chiruthaigal Katchi",
    name_ta: "விடுதலைச் சிறுத்தைகள் கட்சி",
    abbreviation: "VCK",
    symbol: "Pot / Pan / Diamond (பானை)",
    color: "#059669",
    founded_year: 1982,
    founder_en: "Thol. Thirumavalavan",
    founder_ta: "தொல். திருமாவளவன்",
    description_en: "Social justice and anti-caste movement party representing marginalized communities and secularism.",
    description_ta: "சாதி ஒழிப்பு, சமத்துவம் மற்றும் விளிம்புநிலை மக்களின் உரிமைக்கான இயக்கக் கட்சி.",
  },
  {
    id: "cpi-m",
    name_en: "Communist Party of India (Marxist)",
    name_ta: "இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்)",
    abbreviation: "CPI(M)",
    symbol: "Hammer, Sickle and Star",
    color: "#b91c1c",
    founded_year: 1964,
    founder_en: "P. Sundarayya, E.M.S. Namboodiripad",
    founder_ta: "பி. சுந்தரய்யா",
    description_en: "Left-wing political party advocating workers' rights, agrarian security, and public welfare.",
    description_ta: "தொழிலாளர் நலன், விவசாயிகள் உரிமை மற்றும் சோசலிச கோட்பாடுகளுக்கான இடதுசாரி கட்சி.",
  },
  {
    id: "pmk",
    name_en: "Pattali Makkal Katchi",
    name_ta: "பாட்டாளி மக்கள் கட்சி",
    abbreviation: "PMK",
    symbol: "Mango (மாம்பழம்)",
    color: "#ca8a04",
    founded_year: 1989,
    founder_en: "S. Ramadoss",
    founder_ta: "மருத்துவர் எஸ். ராமதாஸ்",
    description_en: "Party advocating backward class welfare, prohibition, and proportional reservation.",
    description_ta: "பிற்படுத்தப்பட்டோர் நலன், மதுவிலக்கு மற்றும் சமூக நீதியை முதன்மைப்படுத்தும் கட்சி.",
  }
];

export const DISTRICTS: District[] = [
  { id: "chennai", name_en: "Chennai", name_ta: "சென்னை", headquarters_en: "Chennai", headquarters_ta: "சென்னை", assembly_seats_count: 16, parliamentary_seats_count: 3, population: "7.1 Million" },
  { id: "coimbatore", name_en: "Coimbatore", name_ta: "கோயம்புத்தூர்", headquarters_en: "Coimbatore", headquarters_ta: "கோயம்புத்தூர்", assembly_seats_count: 10, parliamentary_seats_count: 1, population: "3.5 Million" },
  { id: "madurai", name_en: "Madurai", name_ta: "மதுரை", headquarters_en: "Madurai", headquarters_ta: "மதுரை", assembly_seats_count: 10, parliamentary_seats_count: 1, population: "3.0 Million" },
  { id: "salem", name_en: "Salem", name_ta: "சேலம்", headquarters_en: "Salem", headquarters_ta: "சேலம்", assembly_seats_count: 11, parliamentary_seats_count: 1, population: "3.5 Million" },
  { id: "tiruchirappalli", name_en: "Tiruchirappalli", name_ta: "திருச்சிராப்பள்ளி", headquarters_en: "Tiruchirappalli", headquarters_ta: "திருச்சிராப்பள்ளி", assembly_seats_count: 9, parliamentary_seats_count: 1, population: "2.7 Million" },
  { id: "tirunelveli", name_en: "Tirunelveli", name_ta: "திருநெல்வேலி", headquarters_en: "Tirunelveli", headquarters_ta: "திருநெல்வேலி", assembly_seats_count: 5, parliamentary_seats_count: 1, population: "1.7 Million" },
  { id: "thoothukudi", name_en: "Thoothukudi", name_ta: "தூத்துக்குடி", headquarters_en: "Thoothukudi", headquarters_ta: "தூத்துக்குடி", assembly_seats_count: 6, parliamentary_seats_count: 1, population: "1.8 Million" },
  { id: "thanjavur", name_en: "Thanjavur", name_ta: "தஞ்சாவூர்", headquarters_en: "Thanjavur", headquarters_ta: "தஞ்சாவூர்", assembly_seats_count: 8, parliamentary_seats_count: 1, population: "2.4 Million" },
  { id: "vellore", name_en: "Vellore", name_ta: "வேலூர்", headquarters_en: "Vellore", headquarters_ta: "வேலூர்", assembly_seats_count: 5, parliamentary_seats_count: 1, population: "1.6 Million" },
  { id: "kanyakumari", name_en: "Kanyakumari", name_ta: "கன்னியாகுமரி", headquarters_en: "Nagercoil", headquarters_ta: "நாகர்கோவில்", assembly_seats_count: 6, parliamentary_seats_count: 1, population: "1.9 Million" },
  { id: "erode", name_en: "Erode", name_ta: "ஈரோடு", headquarters_en: "Erode", headquarters_ta: "ஈரோடு", assembly_seats_count: 8, parliamentary_seats_count: 1, population: "2.3 Million" },
  { id: "cuddalore", name_en: "Cuddalore", name_ta: "கடலூர்", headquarters_en: "Cuddalore", headquarters_ta: "கடலூர்", assembly_seats_count: 9, parliamentary_seats_count: 1, population: "2.6 Million" },
  { id: "kanchipuram", name_en: "Kanchipuram", name_ta: "காஞ்சிபுரம்", headquarters_en: "Kanchipuram", headquarters_ta: "காஞ்சிபுரம்", assembly_seats_count: 4, parliamentary_seats_count: 1, population: "1.3 Million" },
  { id: "dharmapuri", name_en: "Dharmapuri", name_ta: "தருமபுரி", headquarters_en: "Dharmapuri", headquarters_ta: "தருமபுரி", assembly_seats_count: 5, parliamentary_seats_count: 1, population: "1.5 Million" },
  { id: "virudhunagar", name_en: "Virudhunagar", name_ta: "விருதுநகர்", headquarters_en: "Virudhunagar", headquarters_ta: "விருதுநகர்", assembly_seats_count: 7, parliamentary_seats_count: 1, population: "1.9 Million" }
];

export const CONSTITUENCIES: Constituency[] = [
  { id: "ac-kolathur", number: 13, name_en: "Kolathur", name_ta: "கொளத்தூர்", type: "assembly", district_id: "chennai", district_name_en: "Chennai", district_name_ta: "சென்னை", is_reserved: false, voter_turnout_percent: 61.1, current_representative_name_en: "M. K. Stalin", current_representative_name_ta: "மு. க. ஸ்டாலின்" },
  { id: "ac-edappadi", number: 86, name_en: "Edappadi", name_ta: "எடப்பாடி", type: "assembly", district_id: "salem", district_name_en: "Salem", district_name_ta: "சேலம்", is_reserved: false, voter_turnout_percent: 86.4, current_representative_name_en: "Edappadi K. Palaniswami", current_representative_name_ta: "எடப்பாடி கே. பழனிசாமி" },
  { id: "ac-chepauk", number: 19, name_en: "Chepauk-Thiruvallikeni", name_ta: "சேப்பாக்கம் - திருவல்லிக்கேணி", type: "assembly", district_id: "chennai", district_name_en: "Chennai", district_name_ta: "சென்னை", is_reserved: false, voter_turnout_percent: 58.3, current_representative_name_en: "Udhayanidhi Stalin", current_representative_name_ta: "உதயநிதி ஸ்டாலின்" },
  { id: "ac-radhapuram", number: 228, name_en: "Radhapuram", name_ta: "ராதாபுரம்", type: "assembly", district_id: "tirunelveli", district_name_en: "Tirunelveli", district_name_ta: "திருநெல்வேலி", is_reserved: false, voter_turnout_percent: 73.1, current_representative_name_en: "M. Appavu (Speaker)", current_representative_name_ta: "மு. அப்பாவு (சபாநாயகர்)" },
  { id: "ac-coimbatore-south", number: 120, name_en: "Coimbatore South", name_ta: "கோயம்புத்தூர் தெற்கு", type: "assembly", district_id: "coimbatore", district_name_en: "Coimbatore", district_name_ta: "கோயம்புத்தூர்", is_reserved: false, voter_turnout_percent: 60.7, current_representative_name_en: "Vanathi Srinivasan", current_representative_name_ta: "வானதி சீனிவாசன்" },
  { id: "ac-madurai-central", number: 190, name_en: "Madurai Central", name_ta: "மதுரை மத்தி", type: "assembly", district_id: "madurai", district_name_en: "Madurai", district_name_ta: "மதுரை", is_reserved: false, voter_turnout_percent: 63.8, current_representative_name_en: "P. T. R. Palanivel Thiagarajan", current_representative_name_ta: "பி. டி. ஆர். பழனிவேல் தியாகராஜன்" },
  { id: "pc-thoothukudi", number: 36, name_en: "Thoothukkudi (Lok Sabha)", name_ta: "தூத்துக்குடி (மக்களவை)", type: "parliamentary", district_id: "thoothukudi", district_name_en: "Thoothukudi", district_name_ta: "தூத்துக்குடி", is_reserved: false, voter_turnout_percent: 66.9, current_representative_name_en: "Kanimozhi Karunanidhi", current_representative_name_ta: "கனிமொழி கருணாநிதி" },
  { id: "pc-sriperumbudur", number: 5, name_en: "Sriperumbudur (Lok Sabha)", name_ta: "ஸ்ரீபெரும்புதூர் (மக்களவை)", type: "parliamentary", district_id: "kanchipuram", district_name_en: "Kanchipuram", district_name_ta: "காஞ்சிபுரம்", is_reserved: false, voter_turnout_percent: 60.2, current_representative_name_en: "T. R. Baalu", current_representative_name_ta: "டி. ஆர். பாலு" },
  { id: "pc-chidambaram", number: 27, name_en: "Chidambaram (SC) (Lok Sabha)", name_ta: "சிதம்பரம் (தனி) (மக்களவை)", type: "parliamentary", district_id: "cuddalore", district_name_en: "Cuddalore", district_name_ta: "கடலூர்", is_reserved: true, reservation_type: "SC", voter_turnout_percent: 76.5, current_representative_name_en: "Thol. Thirumavalavan", current_representative_name_ta: "தொல். திருமாவளவன்" },
  { id: "pc-chennai-central", number: 4, name_en: "Chennai Central (Lok Sabha)", name_ta: "சென்னை மத்தி (மக்களவை)", type: "parliamentary", district_id: "chennai", district_name_en: "Chennai", district_name_ta: "சென்னை", is_reserved: false, voter_turnout_percent: 54.0, current_representative_name_en: "Dayanidhi Maran", current_representative_name_ta: "தயாகரன் மாறன்" }
];

export const REMUNERATION_RULES: Record<string, RemunerationRule> = {
  mla_tn: {
    id: "rem-mla-tn",
    position_id: "mla",
    position_name_en: "Member of Legislative Assembly (MLA) - Tamil Nadu",
    position_name_ta: "சட்டமன்ற உறுப்பினர் (MLA) - தமிழ்நாடு",
    level: "State (Tamil Nadu)",
    basic_salary: 30000,
    constituency_allowance: 25000,
    telephone_secretarial_allowance: 25000,
    daily_allowance_session: 1000,
    total_monthly_emoluments: 105000, // ₹1,05,000 per month statutory emoluments
    development_fund_annual: 30000000, // ₹3.00 Crore MLACDS
    development_fund_name_en: "Member of Legislative Assembly Constituency Development Scheme (MLACDS)",
    development_fund_name_ta: "சட்டமன்ற உறுப்பினர் தொகுதி மேம்பாட்டு நிதி (MLACDS)",
    pension_monthly: 20000,
    travel_concessions_en: "Free AC first-class railway travel pass within Tamil Nadu & up to ₹20,000 annual allowance.",
    travel_concessions_ta: "தமிழ்நாட்டிற்குள் அரசுப் பேருந்துகளில் இலவச பயணம் மற்றும் ரயில்வே முதல் வகுப்பு சலுகை.",
    medical_benefits_en: "100% reimbursement under United India State Government Medical Attendance Scheme.",
    medical_benefits_ta: "மாநில அரசு மருத்துவத் திட்டத்தின் கீழ் முழுமையான கட்டணமில்லா சிகிச்சை.",
    effective_date: "2018-01-10",
    act_or_rule_en: "Tamil Nadu Payment of Salaries Act, 1951 (As amended by TN Act No. 12 of 2018)",
    act_or_rule_ta: "தமிழ்நாடு ஊதியம் மற்றும் படிகள் சட்டம் 1951 (2018 ஆம் ஆண்டு திருத்தம்)",
    source_name: "Tamil Nadu Legislative Assembly Gazette & NEVA Portal",
    source_url: "https://tnla.neva.gov.in/",
    last_verified_date: "2026-04-01",
    verification_status: "verified"
  },
  mp_parliament: {
    id: "rem-mp-parliament",
    position_id: "mp",
    position_name_en: "Member of Parliament (MP - Lok Sabha / Rajya Sabha)",
    position_name_ta: "நாடாளுமன்ற உறுப்பினர் (MP - மக்களவை / மாநிலங்களவை)",
    level: "Union (Parliament)",
    basic_salary: 100000,
    constituency_allowance: 70000,
    telephone_secretarial_allowance: 60000,
    daily_allowance_session: 2000,
    total_monthly_emoluments: 230000, // ₹2,30,000 per month
    development_fund_annual: 50000000, // ₹5.00 Crore MPLADS
    development_fund_name_en: "Members of Parliament Local Area Development Scheme (MPLADS)",
    development_fund_name_ta: "நாடாளுமன்ற உறுப்பினர் உள்ளூர் பகுதி மேம்பாட்டுத் திட்டம் (MPLADS)",
    pension_monthly: 25000,
    travel_concessions_en: "34 single air journeys per year within India, free executive class train travel for self and companion.",
    travel_concessions_ta: "ஆண்டிற்கு 34 முறை இலவச உள்நாட்டு விமானப் பயணம் மற்றும் ரயில்வே முதல் வகுப்பு பயணம்.",
    medical_benefits_en: "Central Government Health Scheme (CGHS) coverage at apex institutes (AIIMS/Safdarjung).",
    medical_benefits_ta: "மத்திய அரசு சுகாதாரத் திட்டம் (CGHS) கீழ் விரிவான மருத்துவ வசதிகள்.",
    effective_date: "2018-04-01",
    act_or_rule_en: "Salary, Allowances and Pension of Members of Parliament Act, 1954 (Rule 3/4/8 amendments)",
    act_or_rule_ta: "நாடாளுமன்ற உறுப்பினர்கள் ஊதியம், படிகள் மற்றும் ஓய்வூதியச் சட்டம் 1954",
    source_name: "Digital Sansad / Ministry of Parliamentary Affairs",
    source_url: "https://mpa.gov.in/",
    last_verified_date: "2026-04-01",
    verification_status: "verified"
  },
  minister_tn: {
    id: "rem-minister-tn",
    position_id: "minister",
    position_name_en: "Cabinet Minister - Government of Tamil Nadu",
    position_name_ta: "மாநில அமைச்சரவை அமைச்சர் - தமிழ்நாடு அரசு",
    level: "State (Tamil Nadu)",
    basic_salary: 30000,
    constituency_allowance: 25000,
    telephone_secretarial_allowance: 35000,
    daily_allowance_session: 1200,
    total_monthly_emoluments: 115000,
    development_fund_annual: 30000000,
    development_fund_name_en: "Member of Legislative Assembly Constituency Development Scheme (MLACDS)",
    development_fund_name_ta: "சட்டமன்ற உறுப்பினர் தொகுதி மேம்பாட்டு நிதி (MLACDS)",
    pension_monthly: 20000,
    travel_concessions_en: "Designated official vehicle with government driver, fuel quota, and official guest house entitlement.",
    travel_concessions_ta: "அரசு வாகனம், எரிபொருள் படி மற்றும் அரசு ஆய்வு மாளிகைகளில் தங்கும் வசதி.",
    medical_benefits_en: "Comprehensive VIP state healthcare reimbursement for self and immediate family.",
    medical_benefits_ta: "முழு அரசு மருத்துவ சிகிச்சை திருப்பிச் செலுத்தும் திட்டம்.",
    effective_date: "2018-01-10",
    act_or_rule_en: "Tamil Nadu Payment of Salaries Act, 1951 (Ministers Salaries Section 3)",
    act_or_rule_ta: "தமிழ்நாடு அமைச்சர்கள் ஊதியம் மற்றும் படிகள் சட்டம் 1951",
    source_name: "Tamil Nadu Government Portal & Finance Dept",
    source_url: "https://www.tn.gov.in/",
    last_verified_date: "2026-04-01",
    verification_status: "verified"
  },
  cm_tn: {
    id: "rem-cm-tn",
    position_id: "cm",
    position_name_en: "Chief Minister of Tamil Nadu",
    position_name_ta: "தமிழ்நாடு முதலமைச்சர்",
    level: "State (Tamil Nadu)",
    basic_salary: 30000,
    constituency_allowance: 25000,
    telephone_secretarial_allowance: 45000,
    daily_allowance_session: 1500,
    total_monthly_emoluments: 125000,
    development_fund_annual: 30000000,
    development_fund_name_en: "MLACDS + Chief Minister's Special Discretionary Relief Fund",
    development_fund_name_ta: "சட்டமன்ற தொகுதி நிதி + முதலமைச்சரின் பொது நிவாரண நிதி மேற்பார்வை",
    pension_monthly: 20000,
    travel_concessions_en: "Official State Secretariat security escort, state plane entitlement for state duties, official residence.",
    travel_concessions_ta: "அரசு இல்லம், உச்சகட்ட பாதுகாப்பு பாதுகாப்புப் பிரிவு மற்றும் அதிகாரப்பூர்வ பயணச் செலவுகள்.",
    medical_benefits_en: "Premier comprehensive medical cover under Tamil Nadu State Government Rules.",
    medical_benefits_ta: "அரசு விதிகளின்படி முதலமைச்சருக்கான முழு மருத்துவ வசதிகள்.",
    effective_date: "2018-01-10",
    act_or_rule_en: "Tamil Nadu Payment of Salaries Act, 1951 (Chief Minister Remuneration Rules)",
    act_or_rule_ta: "தமிழ்நாடு முதலமைச்சர் ஊதியம் மற்றும் படிகள் சட்டம்",
    source_name: "Tamil Nadu Legislative Assembly Secretariat",
    source_url: "https://www.tn.gov.in/",
    last_verified_date: "2026-04-01",
    verification_status: "verified"
  }
};

export const POLITICIANS: Politician[] = [
  {
    id: "mk-stalin",
    name_en: "M. K. Stalin",
    name_ta: "மு. க. ஸ்டாலின்",
    slug: "mk-stalin",
    photo_url: "https://images.unsplash.com/photo-1577975882846-431adc8c2009?w=400&auto=format&fit=crop&q=80",
    type: "CHIEF_MINISTER",
    is_current: true,
    position_title_en: "Chief Minister of Tamil Nadu & MLA (Kolathur)",
    position_title_ta: "தமிழ்நாடு முதலமைச்சர் & சட்டமன்ற உறுப்பினர் (கொளத்தூர்)",
    portfolio_en: "Public, Home, General Administration, Indian Administrative Service, Indian Police Service, Special Initiatives",
    portfolio_ta: "பொது, உள்துறை, பொது நிர்வாகம், ஐ.ஏ.எஸ், ஐ.பி.எஸ், சிறப்பு முயற்சிகள்",
    party_id: "dmk",
    party_name_en: "Dravida Munnetra Kazhagam",
    party_name_ta: "திராவிட முன்னேற்றக் கழகம்",
    party_abbr: "DMK",
    party_color: "#dc2626",
    constituency_id: "ac-kolathur",
    constituency_name_en: "Kolathur",
    constituency_name_ta: "கொளத்தூர்",
    district_id: "chennai",
    district_name_en: "Chennai",
    district_name_ta: "சென்னை",
    term_start: "2021-05-07",
    term_end: null,
    assembly_or_parliament_term: "16th Tamil Nadu Legislative Assembly",
    biography_en: "M. K. Stalin is the 8th Chief Minister of Tamil Nadu and President of the Dravida Munnetra Kazhagam (DMK). He has represented the Kolathur assembly constituency since 2011 and previously served as Deputy Chief Minister (2009-2011) and Mayor of Chennai (1996-2002).",
    biography_ta: "மு. க. ஸ்டாலின் தமிழ்நாட்டின் 8வது முதலமைச்சராகவும், திமுகவின் தலைவராகவும் பொறுப்பு வகிக்கிறார். 2011 முதல் கொளத்தூர் சட்டமன்ற உறுப்பினராக உள்ள இவர், முன்னதாக தமிழக துணை முதலமைச்சராகவும் (2009-2011) மற்றும் சென்னை மாநகராட்சி மேயராகவும் (1996-2002) பணியாற்றியுள்ளார்.",
    birth_year: 1953,
    education_en: "B.A. History, The New College, Chennai",
    education_ta: "பி.ஏ. வரலாறு, நியூ கல்லூரி, சென்னை",
    remuneration: REMUNERATION_RULES.cm_tn,
    powers_and_responsibilities: {
      role_description_en: "Head of the Council of Ministers in Tamil Nadu; advises the Governor on executive actions and guides state policy across all state departments.",
      role_description_ta: "அமைச்சரவையின் தலைவர்; ஆளுநருக்கு அரசின் கொள்கை முடிவுகளைப் பரிந்துரைத்து மாநிலத்தின் நிர்வாகப் பணிகளை வழிநடத்துகிறார்.",
      constitutional_articles: ["Article 163 (Council of Ministers to aid Governor)", "Article 164 (Appointment of Ministers)", "Article 167 (Duties of Chief Minister)"],
      statutory_powers_en: [
        "Allocates and reshuffles ministerial portfolios",
        "Presides over State Cabinet meetings and sets executive priorities",
        "Acts as primary channel of communication between Governor and Council of Ministers",
        "Recommends summoning and prorogation of the Legislative Assembly"
      ],
      statutory_powers_ta: [
        "அமைச்சர்களுக்கான இலாகாக்களை ஒதுக்குதல் மற்றும் மாற்றுதல்",
        "மாநில அமைச்சரவைக் கூட்டங்களுக்குத் தலைமை தாங்கி கொள்கை முடிவுகளை எடுத்தல்",
        "ஆளுநருக்கும் அமைச்சரவைக்கும் இடையிலான பாலமாகச் செயல்படுதல்",
        "சட்டமன்றக் கூட்டத்தொடரை கூட்டுவது குறித்து ஆளுநருக்குப் பரிந்துரைத்தல்"
      ],
      key_responsibilities_en: [
        "Maintenance of Public Order, Police administration, and General Governance",
        "Formulation of State Annual Budget in coordination with the Finance Minister",
        "Disaster management and inter-state river water negotiations"
      ],
      key_responsibilities_ta: [
        "மாநிலத்தின் சட்டம் ஒழுங்கு, காவல் துறை நிர்வாகம் மற்றும் பொது அமைதியை நிலைநாட்டுதல்",
        "நிதி அமைச்சருடன் இணைந்து மாநிலத்தின் ஆண்டு வரவு செலவுத் திட்டத்தை உருவாக்குதல்",
        "பேரிடர் மேலாண்மை மற்றும் மாநிலங்களுக்கு இடையிலான நதிநீர் விவகாரங்களை நெறிப்படுத்துதல்"
      ],
      limitations_of_authority_en: [
        "Cannot legislate on subjects exclusively reserved for the Union Parliament (Seventh Schedule, List I)",
        "Actions subject to Judicial Review by the High Court of Madras and Supreme Court of India",
        "All executive decisions must conform to Constitutional provisions and statutory laws"
      ],
      limitations_of_authority_ta: [
        "மத்தியப் பட்டியலின் கீழ் உள்ள தேசிய பாதுகாப்பு, வெளியுறவு போன்ற விவகாரங்களில் சட்டமியற்ற முடியாது",
        "அரசின் முடிவுகள் சென்னை உயர்நீதிமன்றம் மற்றும் உச்சநீதிமன்றத்தின் நீதித்துறை மறுஆய்வுக்கு உட்பட்டவை",
        "அனைத்து நிர்வாக முடிவுகளும் அரசியலமைப்புச் சட்ட விதிகளுக்கு உட்பட்டிருக்க வேண்டும்"
      ]
    },
    election_history: [
      { id: "el-st-2021", election_year: 2021, election_type: "TN Legislative Assembly", constituency_en: "Kolathur", constituency_ta: "கொளத்தூர்", party_name_en: "DMK", party_name_ta: "திமுக", votes_secured: 105522, vote_percentage: 60.86, margin: 70384, result: "Won", runner_up_name_en: "Aadi Rajaram", runner_up_party: "AIADMK", source_url: "https://www.eci.gov.in/" },
      { id: "el-st-2016", election_year: 2016, election_type: "TN Legislative Assembly", constituency_en: "Kolathur", constituency_ta: "கொளத்தூர்", party_name_en: "DMK", party_name_ta: "திமுக", votes_secured: 91303, vote_percentage: 54.3, margin: 37730, result: "Won", runner_up_name_en: "J. C. D. Prabhakar", runner_up_party: "AIADMK", source_url: "https://www.eci.gov.in/" },
      { id: "el-st-2011", election_year: 2011, election_type: "TN Legislative Assembly", constituency_en: "Kolathur", constituency_ta: "கொளத்தூர்", party_name_en: "DMK", party_name_ta: "திமுக", votes_secured: 68677, vote_percentage: 47.7, margin: 2734, result: "Won", runner_up_name_en: "Saidai Duraisamy", runner_up_party: "AIADMK", source_url: "https://www.eci.gov.in/" }
    ],
    party_history: [
      { id: "ph-st-1", party_name_en: "Dravida Munnetra Kazhagam", party_name_ta: "திமுக", party_abbr: "DMK", from_year: 1968, to_year: null, role_en: "President (2018–Present), Youth Wing Secretary (1982–2017)", role_ta: "தலைவர் (2018–தற்போது வரை), இளைஞரணிச் செயலாளர் (1982–2017)" }
    ],
    legislative_records: [
      { id: "leg-st-1", session_name_en: "16th Assembly - Budget Session 2024", session_name_ta: "16வது சட்டப்பேரவை - பட்ஜெட் கூட்டத்தொடர் 2024", category: "Bill", title_en: "Tamil Nadu Transparency in Public Tenders & Procurement Reforms", title_ta: "தமிழ்நாடு பொது ஒப்பந்தப்புள்ளி வெளிப்படைத்தன்மை சட்டத்திருத்தம்", date: "2024-02-21", status: "Passed", details_en: "Moved key administrative accountability legislation in the Tamil Nadu Legislative Assembly.", details_ta: "அரசு கொள்முதல் மற்றும் திட்டங்களில் வெளிப்படைத்தன்மையை உறுதி செய்வதற்கான சட்ட முன்வடிவு நிறைவேற்றப்பட்டது.", source_url: "https://tnla.neva.gov.in/" },
      { id: "leg-st-2", session_name_en: "Special Assembly Session 2023", session_name_ta: "சிறப்பு சட்டப்பேரவை கூட்டத்தொடர் 2023", category: "Public Project", title_en: "Kalaignar Magalir Urimai Thittam (Women's Rights Grant Scheme)", title_ta: "கலைஞர் மகளிர் உரிமைத் திட்டம் செயலாக்கம்", date: "2023-09-15", status: "Completed", details_en: "Direct benefit transfer scheme benefiting 1.15 crore eligible women heads of households in Tamil Nadu.", details_ta: "தகுதியான 1.15 கோடி மகளிருக்கு மாதம் ₹1,000 உரிமைத்தொகை வழங்கும் திட்டத்தின் தொடக்கம்.", source_url: "https://www.tn.gov.in/" }
    ],
    sources: [
      { id: "src-st-1", claim_or_field_en: "Electoral Victory 2021", claim_or_field_ta: "தேர்தல் வெற்றி 2021", source_name: "Election Commission of India Official Results Gazette", source_url: "https://www.eci.gov.in/", publication_date: "2021-05-03", last_verified: "2026-03-15", status: "verified" },
      { id: "src-st-2", claim_or_field_en: "Swearing-in as Chief Minister", claim_or_field_ta: "முதலமைச்சர் பதவியேற்பு ஆவணம்", source_name: "Government of Tamil Nadu Extraordinary Gazette No. 224", source_url: "https://www.tn.gov.in/", publication_date: "2021-05-07", last_verified: "2026-03-15", status: "verified" }
    ],
    verification_status: "verified",
    last_verified_at: "2026-04-01",
    created_at: "2026-01-01",
    updated_at: "2026-04-01"
  },
  {
    id: "edappadi-k-palaniswami",
    name_en: "Edappadi K. Palaniswami",
    name_ta: "எடப்பாடி கே. பழனிசாமி",
    slug: "edappadi-k-palaniswami",
    photo_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    type: "MLA",
    is_current: true,
    position_title_en: "Leader of the Opposition & MLA (Edappadi)",
    position_title_ta: "எதிர்க்கட்சித் தலைவர் & சட்டமன்ற உறுப்பினர் (எடப்பாடி)",
    party_id: "aiadmk",
    party_name_en: "All India Anna Dravida Munnetra Kazhagam",
    party_name_ta: "அனைத்திந்திய அண்ணா திராவிட முன்னேற்றக் கழகம்",
    party_abbr: "AIADMK",
    party_color: "#15803d",
    constituency_id: "ac-edappadi",
    constituency_name_en: "Edappadi",
    constituency_name_ta: "எடப்பாடி",
    district_id: "salem",
    district_name_en: "Salem",
    district_name_ta: "சேலம்",
    term_start: "2021-05-03",
    term_end: null,
    assembly_or_parliament_term: "16th Tamil Nadu Legislative Assembly",
    biography_en: "Edappadi K. Palaniswami is the General Secretary of AIADMK and Leader of the Opposition in the 16th Tamil Nadu Legislative Assembly. He served as the 7th Chief Minister of Tamil Nadu from 2017 to 2021 and has represented Edappadi constituency in 1989, 1991, 2011, 2016, and 2021.",
    biography_ta: "எடப்பாடி கே. பழனிசாமி அதிமுகவின் பொதுச்செயலாளரும், 16வது தமிழக சட்டப்பேரவையின் எதிர்க்கட்சித் தலைவருமாவார். 2017 முதல் 2021 வரை தமிழகத்தின் 7வது முதலமைச்சராகப் பணியாற்றிய இவர், 1989, 1991, 2011, 2016, மற்றும் 2021 ஆண்டுகளில் எடப்பாடி தொகுதியில் வென்றுள்ளார்.",
    birth_year: 1954,
    education_en: "B.Sc (Discontinued), Sri Vasavi College, Erode",
    education_ta: "பி.எஸ்சி, ஸ்ரீ வாசவி கல்லூரி, ஈரோடு",
    remuneration: REMUNERATION_RULES.mla_tn,
    powers_and_responsibilities: {
      role_description_en: "Leader of Opposition with Cabinet rank privileges; scrutinizes executive policies, represents the public in legislative oversight, and participates in statutory selection committees.",
      role_description_ta: "கேபினட் அந்தஸ்து பெற்ற எதிர்க்கட்சித் தலைவர்; அரசின் கொள்கைகளை மேற்பார்வையிடுதல், சட்டமன்ற விவாதங்களில் மக்கள் பிரச்னைகளை எழுப்புதல் மற்றும் சட்டரீதியான தேர்வுக் குழுக்களில் பங்கேற்றல்.",
      constitutional_articles: ["Tamil Nadu Payment of Salaries Act, 1951 (Section 12 - Leader of Opposition)", "Article 174 (Legislative Sessions)"],
      statutory_powers_en: [
        "Member of High-level Selection Committees (e.g., State Human Rights Commission, Lokayukta, State Information Commission)",
        "Right of precedence in Assembly debates to question treasury benches",
        "Official chamber and secretarial assistance in the Legislative Assembly Complex"
      ],
      statutory_powers_ta: [
        "மாநில மனித உரிமைகள் ஆணையம், லோக்ஆயுக்தா மற்றும் தகவல் அறியும் உரிமை ஆணைய தேர்வுக்குழுக்களில் உறுப்பினர்",
        "சட்டமன்ற விவாதங்களில் அரசின் கொள்கைகளை ஆய்வுக்குட்படுத்த முதன்மை உரிமை",
        "சட்டமன்ற வளாகத்தில் பிரத்யேக அலுவலகம் மற்றும் அரசு உதவியாளர்கள்"
      ],
      key_responsibilities_en: [
        "Constructive legislative oversight of public finances and executive actions",
        "Raising Calling Attention motions under Assembly Rule 55",
        "Representing grassroots issues of Edappadi constituency and Salem district"
      ],
      key_responsibilities_ta: [
        "அரசின் பொதுச் செலவினங்கள் மற்றும் திட்டங்களை விமர்சனபூர்வமாக கண்காணித்தல்",
        "சட்டமன்ற விதி 55ன் கீழ் கவன ஈர்ப்பு தீர்மானங்களை கொண்டு வருதல்",
        "எடப்பாடி தொகுதி மற்றும் சேலம் மாவட்ட மக்களின் தேவைகளுக்காக குரல் கொடுத்தல்"
      ],
      limitations_of_authority_en: [
        "Cannot issue executive orders or direct government administration independently",
        "Bound by Assembly decorum and rulings of the Hon'ble Speaker",
        "Legislative motions subject to majority vote of the House"
      ],
      limitations_of_authority_ta: [
        "நேரடியாக அரசு அதிகாரிகளுக்கு நிர்வாக உத்தரவுகளைப் பிறப்பிக்க முடியாது",
        "சட்டமன்ற மரபுகள் மற்றும் சபாநாயகரின் விதிகளுக்கு கட்டுப்பட்டவர்",
        "கொண்டுவரும் தீர்மானங்கள் அவையின் பெரும்பான்மை வாக்கெடுப்பிற்கு உட்பட்டவை"
      ]
    },
    election_history: [
      { id: "el-ekp-2021", election_year: 2021, election_type: "TN Legislative Assembly", constituency_en: "Edappadi", constituency_ta: "எடப்பாடி", party_name_en: "AIADMK", party_name_ta: "அதிமுக", votes_secured: 163743, vote_percentage: 65.97, margin: 93802, result: "Won", runner_up_name_en: "T. Sambathkumar", runner_up_party: "DMK", source_url: "https://www.eci.gov.in/" },
      { id: "el-ekp-2016", election_year: 2016, election_type: "TN Legislative Assembly", constituency_en: "Edappadi", constituency_ta: "எடப்பாடி", party_name_en: "AIADMK", party_name_ta: "அதிமுக", votes_secured: 98703, vote_percentage: 43.74, margin: 42022, result: "Won", runner_up_name_en: "N. Annadurai", runner_up_party: "PMK", source_url: "https://www.eci.gov.in/" }
    ],
    party_history: [
      { id: "ph-ekp-1", party_name_en: "All India Anna Dravida Munnetra Kazhagam", party_name_ta: "அதிமுக", party_abbr: "AIADMK", from_year: 1974, to_year: null, role_en: "General Secretary (2023–Present), Co-Coordinator (2017–2022)", role_ta: "பொதுச்செயலாளர் (2023–தற்போது வரை), இணை ஒருங்கிணைப்பாளர் (2017–2022)" }
    ],
    legislative_records: [
      { id: "leg-ekp-1", session_name_en: "16th Assembly - Monsoon Session 2023", session_name_ta: "16வது சட்டப்பேரவை - மழைக்கால கூட்டத்தொடர் 2023", category: "Debate", title_en: "Cauvery Water Sharing and Delta Farmers Welfare Debate", title_ta: "காவிரி நீர் பங்கீடு மற்றும் டெல்டா விவசாயிகள் நலன் குறித்த விவாதம்", date: "2023-10-09", status: "Completed", details_en: "Raised urgent debate on Karnataka's reservoir storage and water distress in Tamil Nadu.", details_ta: "காவிரி டெல்டா பாசனத்திற்கு உரிய நீரை பெறக்கோரி அவையில் சிறப்பு விவாதம் நடத்தப்பட்டது.", source_url: "https://tnla.neva.gov.in/" }
    ],
    sources: [
      { id: "src-ekp-1", claim_or_field_en: "Edappadi 2021 Election Result", claim_or_field_ta: "எடப்பாடி 2021 தேர்தல் வெற்றி", source_name: "Election Commission of India", source_url: "https://www.eci.gov.in/", publication_date: "2021-05-03", last_verified: "2026-03-15", status: "verified" }
    ],
    verification_status: "verified",
    last_verified_at: "2026-04-01",
    created_at: "2026-01-01",
    updated_at: "2026-04-01"
  },
  {
    id: "kanimozhi-karunanidhi",
    name_en: "Kanimozhi Karunanidhi",
    name_ta: "கனிமொழி கருணாநிதி",
    slug: "kanimozhi-karunanidhi",
    photo_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    type: "MP_LOK_SABHA",
    is_current: true,
    position_title_en: "Member of Parliament (Lok Sabha - Thoothukkudi)",
    position_title_ta: "நாடாளுமன்ற உறுப்பினர் (மக்களவை - தூத்துக்குடி)",
    party_id: "dmk",
    party_name_en: "Dravida Munnetra Kazhagam",
    party_name_ta: "திராவிட முன்னேற்றக் கழகம்",
    party_abbr: "DMK",
    party_color: "#dc2626",
    constituency_id: "pc-thoothukudi",
    constituency_name_en: "Thoothukkudi (Lok Sabha)",
    constituency_name_ta: "தூத்துக்குடி (மக்களவை)",
    district_id: "thoothukudi",
    district_name_en: "Thoothukudi",
    district_name_ta: "தூத்துக்குடி",
    term_start: "2024-06-04",
    term_end: null,
    assembly_or_parliament_term: "18th Lok Sabha",
    biography_en: "Kanimozhi Karunanidhi is an Indian politician, journalist, and poet who represents Thoothukkudi parliamentary constituency in the 18th Lok Sabha. She served as a Rajya Sabha MP from 2007 to 2019 and previously represented Thoothukkudi in the 17th Lok Sabha (2019-2024).",
    biography_ta: "கனிமொழி கருணாநிதி இந்திய அரசியல்வாதி, எழுத்தாளர் மற்றும் 18வது மக்களவையில் தூத்துக்குடி நாடாளுமன்றத் தொகுதியின் உறுப்பினராவார். 2007 முதல் 2019 வரை மாநிலங்களவை உறுப்பினராகவும், 17வது மக்களவையில் (2019-2024) தூத்துக்குடி நாடாளுமன்ற உறுப்பினராகவும் பணியாற்றியுள்ளார்.",
    birth_year: 1968,
    education_en: "M.A. Economics, Ethiraj College for Women, Chennai",
    education_ta: "எம்.ஏ. பொருளியல், எத்திராஜ் மகளிர் கல்லூரி, சென்னை",
    remuneration: REMUNERATION_RULES.mp_parliament,
    powers_and_responsibilities: {
      role_description_en: "Constitutional legislator in the Parliament of India (Lok Sabha); debates Union legislation, sanctions Union Budget appropriations, and oversees Central Ministries.",
      role_description_ta: "இந்திய நாடாளுமன்றத்தின் மக்களவை உறுப்பினர்; மத்திய சட்டங்களை உருவாக்குதல், ஒன்றிய பட்ஜெட்டை ஆய்வு செய்தல் மற்றும் அமைச்சகங்களை மேற்பார்வையிடுதல்.",
      constitutional_articles: ["Article 79 (Constitution of Parliament)", "Article 84 (Qualifications for MP)", "Article 105 (Powers & Privileges of MPs)"],
      statutory_powers_en: [
        "Voting power on Constitutional Amendment Bills and Union Legislation",
        "Recommending developmental works under MPLADS (₹5 Crore annually)",
        "Participating in Parliamentary Standing Committees and Consultative Committees"
      ],
      statutory_powers_ta: [
        "அரசியலமைப்பு சட்டத்திருத்த மசோதாக்கள் மற்றும் மத்திய சட்டங்கள் மீது வாக்களிக்கும் அதிகாரம்",
        "நாடாளுமன்ற உறுப்பினர் தொகுதி மேம்பாட்டு நிதி (MPLADS ₹5 கோடி) கீழ் வளர்ச்சிப் பணிகளைப் பரிந்துரைத்தல்",
        "நாடாளுமன்ற நிலைக்குழுக்கள் மற்றும் ஆலோசனைக் குழுக்களில் பங்கேற்று கொள்கைகளை மேற்பார்வையிடுதல்"
      ],
      key_responsibilities_en: [
        "Representing maritime infrastructure, VOC Port development, and pearl fishery communities of Thoothukkudi",
        "Raising national-level questions regarding industrial corridors and renewable energy investments in southern Tamil Nadu",
        "Monitoring Central Government schemes implementation via DISHA committee"
      ],
      key_responsibilities_ta: [
        "தூத்துக்குடி வ.உ.சி துறைமுகம், கடல்சார் வணிகம் மற்றும் மீனவ மக்களின் உரிமைகளுக்காக குரல் கொடுத்தல்",
        "தென் தமிழ்நாட்டின் தொழில் வளர்ச்சி மற்றும் பசுமை எரிசக்தி திட்டங்கள் குறித்து நாடாளுமன்றத்தில் கேள்விகள் எழுப்புதல்",
        "மத்திய அரசு திட்டங்களை கண்காணிக்க மாவட்ட 'திஷா' (DISHA) குழுவிற்கு தலைமை தாங்குதல்"
      ],
      limitations_of_authority_en: [
        "Cannot legislate on exclusive State subjects (e.g., local state police or state municipal taxes)",
        "MPLADS works are executed by District Collector; MPs cannot issue direct contractor work orders",
        "Privileges inside Parliament do not grant immunity against regular criminal laws"
      ],
      limitations_of_authority_ta: [
        "மாநில காவல் துறை அல்லது உள்ளாட்சி வரிகள் போன்ற மாநிலப் பட்டியல் விவகாரங்களில் தன்னிச்சையாக செயல்பட முடியாது",
        "MPLADS நிதி திட்டங்களை மாவட்ட ஆட்சியர் மட்டுமே செயல்படுத்துவார்; MP நேரடியாக ஒப்பந்ததாரர்களுக்கு பணி ஆணை வழங்க முடியாது",
        "நாடாளுமன்ற சலுகைகள் குற்றவியல் சட்டங்களிலிருந்து விலக்கு அளிக்காது"
      ]
    },
    election_history: [
      { id: "el-kk-2024", election_year: 2024, election_type: "Lok Sabha", constituency_en: "Thoothukkudi", constituency_ta: "தூத்துக்குடி", party_name_en: "DMK", party_name_ta: "திமுக", votes_secured: 540729, vote_percentage: 55.26, margin: 392738, result: "Won", runner_up_name_en: "R. Sivasami Velumani", runner_up_party: "AIADMK", source_url: "https://www.eci.gov.in/" },
      { id: "el-kk-2019", election_year: 2019, election_type: "Lok Sabha", constituency_en: "Thoothukkudi", constituency_ta: "தூத்துக்குடி", party_name_en: "DMK", party_name_ta: "திமுக", votes_secured: 563143, vote_percentage: 56.77, margin: 347209, result: "Won", runner_up_name_en: "Tamilisai Soundararajan", runner_up_party: "BJP", source_url: "https://www.eci.gov.in/" }
    ],
    party_history: [
      { id: "ph-kk-1", party_name_en: "Dravida Munnetra Kazhagam", party_name_ta: "திமுக", party_abbr: "DMK", from_year: 2007, to_year: null, role_en: "Deputy General Secretary (2022–Present), Women's Wing Secretary", role_ta: "துணைப் பொதுச்செயலாளர் (2022–தற்போது வரை), மகளிர் அணி செயலாளர்" }
    ],
    legislative_records: [
      { id: "leg-kk-1", session_name_en: "17th Lok Sabha - Winter Session 2023", session_name_ta: "17வது மக்களவை - குளிர்கால கூட்டத்தொடர் 2023", category: "Question", title_en: "Starred Question on Cyclone Michaung & Southern District Flood Relief Grants", title_ta: "மிக்ஜாம் புயல் & தென் மாவட்ட வெள்ள நிவாரண நிதி குறித்த கேள்வி", date: "2023-12-18", status: "Answered", details_en: "Sought release of National Disaster Response Fund (NDRF) grants for Thoothukudi and Tirunelveli flood damages.", details_ta: "தூத்துக்குடி வெள்ள சேதங்களுக்கான தேசிய பேரிடர் நிவாரண நிதி குறித்து மத்திய உள்துறை அமைச்சகத்திடம் விளக்கம் கோரப்பட்டது.", source_url: "https://sansad.in/" }
    ],
    sources: [
      { id: "src-kk-1", claim_or_field_en: "2024 Lok Sabha Parliamentary Election", claim_or_field_ta: "2024 மக்களவை தேர்தல் வெற்றி", source_name: "Election Commission of India Results Portal", source_url: "https://www.eci.gov.in/", publication_date: "2024-06-04", last_verified: "2026-03-15", status: "verified" },
      { id: "src-kk-2", claim_or_field_en: "Digital Sansad Member Record", claim_or_field_ta: "டிஜிட்டல் சன்சத் உறுப்பினர் விவரம்", source_name: "Lok Sabha Secretariat", source_url: "https://sansad.in/", publication_date: "2024-06-24", last_verified: "2026-03-15", status: "verified" }
    ],
    verification_status: "verified",
    last_verified_at: "2026-04-01",
    created_at: "2026-01-01",
    updated_at: "2026-04-01"
  },
  {
    id: "thol-thirumavalavan",
    name_en: "Thol. Thirumavalavan",
    name_ta: "தொல். திருமாவளவன்",
    slug: "thol-thirumavalavan",
    photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    type: "MP_LOK_SABHA",
    is_current: true,
    position_title_en: "Member of Parliament (Lok Sabha - Chidambaram SC)",
    position_title_ta: "நாடாளுமன்ற உறுப்பினர் (மக்களவை - சிதம்பரம் தனி)",
    party_id: "vck",
    party_name_en: "Viduthalai Chiruthaigal Katchi",
    party_name_ta: "விடுதலைச் சிறுத்தைகள் கட்சி",
    party_abbr: "VCK",
    party_color: "#059669",
    constituency_id: "pc-chidambaram",
    constituency_name_en: "Chidambaram (SC) (Lok Sabha)",
    constituency_name_ta: "சிதம்பரம் (தனி) (மக்களவை)",
    district_id: "cuddalore",
    district_name_en: "Cuddalore",
    district_name_ta: "கடலூர்",
    term_start: "2024-06-04",
    term_end: null,
    assembly_or_parliament_term: "18th Lok Sabha",
    biography_en: "Thol. Thirumavalavan is an Indian politician, scholar, and President of Viduthalai Chiruthaigal Katchi (VCK). He represents Chidambaram in the 18th Lok Sabha, having also won in 2009 and 2019, and formerly served as MLA for Mangalur (2001-2004).",
    biography_ta: "தொல். திருமாவளவன் இந்திய அரசியல் தலைவர், சமூக ஆய்வாளர் மற்றும் விடுதலைச் சிறுத்தைகள் கட்சியின் தலைவர். 2009, 2019 மற்றும் 2024 ஆம் ஆண்டுகளில் சிதம்பரம் மக்களவைத் தொகுதியிலிருந்து வென்றவர். முன்னதாக மங்களூர் சட்டமன்ற உறுப்பினராகவும் (2001-2004) பணியாற்றியுள்ளார்.",
    birth_year: 1962,
    education_en: "Ph.D in Criminology, Manonmaniam Sundaranar University; B.L., Law College Chennai",
    education_ta: "முனைவர் பட்டம் (குற்றவியல்), மனோன்மணீயம் சுந்தரனார் பல்கலைக்கழகம்; பி.எல். சட்டப்படிப்பு, சென்னை",
    remuneration: REMUNERATION_RULES.mp_parliament,
    powers_and_responsibilities: {
      role_description_en: "Parliamentarian representing Chidambaram constituency; participates in legislative committees advocating constitutional equity, civil rights, and social justice.",
      role_description_ta: "சிதம்பரம் நாடாளுமன்ற உறுப்பினர்; அரசியலமைப்பு சமூக நீதி, மனித உரிமைகள் மற்றும் கிராமப்புற மக்கள் உரிமைக்கான சட்ட விவாதங்களில் பங்கேற்கிறார்.",
      constitutional_articles: ["Article 330 (Reservation of seats for SCs in Lok Sabha)", "Article 15 (Prohibition of discrimination)"],
      statutory_powers_en: [
        "MPLADS project approvals and district development monitoring",
        "Parliamentary standing committee oversight on Social Justice and Empowerment",
        "Raising special mentions on constitutional reservation matters"
      ],
      statutory_powers_ta: [
        "சிதம்பரம் தொகுதியில் MPLADS திட்டங்களை பரிந்துரைத்தல்",
        "சமூக நீதி மற்றும் அதிகாரமளித்தல் நாடாளுமன்ற நிலைக்குழு செயல்பாடுகள்",
        "அரசியலமைப்பு இடஒதுக்கீடு மற்றும் விளிம்புநிலை மக்கள் பாதுகாப்பு குறித்து அவையில் பேசுதல்"
      ],
      key_responsibilities_en: [
        "Agrarian welfare in delta regions of Cuddalore and Ariyalur",
        "Protecting rights of unorganized laborers and marginalized communities"
      ],
      key_responsibilities_ta: [
        "கடலூர் மற்றும் அரியலூர் டெல்டா விவசாயத் தொழிலாளர்களின் நலன்களைப் பாதுகாத்தல்",
        "அமைப்புசாரா தொழிலாளர்கள் மற்றும் விளிம்புநிலை மக்களின் சமூக உரிமைகளை உறுதி செய்தல்"
      ],
      limitations_of_authority_en: [
        "Cannot independently amend state welfare lists without legislative consensus",
        "Funds restricted strictly to approved Central Government MPLADS guidelines"
      ],
      limitations_of_authority_ta: [
        "மாநில நலத்திட்ட விதிகளை தன்னிச்சையாக மாற்றியமைக்க முடியாது",
        "வளர்ச்சி நிதியை மத்திய அரசின் வழிகாட்டுதல் விதிகளின்படி மட்டுமே செலவிட முடியும்"
      ]
    },
    election_history: [
      { id: "el-tt-2024", election_year: 2024, election_type: "Lok Sabha", constituency_en: "Chidambaram", constituency_ta: "சிதம்பரம்", party_name_en: "VCK", party_name_ta: "விசிக", votes_secured: 505084, vote_percentage: 43.28, margin: 103554, result: "Won", runner_up_name_en: "M. Chandrahasan", runner_up_party: "AIADMK", source_url: "https://www.eci.gov.in/" },
      { id: "el-tt-2019", election_year: 2019, election_type: "Lok Sabha", constituency_en: "Chidambaram", constituency_ta: "சிதம்பரம்", party_name_en: "VCK", party_name_ta: "விசிக", votes_secured: 500229, vote_percentage: 43.38, margin: 3219, result: "Won", runner_up_name_en: "P. Chandrasekar", runner_up_party: "AIADMK", source_url: "https://www.eci.gov.in/" }
    ],
    party_history: [
      { id: "ph-tt-1", party_name_en: "Viduthalai Chiruthaigal Katchi", party_name_ta: "விசிக", party_abbr: "VCK", from_year: 1989, to_year: null, role_en: "President & Founder", role_ta: "கட்சித் தலைவர் & நிறுவன தலைவர்" }
    ],
    legislative_records: [
      { id: "leg-tt-1", session_name_en: "17th Lok Sabha - Monsoon Session 2023", session_name_ta: "17வது மக்களவை - மழைக்கால கூட்டத்தொடர்", category: "Bill", title_en: "Private Member Resolution on Federal Autonomy & State Rights", title_ta: "மாநில சுயாட்சி மற்றும் கூட்டாட்சி தத்துவம் குறித்த தனிநபர் தீர்மானம்", date: "2023-08-04", status: "Under Review", details_en: "Proposed constitutional amendments strengthening federal powers and governor neutrality.", details_ta: "மாநிலங்களின் உரிமைகளை பாதுகாக்கவும் ஆளுநர் அதிகார வரம்புகளை முறைப்படுத்தவும் நாடாளுமன்றத்தில் வலியுறுத்தினார்.", source_url: "https://sansad.in/" }
    ],
    sources: [
      { id: "src-tt-1", claim_or_field_en: "2024 Election Win", claim_or_field_ta: "2024 தேர்தல் வெற்றி", source_name: "Election Commission of India", source_url: "https://www.eci.gov.in/", publication_date: "2024-06-04", last_verified: "2026-03-15", status: "verified" }
    ],
    verification_status: "verified",
    last_verified_at: "2026-04-01",
    created_at: "2026-01-01",
    updated_at: "2026-04-01"
  },
  {
    id: "udhayanidhi-stalin",
    name_en: "Udhayanidhi Stalin",
    name_ta: "உதயநிதி ஸ்டாலின்",
    slug: "udhayanidhi-stalin",
    photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    type: "MINISTER",
    is_current: true,
    position_title_en: "Deputy Chief Minister & Minister for Youth Welfare and Sports Development",
    position_title_ta: "துணை முதலமைச்சர் & இளைஞர் நலன் மற்றும் விளையாட்டு மேம்பாட்டுத்துறை அமைச்சர்",
    portfolio_en: "Youth Welfare, Sports Development, Special Programme Implementation, Planning and Development, Poverty Alleviation",
    portfolio_ta: "இளைஞர் நலன், விளையாட்டு மேம்பாடு, சிறப்புத் திட்ட செயலாக்கம், திட்டம் மற்றும் வளர்ச்சி, வறுமை ஒழிப்பு",
    party_id: "dmk",
    party_name_en: "Dravida Munnetra Kazhagam",
    party_name_ta: "திராவிட முன்னேற்றக் கழகம்",
    party_abbr: "DMK",
    party_color: "#dc2626",
    constituency_id: "ac-chepauk",
    constituency_name_en: "Chepauk-Thiruvallikeni",
    constituency_name_ta: "சேப்பாக்கம் - திருவல்லிக்கேணி",
    district_id: "chennai",
    district_name_en: "Chennai",
    district_name_ta: "சென்னை",
    term_start: "2021-05-03",
    term_end: null,
    assembly_or_parliament_term: "16th Tamil Nadu Legislative Assembly",
    biography_en: "Udhayanidhi Stalin is the Deputy Chief Minister of Tamil Nadu and represents the Chepauk-Thiruvallikeni constituency. He was sworn in as Minister in December 2022 and designated as Deputy Chief Minister in September 2024.",
    biography_ta: "உதயநிதி ஸ்டாலின் தமிழக துணை முதலமைச்சராகவும், சேப்பாக்கம்-திருவல்லிக்கேணி சட்டமன்ற உறுப்பினராகவும் பொறுப்பு வகிக்கிறார். டிசம்பர் 2022 இல் அமைச்சராகப் பொறுப்பேற்ற இவர், செப்டம்பர் 2024 இல் துணை முதலமைச்சராக நியமிக்கப்பட்டார்.",
    birth_year: 1977,
    education_en: "B.Com, Loyola College, Chennai",
    education_ta: "பி.காம், லயோலா கல்லூரி, சென்னை",
    remuneration: REMUNERATION_RULES.minister_tn,
    powers_and_responsibilities: {
      role_description_en: "Deputy Chief Minister & Cabinet Minister overseeing Youth Welfare, Khelo India games infrastructure, and flagship scheme implementation across departments.",
      role_description_ta: "துணை முதலமைச்சர் & அமைச்சர்; இளைஞர் நலன், சர்வதேச விளையாட்டு கட்டமைப்பு மற்றும் அரசு சிறப்புத் திட்ட செயலாக்கத்தை ஒருங்கிணைக்கிறார்.",
      constitutional_articles: ["Article 164 (Council of Ministers)"],
      statutory_powers_en: [
        "Cabinet decisions on sports stadiums, Olympic academy setups, and grassroots coaching infrastructure",
        "Inter-departmental reviews of government flagship schemes (Special Programme Implementation)",
        "Legislative representation for Chepauk-Thiruvallikeni"
      ],
      statutory_powers_ta: [
        "விளையாட்டு அரங்கங்கள் மற்றும் ஒலிம்பிக் பயிற்சி மையங்களை அமைப்பதற்கான அமைச்சரவை முடிவுகள்",
        "அரசின் முக்கிய நலத்திட்டங்களை அனைத்துத் துறைகளிலும் நேரில் சென்று ஆய்வு செய்தல்",
        "சேப்பாக்கம்-திருவல்லிக்கேணி தொகுதி வளர்ச்சிப் பணிகளை முன்னெடுத்தல்"
      ],
      key_responsibilities_en: [
        "Overseeing implementation of Chief Minister's Breakfast Scheme in government schools",
        "Kalaignar Sports Kit distribution and Chief Minister Trophy tournaments"
      ],
      key_responsibilities_ta: [
        "அரசுப் பள்ளி மாணவர்களுக்கான முதலமைச்சரின் காலை உணவுத் திட்டத்தை மேற்பார்வையிடுதல்",
        "முதலமைச்சர் கோப்பை விளையாட்டுப் போட்டிகள் மற்றும் கிராமப்புற விளையாட்டு உபகரணங்கள் வழங்குதல்"
      ],
      limitations_of_authority_en: [
        "Financial allocations subject to Finance Department concurrence and State Legislature budget grants",
        "Statutory powers determined by Chief Minister under the Rules of Executive Business"
      ],
      limitations_of_authority_ta: [
        "நிதி ஒதுக்கீடுகள் அனைத்தும் நிதித்துறையின் அனுமதி மற்றும் சட்டமன்றத்தின் ஒப்புதலுக்கு உட்பட்டவை",
        "அமைச்சரவை நிர்வாக விதிகளின்படி முதலமைச்சரின் வழிகாட்டுதலுக்கு உட்பட்டவர்"
      ]
    },
    election_history: [
      { id: "el-us-2021", election_year: 2021, election_type: "TN Legislative Assembly", constituency_en: "Chepauk-Thiruvallikeni", constituency_ta: "சேப்பாக்கம் - திருவல்லிக்கேணி", party_name_en: "DMK", party_name_ta: "திமுக", votes_secured: 93285, vote_percentage: 67.89, margin: 69355, result: "Won", runner_up_name_en: "Avaida Kassim", runner_up_party: "PMK", source_url: "https://www.eci.gov.in/" }
    ],
    party_history: [
      { id: "ph-us-1", party_name_en: "Dravida Munnetra Kazhagam", party_name_ta: "திமுக", party_abbr: "DMK", from_year: 2019, to_year: null, role_en: "Youth Wing Secretary", role_ta: "இளைஞரணிச் செயலாளர்" }
    ],
    legislative_records: [
      { id: "leg-us-1", session_name_en: "16th Assembly - Demand for Grants 2024", session_name_ta: "16வது சட்டப்பேரவை - மானியக் கோரிக்கை 2024", category: "Bill", title_en: "Tamil Nadu Sports Development Policy & Stadium Infrastructure Bill", title_ta: "தமிழ்நாடு விளையாட்டு மேம்பாட்டுக் கொள்கை மற்றும் உள்கட்டமைப்பு அறிவிப்புகள்", date: "2024-03-05", status: "Passed", details_en: "Sanctioned mini stadiums in all 234 assembly constituencies in Tamil Nadu.", details_ta: "தமிழகத்தின் அனைத்து 234 சட்டமன்ற தொகுதிகளிலும் மினி விளையாட்டு அரங்கம் அமைக்கும் திட்டம் அறிவிக்கப்பட்டது.", source_url: "https://tnla.neva.gov.in/" }
    ],
    sources: [
      { id: "src-us-1", claim_or_field_en: "Chepauk Election Result 2021", claim_or_field_ta: "சேப்பாக்கம் 2021 தேர்தல் வெற்றி", source_name: "Election Commission of India", source_url: "https://www.eci.gov.in/", publication_date: "2021-05-03", last_verified: "2026-03-15", status: "verified" },
      { id: "src-us-2", claim_or_field_en: "Deputy Chief Minister Designation Gazette", claim_or_field_ta: "துணை முதலமைச்சர் நியமன அரசிதழ்", source_name: "Government of Tamil Nadu Gazette Notification", source_url: "https://www.tn.gov.in/", publication_date: "2024-09-29", last_verified: "2026-03-15", status: "verified" }
    ],
    verification_status: "verified",
    last_verified_at: "2026-04-01",
    created_at: "2026-01-01",
    updated_at: "2026-04-01"
  },
  {
    id: "vanathi-srinivasan",
    name_en: "Vanathi Srinivasan",
    name_ta: "வானதி சீனிவாசன்",
    slug: "vanathi-srinivasan",
    photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    type: "MLA",
    is_current: true,
    position_title_en: "MLA (Coimbatore South)",
    position_title_ta: "சட்டமன்ற உறுப்பினர் (கோயம்புத்தூர் தெற்கு)",
    party_id: "bjp",
    party_name_en: "Bharatiya Janata Party",
    party_name_ta: "பாரதிய ஜனதா கட்சி",
    party_abbr: "BJP",
    party_color: "#ea580c",
    constituency_id: "ac-coimbatore-south",
    constituency_name_en: "Coimbatore South",
    constituency_name_ta: "கோயம்புத்தூர் தெற்கு",
    district_id: "coimbatore",
    district_name_en: "Coimbatore",
    district_name_ta: "கோயம்புத்தூர்",
    term_start: "2021-05-03",
    term_end: null,
    assembly_or_parliament_term: "16th Tamil Nadu Legislative Assembly",
    biography_en: "Vanathi Srinivasan is a lawyer and politician serving as the National President of BJP Mahila Morcha and MLA for Coimbatore South constituency since 2021.",
    biography_ta: "வானதி சீனிவாசன் வழக்கறிஞர் மற்றும் பாஜக மகளிர் அணியின் தேசியத் தலைவராவார். 2021 முதல் கோயம்புத்தூர் தெற்கு சட்டமன்ற உறுப்பினராகப் பணியாற்றி வருகிறார்.",
    birth_year: 1970,
    education_en: "B.L. & M.L. International Law, Dr. Ambedkar Government Law College, Chennai",
    education_ta: "பி.எல். மற்றும் எம்.எல். (சர்வதேச சட்டம்), டாக்டர் அம்பேத்கர் அரசு சட்டக் கல்லூரி, சென்னை",
    remuneration: REMUNERATION_RULES.mla_tn,
    powers_and_responsibilities: {
      role_description_en: "State Legislative Member representing Coimbatore South; presents constituency requirements and petitions the state assembly regarding MSME industrial policies.",
      role_description_ta: "கோயம்புத்தூர் தெற்கு சட்டமன்ற உறுப்பினர்; குறு, சிறு மற்றும் நடுத்தர தொழில் துறை (MSME) பிரச்னைகள் மற்றும் மக்கள் கோரிக்கைகளை அவையில் முன்வைக்கிறார்.",
      constitutional_articles: ["Article 194 (Powers, Privileges and Immunities of State Legislatures)"],
      statutory_powers_en: [
        "Sanctioning constituency works under MLACDS (₹3 Crore per year)",
        "Raising Zero Hour mentions and Calling Attention motions in Assembly",
        "Participating in Assembly Subject Committee hearings"
      ],
      statutory_powers_ta: [
        "தொகுதி மேம்பாட்டு நிதி (₹3 கோடி) மூலம் உள்கட்டமைப்பு பணிகளைப் பரிந்துரைத்தல்",
        "சட்டமன்ற பூஜ்ய நேர விவாதங்களில் உள்ளூர் பிரச்னைகளை முன்வைத்தல்",
        "சட்டமன்றக் குழுக்களில் பங்கேற்று மசோதாக்களை ஆய்வு செய்தல்"
      ],
      key_responsibilities_en: [
        "Representing textile, foundry, and engineering MSME industrial clusters in Coimbatore",
        "Public infrastructure, water supply, and smart city civic facilities in Coimbatore South"
      ],
      key_responsibilities_ta: [
        "கோவையின் விசைத்தறி, பவுண்டரி மற்றும் பொறியியல் தொழில் நிறுவனங்களின் நலன்களைக் காத்தல்",
        "தொகுதி மக்களின் குடிநீர் விநியோகம் மற்றும் நகர்ப்புற உள்கட்டமைப்புத் தேவைகளைத் தீர்த்தல்"
      ],
      limitations_of_authority_en: [
        "Executive sanctions require state departmental administrative approvals",
        "Cannot enact municipal bylaws without Municipal Corporation council resolutions"
      ],
      limitations_of_authority_ta: [
        "திட்டங்களை நடைமுறைப்படுத்த மாநில அரசுத்துறைகளின் அனுமதி தேவை",
        "மாநகராட்சி விதிகளில் மாநகராட்சி மன்ற தீர்மானம் இன்றி தன்னிச்சையாக மாற்றங்களைச் செய்ய முடியாது"
      ]
    },
    election_history: [
      { id: "el-vs-2021", election_year: 2021, election_type: "TN Legislative Assembly", constituency_en: "Coimbatore South", constituency_ta: "கோயம்புத்தூர் தெற்கு", party_name_en: "BJP", party_name_ta: "பாஜக", votes_secured: 53209, vote_percentage: 33.18, margin: 1728, result: "Won", runner_up_name_en: "Kamal Haasan", runner_up_party: "MNM", source_url: "https://www.eci.gov.in/" }
    ],
    party_history: [
      { id: "ph-vs-1", party_name_en: "Bharatiya Janata Party", party_name_ta: "பாஜக", party_abbr: "BJP", from_year: 1993, to_year: null, role_en: "National President - BJP Mahila Morcha (2020–Present)", role_ta: "தேசிய தலைவர் - பாஜக மகளிர் அணி" }
    ],
    legislative_records: [
      { id: "leg-vs-1", session_name_en: "16th Assembly - Demand on Industries 2023", session_name_ta: "16வது சட்டப்பேரவை - தொழில் துறை மானியக் கோரிக்கை 2023", category: "Question", title_en: "Electricity Tariffs and Fixed Charges for MSMEs in Western Tamil Nadu", title_ta: "கொங்கு மண்டல குறுந்தொழில்களுக்கான மின்கட்டண உயர்வு குறித்த விவாதம்", date: "2023-04-12", status: "Answered", details_en: "Petitioned the Minister for Electricity regarding peak-hour tariff relief for small workshops.", details_ta: "சிறு பட்டறைகளுக்கான உச்சநேர மின்கட்டண சுமையை குறைக்க அவையில் கோரிக்கை விடுக்கப்பட்டது.", source_url: "https://tnla.neva.gov.in/" }
    ],
    sources: [
      { id: "src-vs-1", claim_or_field_en: "2021 Coimbatore South Result", claim_or_field_ta: "2021 தேர்தல் முடிவு", source_name: "Election Commission of India", source_url: "https://www.eci.gov.in/", publication_date: "2021-05-03", last_verified: "2026-03-15", status: "verified" }
    ],
    verification_status: "verified",
    last_verified_at: "2026-04-01",
    created_at: "2026-01-01",
    updated_at: "2026-04-01"
  },
  {
    id: "cn-annadurai-historical",
    name_en: "C. N. Annadurai (Arignar Anna)",
    name_ta: "பேரறிஞர் சி. என். அண்ணாதுரை",
    slug: "cn-annadurai",
    photo_url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&auto=format&fit=crop&q=80",
    type: "HISTORICAL",
    is_current: false,
    position_title_en: "1st Chief Minister of Tamil Nadu (Historical)",
    position_title_ta: "தமிழ்நாட்டின் முதல் முதலமைச்சர் (வரலாற்று பதிவு)",
    party_id: "dmk",
    party_name_en: "Dravida Munnetra Kazhagam",
    party_name_ta: "திராவிட முன்னேற்றக் கழகம்",
    party_abbr: "DMK",
    party_color: "#dc2626",
    term_start: "1967-03-06",
    term_end: "1969-02-03",
    assembly_or_parliament_term: "4th Madras Legislative Assembly",
    biography_en: "C. N. Annadurai, reverently called 'Perarignar Anna', was the founder of the DMK and the first Chief Minister of renamed Tamil Nadu (1967-1969). Under his visionary leadership, Madras State was officially renamed Tamil Nadu in 1969, Self-Respect Marriages (சுயமரியாதைத் திருமணம்) were legally recognized, and the Two-Language Formula (Tamil and English) was enacted.",
    biography_ta: "பேரறிஞர் அண்ணா என்று போற்றப்படும் சி. என். அண்ணாதுரை திமுகவின் நிறுவனரும், பெயர் மாற்றப்பட்ட தமிழ்நாட்டின் முதல் முதலமைச்சருமாவார் (1967-1969). இவரது தலைமையின் கீழ் மெட்ராஸ் மாகாணம் 1969ல் 'தமிழ்நாடு' என பெயர் மாற்றப்பட்டது, சுயமரியாதைத் திருமணங்கள் சட்டப்பூர்வமாக்கப்பட்டன, மற்றும் இருமொழிக் கொள்கை நிறைவேற்றப்பட்டது.",
    birth_year: 1909,
    education_en: "M.A. Economics & Politics, Pachaiyappa's College, Madras",
    education_ta: "எம்.ஏ. பொருளியல் மற்றும் அரசியல், பச்சையப்பன் கல்லூரி, சென்னை",
    remuneration: {
      ...REMUNERATION_RULES.cm_tn,
      basic_salary: 1000,
      total_monthly_emoluments: 1500,
      act_or_rule_en: "Madras Payment of Salaries Act, 1951 (Historical Rate)",
      act_or_rule_ta: "மெட்ராஸ் சம்பளச் சட்டம் 1951 (வரலாற்று விகிதம்)",
      effective_date: "1967-03-06",
      source_name: "Tamil Nadu Legislative Assembly Historical Records",
      source_url: "https://tnla.neva.gov.in/"
    },
    powers_and_responsibilities: {
      role_description_en: "First Chief Minister of the State of Tamil Nadu; led the historic political transition of 1967.",
      role_description_ta: "தமிழ்நாடு என பெயர் மாற்றப்பட்ட மாநிலத்தின் முதல் முதலமைச்சர்; 1967 வரலாற்று சிறப்புமிக்க ஆட்சி மாற்றத்தை வழிநடத்தினார்.",
      constitutional_articles: ["Madras State (Alteration of Name) Act, 1968"],
      statutory_powers_en: [
        "Head of Council of Ministers of Madras State/Tamil Nadu",
        "Passed landmark Hindu Marriage (Tamil Nadu Amendment) Act, 1967 validating Self-Respect marriages"
      ],
      statutory_powers_ta: [
        "தமிழ்நாடு அமைச்சரவையின் தலைவர்",
        "சுயமரியாதைத் திருமணங்களை அங்கீகரிக்கும் வரலாற்று சிறப்புமிக்க சட்ட முன்வடிவை நிறைவேற்றினார்"
      ],
      key_responsibilities_en: [
        "Enactment of the Two-Language Formula in Tamil Nadu",
        "Implementation of 1 Rupee per measure rice subsidy scheme for public welfare"
      ],
      key_responsibilities_ta: [
        "தமிழ்நாட்டில் தமிழ் மற்றும் ஆங்கிலம் ஆகிய இருமொழிக் கொள்கையை சட்டரீதியாக நடைமுறைப்படுத்துதல்",
        "படி அரிசி திட்டம் மூலம் ஏழை எளிய மக்களின் உணவு பாதுகாப்பை உறுதி செய்தல்"
      ],
      limitations_of_authority_en: [
        "State legislative powers subject to Union assent on constitutional name changes"
      ],
      limitations_of_authority_ta: [
        "மாநில எல்லைகள் மற்றும் பெயர் மாற்ற விவகாரங்களில் நாடாளுமன்ற ஒப்புதல் தேவைப்பட்டது"
      ]
    },
    election_history: [
      { id: "el-anna-1967", election_year: 1967, election_type: "Lok Sabha", constituency_en: "South Madras", constituency_ta: "தென் சென்னை", party_name_en: "DMK", party_name_ta: "திமுக", votes_secured: 254247, vote_percentage: 57.5, margin: 81978, result: "Won", runner_up_name_en: "K. R. Ramasamy", runner_up_party: "INC", source_url: "https://www.eci.gov.in/" }
    ],
    party_history: [
      { id: "ph-anna-1", party_name_en: "Dravida Munnetra Kazhagam", party_name_ta: "திமுக", party_abbr: "DMK", from_year: 1949, to_year: 1969, role_en: "General Secretary & Founder", role_ta: "நிறுவன பொதுச்செயலாளர்" }
    ],
    legislative_records: [
      { id: "leg-anna-1", session_name_en: "Legislative Assembly Session 1967", session_name_ta: "சட்டமன்ற கூட்டத்தொடர் 1967", category: "Bill", title_en: "Resolution on Renaming Madras State as Tamil Nadu", title_ta: "மெட்ராஸ் மாகாணத்தை 'தமிழ்நாடு' என பெயர் மாற்றும் சட்டமன்றத் தீர்மானம்", date: "1967-07-18", status: "Passed", details_en: "Unanimous historic resolution passed in the Assembly that was later affirmed by the Parliament of India.", details_ta: "மெட்ராஸ் மாகாணத்தை 'தமிழ்நாடு' என்று பெயர் மாற்றும் வரலாற்றுச் சிறப்புமிக்க தீர்மானம் சட்டமன்றத்தில் ஒருமனதாக நிறைவேறியது.", source_url: "https://tnla.neva.gov.in/" }
    ],
    sources: [
      { id: "src-anna-1", claim_or_field_en: "Renaming of Tamil Nadu Gazette", claim_or_field_ta: "தமிழ்நாடு பெயர் மாற்ற ஆவணம்", source_name: "Government of India Extraordinary Gazette 1968", source_url: "https://www.tn.gov.in/", publication_date: "1969-01-14", last_verified: "2026-03-15", status: "verified" }
    ],
    verification_status: "verified",
    last_verified_at: "2026-04-01",
    created_at: "2026-01-01",
    updated_at: "2026-04-01"
  },
  {
    id: "k-kamaraj-historical",
    name_en: "K. Kamaraj (Karma Veerar)",
    name_ta: "க. காமராஜர் (கர்மவீரர்)",
    slug: "k-kamaraj",
    photo_url: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80",
    type: "HISTORICAL",
    is_current: false,
    position_title_en: "3rd Chief Minister of Madras State (Historical)",
    position_title_ta: "மெட்ராஸ் மாகாணத்தின் 3வது முதலமைச்சர் (வரலாற்று பதிவு)",
    party_id: "inc",
    party_name_en: "Indian National Congress",
    party_name_ta: "இந்திய தேசிய காங்கிரஸ்",
    party_abbr: "INC",
    party_color: "#0284c7",
    term_start: "1954-04-13",
    term_end: "1963-10-02",
    assembly_or_parliament_term: "1st, 2nd, and 3rd Madras Legislative Assemblies",
    biography_en: "Kumaraswami Kamaraj, known as 'Karma Veerar' and 'Kingmaker', was Chief Minister of Madras State for nine years (1954-1963). He revolutionized education in Tamil Nadu by pioneering the Free Midday Meal Scheme for school children, constructing thousands of primary schools, major dams (Bhavanisagar, Vaigai, Mettur canals), and foundational industrial infrastructure (BHEL, Neyveli Lignite, Integral Coach Factory).",
    biography_ta: "கர்மவீரர் காமராஜர் 1954 முதல் 1963 வரை 9 ஆண்டுகள் மெட்ராஸ் மாகாணத்தின் முதலமைச்சராகப் பொற்கால ஆட்சி புரிந்தார். பள்ளிக் குழந்தைகளுக்கு இலவச மதிய உணவுத் திட்டத்தை முதன்முதலில் அறிமுகப்படுத்தி கல்விப் புரட்சி செய்தார். பவானிசாகர், வைகை உள்ளிட்ட பல அணைகளையும், நெய்வேலி, பெல், ஐசிஎஃப் போன்ற மாபெரும் தொழிற்சாலைகளையும் உருவாக்கினார்.",
    birth_year: 1903,
    education_en: "Kshatriya Vidyasala, Virudhunagar",
    education_ta: "சத்திரிய வித்யாசாலா, விருதுநகர்",
    remuneration: {
      ...REMUNERATION_RULES.cm_tn,
      basic_salary: 1000,
      total_monthly_emoluments: 1200,
      act_or_rule_en: "Madras Payment of Salaries Act, 1951",
      act_or_rule_ta: "மெட்ராஸ் ஊதியச் சட்டம் 1951",
      effective_date: "1954-04-13",
      source_name: "Tamil Nadu Archives & Legislative History",
      source_url: "https://tnla.neva.gov.in/"
    },
    powers_and_responsibilities: {
      role_description_en: "Chief Minister of Madras State; pioneered public education, hydro-electric projects, and industrialization.",
      role_description_ta: "மெட்ராஸ் மாகாண முதலமைச்சர்; இலவச மதிய உணவு, பாசன அணைகள் மற்றும் தொழில்மயமாக்கலின் சிற்பி.",
      constitutional_articles: ["Article 164 (Executive Authority)"],
      statutory_powers_en: [
        "Executive leadership of the Madras State Council of Ministers",
        "Institutionalized free primary education within every 3 km radius"
      ],
      statutory_powers_ta: [
        "மெட்ராஸ் மாகாண அமைச்சரவையின் தலைமை பொறுப்பு",
        "ஒவ்வொரு 3 கி.மீ தொலைவிலும் ஆரம்பப் பள்ளிகளை நிறுவும் அரசாணை வெளியீடு"
      ],
      key_responsibilities_en: [
        "Free Midday Meal scheme covering over 1.5 million school students",
        "Kamaraj Plan (K-Plan) resigning CM office for grassroots party strengthening (1963)"
      ],
      key_responsibilities_ta: [
        "பள்ளிகளில் இலவச மதிய உணவுத் திட்டம் தொடக்கம்",
        "காமராஜர் திட்டம் (கே-பிளான்) மூலம் பதவியை துறந்து கட்சிப் பணிக்கு திரும்புதல்"
      ],
      limitations_of_authority_en: [
        "Pre-1956 state boundaries underwent reorganization under States Reorganisation Act"
      ],
      limitations_of_authority_ta: [
        "மாநிலங்கள் மறுசீரமைப்புச் சட்டத்தின் கீழ் மொழிவாரி எல்லை மாற்றங்களுக்கு உட்பட்டிருந்தது"
      ]
    },
    election_history: [
      { id: "el-kam-1954", election_year: 1954, election_type: "TN Legislative Assembly", constituency_en: "Gudiyatham (By-election)", constituency_ta: "குடியாத்தம்", party_name_en: "INC", party_name_ta: "காங்கிரஸ்", votes_secured: 41280, vote_percentage: 67.2, margin: 21100, result: "Won", runner_up_name_en: "V. M. Ramaswamy", runner_up_party: "Independent", source_url: "https://www.eci.gov.in/" }
    ],
    party_history: [
      { id: "ph-kam-1", party_name_en: "Indian National Congress", party_name_ta: "இந்திய தேசிய காங்கிரஸ்", party_abbr: "INC", from_year: 1920, to_year: 1975, role_en: "President - Indian National Congress (1964–1967)", role_ta: "அகில இந்திய காங்கிரஸ் கமிட்டி தலைவர்" }
    ],
    legislative_records: [
      { id: "leg-kam-1", session_name_en: "Madras Assembly 1956", session_name_ta: "மெட்ராஸ் சட்டமன்றம் 1956", category: "Bill", title_en: "Historic Govt. Order on Midday Meal Scheme for Elementary Schools (G.O. 1956)", title_ta: "தொடக்கப் பள்ளி மாணவர்களுக்கான இலவச மதிய உணவுத் திட்டம் அரசானை (G.O. 1956)", date: "1956-07-08", status: "Passed", details_en: "Formalized state-funded free midday nutrition in schools to prevent rural child dropouts.", details_ta: "கிராமப்புற குழந்தைகளை பள்ளிக்கு வரவழைக்க இலவச மதிய உணவுத் திட்டம் அதிகாரப்பூர்வமாக நடைமுறைப்படுத்தப்பட்டது.", source_url: "https://www.tn.gov.in/" }
    ],
    sources: [
      { id: "src-kam-1", claim_or_field_en: "Midday Meal Scheme History", claim_or_field_ta: "மதிய உணவுத் திட்ட வரலாறு", source_name: "Tamil Nadu Archives & Department of Social Welfare", source_url: "https://www.tn.gov.in/", publication_date: "1956-07-10", last_verified: "2026-03-15", status: "verified" }
    ],
    verification_status: "verified",
    last_verified_at: "2026-04-01",
    created_at: "2026-01-01",
    updated_at: "2026-04-01"
  }
];

export const PUBLIC_RECORDS: PublicRecordItem[] = [
  {
    id: "rec-sal-2018",
    title_en: "Tamil Nadu Payment of Salaries (Amendment) Act, 2018 (Act No. 12 of 2018)",
    title_ta: "தமிழ்நாடு அமைச்சர்கள் மற்றும் சட்டமன்ற உறுப்பினர்கள் ஊதிய திருத்தச் சட்டம் 2018",
    category: "Salary Notification",
    issuing_authority_en: "Law Department, Government of Tamil Nadu",
    issuing_authority_ta: "சட்டத் துறை, தமிழ்நாடு அரசு",
    record_date: "2018-01-10",
    source_name: "Tamil Nadu Government Gazette Extraordinary No. 14",
    source_url: "https://tnla.neva.gov.in/",
    document_ref: "TN Act No. 12/2018",
    summary_en: "Statutory enactment doubling MLA emoluments to ₹1,05,000 monthly, comprising ₹30,000 basic pay, ₹25,000 constituency allowance, and ₹25,000 secretarial/telephone allowance.",
    summary_ta: "சட்டமன்ற உறுப்பினர்களின் மாத ஊதியத்தை ₹1,05,000 ஆக உயர்த்திய அதிகாரப்பூர்வ சட்டத்திருத்தம். இதில் அடிப்படை ஊதியம் ₹30,000, தொகுதிப்படி ₹25,000 மற்றும் தொலைபேசிப்படி ₹25,000 அடங்கும்.",
    verification_status: "verified",
    last_verified: "2026-04-01"
  },
  {
    id: "rec-mlacds-2023",
    title_en: "Guidelines for Member of Legislative Assembly Constituency Development Scheme (MLACDS)",
    title_ta: "சட்டமன்ற உறுப்பினர் தொகுதி மேம்பாட்டுத் திட்ட (MLACDS) வழிகாட்டு நெறிமுறைகள்",
    category: "Government Order (G.O)",
    issuing_authority_en: "Rural Development and Panchayat Raj Department, TN",
    issuing_authority_ta: "ஊரக வளர்ச்சி மற்றும் ஊராட்சித் துறை, தமிழ்நாடு",
    record_date: "2023-06-12",
    source_name: "Government of Tamil Nadu G.O. (Ms) No. 78",
    source_url: "https://www.tn.gov.in/",
    document_ref: "G.O. (Ms) No. 78/RD&PR/2023",
    summary_en: "Specifies strict spending rules for the ₹3 Crore annual MLACDS funds. Mandates at least 22% of funds for SC/ST residential habitats and prohibits non-public expenditure.",
    summary_ta: "ஆண்டுக்கு ₹3 கோடி தொகுதி மேம்பாட்டு நிதியை பயன்படுத்துவதற்கான வழிகாட்டுதல்கள். இதில் 22% நிதி ஆதிதிராவிடர் மற்றும் பழங்குடியினர் வசிக்கும் பகுதிகளுக்கு கட்டாயம் ஒதுக்கப்பட வேண்டும்.",
    verification_status: "verified",
    last_verified: "2026-04-01"
  },
  {
    id: "rec-mplads-2023",
    title_en: "Revised MPLADS Guidelines & Web Portal Circular 2023",
    title_ta: "மாற்றியமைக்கப்பட்ட MPLADS நெறிமுறைகள் & டிஜிட்டல் கண்காணிப்பு சுற்றறிக்கை",
    category: "Government Order (G.O)",
    issuing_authority_en: "Ministry of Statistics and Programme Implementation (MoSPI), Government of India",
    issuing_authority_ta: "புள்ளியியல் மற்றும் திட்ட அமலாக்க அமைச்சகம், இந்திய அரசு",
    record_date: "2023-02-15",
    source_name: "Digital Sansad / MoSPI Guidelines Repository",
    source_url: "https://mpa.gov.in/",
    document_ref: "MoSPI/MPLADS/Rev-2023",
    summary_en: "Rules for annual ₹5 Crore allocation for Lok Sabha and Rajya Sabha MPs. Funds are released directly to District Authorities through Public Financial Management System (PFMS).",
    summary_ta: "நாடாளுமன்ற உறுப்பினர்களுக்கான ₹5 கோடி நிதியை PFMS வங்கி பரிவர்த்தனை மூலம் மாவட்ட நிர்வாகங்கள் மூலமாக மட்டுமே செலவிடுவதற்கான விதிகள்.",
    verification_status: "verified",
    last_verified: "2026-04-01"
  },
  {
    id: "rec-assembly-rules-2024",
    title_en: "Rules of Procedure and Conduct of Business in the Tamil Nadu Legislative Assembly (Ninth Edition)",
    title_ta: "தமிழ்நாடு சட்டப்பேரவை நடைமுறை மற்றும் அலுவல் நடத்தை விதிகள் (ஒன்பதாம் பதிப்பு)",
    category: "Assembly Debates",
    issuing_authority_en: "Legislative Assembly Secretariat, Chennai",
    issuing_authority_ta: "சட்டமன்றப் பேரவைச் செயலகம், சென்னை",
    record_date: "2024-01-05",
    source_name: "National e-Vidhan Application (NEVA) - Tamil Nadu",
    source_url: "https://tnla.neva.gov.in/",
    document_ref: "TNLA Rulebook 2024",
    summary_en: "Full operational manual governing Assembly sessions, Question Hour, Calling Attention Motions (Rule 55), No-Confidence procedures, and Committee mandates.",
    summary_ta: "சட்டமன்றத்தில் கேள்வி நேரம், பூஜ்ய நேரம், கவன ஈர்ப்பு தீர்மானங்கள் மற்றும் சட்டமன்ற நிலைக்குழுக்களின் அதிகாரங்களை விளக்கும் அதிகாரப்பூர்வ விதிப்புத்தகம்.",
    verification_status: "verified",
    last_verified: "2026-04-01"
  },
  {
    id: "rec-eci-delim-2021",
    title_en: "Election Commission of India - General Elections to the Tamil Nadu Legislative Assembly 2021 Compendium",
    title_ta: "இந்திய தேர்தல் ஆணையம் - தமிழ்நாடு சட்டமன்ற பொதுத்தேர்தல் 2021 அதிகாரப்பூர்வ முடிவுகள் அறிக்கை",
    category: "Election Results",
    issuing_authority_en: "Election Commission of India, Nirvachan Sadan, New Delhi",
    issuing_authority_ta: "இந்திய தேர்தல் ஆணையம், புது தில்லி",
    record_date: "2021-06-30",
    source_name: "ECI Statistical Report TN 2021",
    source_url: "https://www.eci.gov.in/",
    document_ref: "ECI/STAT/TN-LA/2021",
    summary_en: "Complete constituency-wise voter turnout, candidate votes, margins, and deposit forfeiture statistics for all 234 assembly constituencies in Tamil Nadu.",
    summary_ta: "தமிழ்நாட்டின் 234 சட்டமன்ற தொகுதிகளின் முழுமையான வாக்குப்பதிவு சதவீதம், வேட்பாளர்கள் பெற்ற வாக்குகள் மற்றும் வெற்றி வித்தியாசம் அடங்கிய முழு அறிக்கை.",
    verification_status: "verified",
    last_verified: "2026-04-01"
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "tl-1952",
    year: 1952,
    date_formatted: "May 1952",
    title_en: "First General Elections in Post-Independence Madras State",
    title_ta: "சுதந்திரத்திற்குப் பின் மெட்ராஸ் மாகாணத்தின் முதல் பொதுத்தேர்தல்",
    category: "Election",
    description_en: "First democratic elections held under the Constitution of India; C. Rajagopalachari (Rajaji) formed the ministry in Madras State.",
    description_ta: "இந்திய அரசியலமைப்பு சட்டத்தின் கீழ் நடந்த முதல் மக்களாட்சி தேர்தல்; ராஜாஜி தலைமையில் அமைச்சரவை அமைந்தது.",
    key_figures_en: ["C. Rajagopalachari", "T. Prakasam"],
    key_figures_ta: ["சி. ராஜகோபாலாச்சாரி", "டி. பிரகாசம்"],
    source_name: "Election Commission of India Historical Archive",
    source_url: "https://www.eci.gov.in/",
    verification_status: "verified"
  },
  {
    id: "tl-1954",
    year: 1954,
    date_formatted: "13 April 1954",
    title_en: "K. Kamaraj Assumes Office as Chief Minister",
    title_ta: "க. காமராஜர் மெட்ராஸ் மாகாண முதலமைச்சராகப் பதவியேற்பு",
    category: "Chief Minister",
    description_en: "Beginning of a transformative 9-year tenure introducing the Free Midday Meal Scheme and building foundational educational & irrigation projects.",
    description_ta: "இலவச மதிய உணவுத் திட்டம், பல்லாயிரக்கணக்கான தொடக்கப் பள்ளிகள் மற்றும் பெரிய பாசன அணைகளை உருவாக்கிய பொற்கால ஆட்சியின் தொடக்கம்.",
    key_figures_en: ["K. Kamaraj", "C. Subramaniam", "M. Bhaktavatsalam"],
    key_figures_ta: ["க. காமராஜர்", "சி. சுப்பிரமணியம்", "எம். பக்தவத்சலம்"],
    source_name: "Tamil Nadu Legislative Assembly Archives",
    source_url: "https://tnla.neva.gov.in/",
    verification_status: "verified"
  },
  {
    id: "tl-1967",
    year: 1967,
    date_formatted: "March 1967",
    title_en: "Historic 1967 Assembly Election — DMK Under C.N. Annadurai Forms Government",
    title_ta: "1967 வரலாற்று சட்டமன்றத் தேர்தல் — பேரறிஞர் அண்ணா தலைமையில் திமுக ஆட்சி அமைத்தல்",
    category: "Election",
    description_en: "A historic watershed election in Indian politics where a regional party secured an absolute majority; ending unbroken Congress rule in Madras.",
    description_ta: "இந்தியாவில் ஒரு பிராந்தியக் கட்சி தனிப்பெரும்பான்மை பெற்று ஆட்சி அமைத்த வரலாற்று முக்கியத்துவம் வாய்ந்த தேர்தல்.",
    key_figures_en: ["C. N. Annadurai", "M. Karunanidhi", "V. R. Nedunchezhiyan"],
    key_figures_ta: ["சி. என். அண்ணாதுரை", "மு. கருணாநிதி", "இரா. நெடுஞ்செழியன்"],
    source_name: "ECI 1967 Report",
    source_url: "https://www.eci.gov.in/",
    verification_status: "verified"
  },
  {
    id: "tl-1969",
    year: 1969,
    date_formatted: "14 January 1969",
    title_en: "Madras State Officially Renamed as Tamil Nadu (தமிழ்நாடு)",
    title_ta: "மெட்ராஸ் மாகாணம் அதிகாரப்பூர்வமாக 'தமிழ்நாடு' என பெயர் மாற்றம்",
    category: "Governance Milestone",
    description_en: "Following unanimous Assembly approval, the Madras State (Alteration of Name) Act came into effect on Pongal day.",
    description_ta: "சட்டமன்றத் தீர்மானத்தை ஏற்று நாடாளுமன்ற ஒப்புதலுடன் மெட்ராஸ் மாகாணத்திற்கு 'தமிழ்நாடு' என்று பெயர் சூட்டப்பட்டு பொங்கல் திருநாளில் நடைமுறைக்கு வந்தது.",
    key_figures_en: ["C. N. Annadurai", "Sankaralinganar (Memorialist)"],
    key_figures_ta: ["சி. என். அண்ணாதுரை", "தியாகி சங்கரலிங்கனார்"],
    source_name: "Government of India Gazette Notification 1968",
    source_url: "https://www.tn.gov.in/",
    verification_status: "verified"
  },
  {
    id: "tl-1972",
    year: 1972,
    date_formatted: "17 October 1972",
    title_en: "Formation of All India Anna Dravida Munnetra Kazhagam (AIADMK)",
    title_ta: "அனைத்திந்திய அண்ணா திராவிட முன்னேற்றக் கழகம் (அதிமுக) தொடக்கம்",
    category: "Political Movement",
    description_en: "Actor and charismatic leader M. G. Ramachandran founded AIADMK, establishing the bipolar political landscape of Tamil Nadu.",
    description_ta: "மக்கள் திலகம் எம். ஜி. ராமச்சந்திரன் அவர்களால் அதிமுக தொடங்கப்பட்டு, தமிழக அரசியலில் இரு பெரும் திராவிடக் கட்சிகளின் களம் உருவானது.",
    key_figures_en: ["M. G. Ramachandran"],
    key_figures_ta: ["எம். ஜி. ராமச்சந்திரன்"],
    source_name: "Contemporary Press & Party Archive",
    source_url: "https://www.tn.gov.in/",
    verification_status: "verified"
  },
  {
    id: "tl-1982",
    year: 1982,
    date_formatted: "1 July 1982",
    title_en: "Nutritious Noon Meal Scheme Expansion by M.G. Ramachandran",
    title_ta: "எம். ஜி. ராமச்சந்திரனால் சத்துணவுத் திட்டம் விரிவுபடுத்தப்படல்",
    category: "Governance Milestone",
    description_en: "MGR expanded noon meal provision into a universal comprehensive nutritious child development initiative across rural and urban schools.",
    description_ta: "தமிழகம் முழுவதும் அனைத்து குழந்தைகளுக்கும் ஊட்டச்சத்து நிறைந்த விரிவான சத்துணவுத் திட்டம் நடைமுறைக்கு வந்தது.",
    key_figures_en: ["M. G. Ramachandran"],
    key_figures_ta: ["எம். ஜி. ராமச்சந்திரன்"],
    source_name: "Department of Social Welfare TN G.O.",
    source_url: "https://www.tn.gov.in/",
    verification_status: "verified"
  },
  {
    id: "tl-1989",
    year: 1989,
    date_formatted: "1989",
    title_en: "Enactment of Equal Property Rights for Women & 30% Women's Reservation",
    title_ta: "பெண்களுக்கு சம சொத்துரிமை சட்டம் மற்றும் 30% இடஒதுக்கீடு",
    category: "Landmark Legislation",
    description_en: "Government led by M. Karunanidhi passed the Hindu Succession (Tamil Nadu Amendment) Act giving daughters equal ancestral property rights.",
    description_ta: "குடும்ப பரம்பரை சொத்தில் மகள்களுக்கும் சம பங்கு உண்டு என பெண்களுக்கான சம சொத்துரிமைச் சட்டம் தமிழ்நாட்டில் நிறைவேறியது.",
    key_figures_en: ["M. Karunanidhi"],
    key_figures_ta: ["மு. கருணாநிதி"],
    source_name: "TN Act No. 1 of 1990",
    source_url: "https://www.tn.gov.in/",
    verification_status: "verified"
  },
  {
    id: "tl-1994",
    year: 1994,
    date_formatted: "19 July 1994",
    title_en: "69% Reservation Act Placed Under Ninth Schedule of the Constitution",
    title_ta: "தமிழ்நாட்டின் 69% இடஒதுக்கீடு சட்டம் அரசியலமைப்பின் 9வது அட்டவணையில் சேர்க்கப்படல்",
    category: "Landmark Legislation",
    description_en: "Tamil Nadu Act 45 of 1994 under Chief Minister J. Jayalalithaa protected the state's 69% reservation from the 50% judicial ceiling through the 76th Constitutional Amendment.",
    description_ta: "முதலமைச்சர் ஜெ. ஜெயலலிதா தலைமையிலான அரசு கொண்டு வந்த சட்டத்தின் மூலம் 69% இடஒதுக்கீடு உச்சநீதிமன்ற வரம்பிலிருந்து அரசியலமைப்புப் பாதுகாப்பு பெற்றது.",
    key_figures_en: ["J. Jayalalithaa"],
    key_figures_ta: ["ஜெ. ஜெயலலிதா"],
    source_name: "Constitution (Seventy-sixth Amendment) Act, 1994",
    source_url: "https://www.eci.gov.in/",
    verification_status: "verified"
  },
  {
    id: "tl-2021",
    year: 2021,
    date_formatted: "May 2021",
    title_en: "16th Tamil Nadu Legislative Assembly Constituted",
    title_ta: "16வது தமிழ்நாடு சட்டமன்றப் பேரவை அமைதல்",
    category: "Election",
    description_en: "DMK-led Secular Progressive Alliance won 159 seats; M. K. Stalin sworn in as Chief Minister and Edappadi K. Palaniswami elected Leader of Opposition.",
    description_ta: "திமுக கூட்டணி 159 இடங்களில் வெற்றி பெற்று மு. க. ஸ்டாலின் முதலமைச்சராகவும், எடப்பாடி கே. பழனிசாமி எதிர்க்கட்சித் தலைவராகவும் பொறுப்பேற்றனர்.",
    key_figures_en: ["M. K. Stalin", "Edappadi K. Palaniswami"],
    key_figures_ta: ["மு. க. ஸ்டாலின்", "எடப்பாடி கே. பழனிசாமி"],
    source_name: "Election Commission of India Notification",
    source_url: "https://www.eci.gov.in/",
    verification_status: "verified"
  }
];
