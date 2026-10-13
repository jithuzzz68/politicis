export type VerificationStatus = 'verified' | 'pending' | 'unavailable';

export interface PoliticalParty {
  id: string;
  name_en: string;
  name_ta: string;
  abbreviation: string;
  symbol: string;
  color: string;
  founded_year: number;
  founder_en: string;
  founder_ta: string;
  description_en: string;
  description_ta: string;
}

export interface District {
  id: string;
  name_en: string;
  name_ta: string;
  headquarters_en: string;
  headquarters_ta: string;
  assembly_seats_count: number;
  parliamentary_seats_count: number;
  population?: string;
}

export interface Constituency {
  id: string;
  number: number;
  name_en: string;
  name_ta: string;
  type: 'assembly' | 'parliamentary';
  district_id: string;
  district_name_en: string;
  district_name_ta: string;
  is_reserved: boolean;
  reservation_type?: 'SC' | 'ST' | 'General';
  voter_turnout_percent?: number;
  current_representative_id?: string;
  current_representative_name_en?: string;
  current_representative_name_ta?: string;
}

export interface RemunerationRule {
  id: string;
  position_id: string;
  position_name_en: string;
  position_name_ta: string;
  level: 'State (Tamil Nadu)' | 'Union (Parliament)';
  basic_salary: number; // INR per month
  constituency_allowance: number; // INR per month
  telephone_secretarial_allowance: number; // INR per month
  daily_allowance_session: number; // INR per day during session
  total_monthly_emoluments: number; // INR per month
  development_fund_annual: number; // e.g. MLACDS ₹3 Crore, MPLADS ₹5 Crore
  development_fund_name_en: string;
  development_fund_name_ta: string;
  pension_monthly?: number;
  travel_concessions_en: string;
  travel_concessions_ta: string;
  medical_benefits_en: string;
  medical_benefits_ta: string;
  effective_date: string;
  act_or_rule_en: string;
  act_or_rule_ta: string;
  source_name: string;
  source_url: string;
  last_verified_date: string;
  verification_status: VerificationStatus;
}

export interface ElectionRecord {
  id: string;
  election_year: number;
  election_type: 'TN Legislative Assembly' | 'Lok Sabha' | 'Rajya Sabha';
  constituency_en: string;
  constituency_ta: string;
  party_name_en: string;
  party_name_ta: string;
  votes_secured: number;
  vote_percentage: number;
  margin: number;
  result: 'Won' | 'Lost';
  runner_up_name_en?: string;
  runner_up_name_ta?: string;
  runner_up_party?: string;
  source_url: string;
}

export interface PartyHistory {
  id: string;
  party_name_en: string;
  party_name_ta: string;
  party_abbr: string;
  from_year: number;
  to_year: number | null; // null if current
  role_en?: string;
  role_ta?: string;
  notes_en?: string;
  notes_ta?: string;
}

export interface LegislativeRecord {
  id: string;
  session_name_en: string;
  session_name_ta: string;
  category: 'Question' | 'Bill' | 'Debate' | 'Zero Hour' | 'Public Project';
  title_en: string;
  title_ta: string;
  date: string;
  status: 'Answered' | 'Passed' | 'Under Review' | 'Completed' | 'Ongoing';
  details_en: string;
  details_ta: string;
  source_url: string;
}

export interface SourceVerification {
  id: string;
  claim_or_field_en: string;
  claim_or_field_ta: string;
  source_name: string;
  source_url: string;
  publication_date: string;
  last_verified: string;
  status: VerificationStatus;
  notes_en?: string;
  notes_ta?: string;
}

export interface Politician {
  id: string;
  name_en: string;
  name_ta: string;
  slug: string;
  photo_url: string;
  type: 'MLA' | 'MP_LOK_SABHA' | 'MP_RAJYA_SABHA' | 'CHIEF_MINISTER' | 'MINISTER' | 'HISTORICAL';
  is_current: boolean;
  position_title_en: string;
  position_title_ta: string;
  portfolio_en?: string;
  portfolio_ta?: string;
  party_id: string;
  party_name_en: string;
  party_name_ta: string;
  party_abbr: string;
  party_color: string;
  constituency_id?: string;
  constituency_name_en?: string;
  constituency_name_ta?: string;
  district_id?: string;
  district_name_en?: string;
  district_name_ta?: string;
  term_start: string;
  term_end?: string | null;
  assembly_or_parliament_term: string; // e.g. "16th TN Assembly" or "18th Lok Sabha"
  biography_en: string;
  biography_ta: string;
  birth_year?: number;
  education_en?: string;
  education_ta?: string;
  remuneration: RemunerationRule;
  powers_and_responsibilities: {
    role_description_en: string;
    role_description_ta: string;
    constitutional_articles: string[];
    statutory_powers_en: string[];
    statutory_powers_ta: string[];
    key_responsibilities_en: string[];
    key_responsibilities_ta: string[];
    limitations_of_authority_en: string[];
    limitations_of_authority_ta: string[];
  };
  election_history: ElectionRecord[];
  party_history: PartyHistory[];
  legislative_records: LegislativeRecord[];
  sources: SourceVerification[];
  verification_status: VerificationStatus;
  last_verified_at: string;
  created_at: string;
  updated_at: string;
}

export interface PublicRecordItem {
  id: string;
  title_en: string;
  title_ta: string;
  category: 'Gazette' | 'Assembly Debates' | 'Election Results' | 'Salary Notification' | 'Government Order (G.O)' | 'Audit & Committee Report';
  issuing_authority_en: string;
  issuing_authority_ta: string;
  record_date: string;
  source_name: string;
  source_url: string;
  document_ref: string;
  summary_en: string;
  summary_ta: string;
  verification_status: VerificationStatus;
  last_verified: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  date_formatted: string;
  title_en: string;
  title_ta: string;
  category: 'Election' | 'Chief Minister' | 'Landmark Legislation' | 'Governance Milestone' | 'Political Movement';
  description_en: string;
  description_ta: string;
  key_figures_en: string[];
  key_figures_ta: string[];
  source_name: string;
  source_url: string;
  verification_status: VerificationStatus;
}

export interface CorrectionReport {
  id: string;
  politician_id?: string;
  politician_name?: string;
  record_id?: string;
  user_email: string;
  category: 'Salary/Remuneration' | 'Constituency Info' | 'Election Data' | 'Biographical' | 'Other';
  reported_claim: string;
  suggested_correction: string;
  supporting_source_url: string;
  status: 'pending' | 'approved' | 'rejected';
  submitted_at: string;
  reviewed_at?: string;
  admin_notes?: string;
}

export interface AdminAuditLog {
  id: string;
  admin_email: string;
  action_type: 'CREATE_POLITICIAN' | 'UPDATE_POLITICIAN' | 'ARCHIVE_POLITICIAN' | 'UPDATE_SALARY_RULE' | 'ADD_PUBLIC_RECORD' | 'RESOLVE_CORRECTION';
  target_id: string;
  details: string;
  timestamp: string;
}
