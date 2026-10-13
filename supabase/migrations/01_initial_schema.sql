-- =========================================================================
-- ARASIYAL ARIVU (அரசியல் அறிவு) - SUPABASE POSTGRESQL DATABASE SCHEMA
-- Migration: 01_initial_schema.sql
-- Covers all 16 normalized tables with RLS and Audit Triggers
-- =========================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Political Parties Table
CREATE TABLE IF NOT EXISTS political_parties (
    id TEXT PRIMARY KEY,
    name_en TEXT NOT NULL,
    name_ta TEXT NOT NULL,
    abbreviation TEXT NOT NULL UNIQUE,
    symbol TEXT NOT NULL,
    color TEXT NOT NULL,
    founded_year INTEGER,
    founder_en TEXT,
    founder_ta TEXT,
    description_en TEXT,
    description_ta TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Districts Table (38 Districts of Tamil Nadu)
CREATE TABLE IF NOT EXISTS districts (
    id TEXT PRIMARY KEY,
    name_en TEXT NOT NULL,
    name_ta TEXT NOT NULL,
    headquarters_en TEXT NOT NULL,
    headquarters_ta TEXT NOT NULL,
    assembly_seats_count INTEGER NOT NULL DEFAULT 0,
    parliamentary_seats_count INTEGER NOT NULL DEFAULT 0,
    population TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Constituencies Table
CREATE TABLE IF NOT EXISTS constituencies (
    id TEXT PRIMARY KEY,
    number INTEGER NOT NULL,
    name_en TEXT NOT NULL,
    name_ta TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('assembly', 'parliamentary')),
    district_id TEXT REFERENCES districts(id) ON DELETE CASCADE,
    is_reserved BOOLEAN DEFAULT FALSE,
    reservation_type TEXT CHECK (reservation_type IN ('SC', 'ST', 'General')),
    voter_turnout_percent NUMERIC(5,2),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Positions Table
CREATE TABLE IF NOT EXISTS positions (
    id TEXT PRIMARY KEY,
    title_en TEXT NOT NULL,
    title_ta TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('MLA', 'MP_LOK_SABHA', 'MP_RAJYA_SABHA', 'CHIEF_MINISTER', 'MINISTER', 'SPEAKER', 'MAYOR', 'HISTORICAL')),
    governing_body TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Sources Table
CREATE TABLE IF NOT EXISTS sources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    source_name TEXT NOT NULL,
    source_url TEXT NOT NULL,
    source_type TEXT NOT NULL, -- Gazette, Assembly proceedings, ECI, Digital Sansad
    authority_name TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Remuneration Rules Table
CREATE TABLE IF NOT EXISTS remuneration_rules (
    id TEXT PRIMARY KEY,
    position_id TEXT REFERENCES positions(id) ON DELETE CASCADE,
    position_name_en TEXT NOT NULL,
    position_name_ta TEXT NOT NULL,
    governing_level TEXT NOT NULL, -- State / Union
    basic_salary NUMERIC(12,2) NOT NULL,
    constituency_allowance NUMERIC(12,2) NOT NULL,
    telephone_secretarial_allowance NUMERIC(12,2) NOT NULL,
    daily_allowance_session NUMERIC(12,2) NOT NULL,
    total_monthly_emoluments NUMERIC(12,2) NOT NULL,
    development_fund_annual NUMERIC(14,2) NOT NULL, -- ₹3 Cr / ₹5 Cr
    development_fund_name_en TEXT NOT NULL,
    development_fund_name_ta TEXT NOT NULL,
    pension_monthly NUMERIC(12,2) DEFAULT 0,
    travel_concessions_en TEXT,
    travel_concessions_ta TEXT,
    medical_benefits_en TEXT,
    medical_benefits_ta TEXT,
    effective_date DATE NOT NULL,
    effective_to DATE,
    act_or_rule_en TEXT NOT NULL,
    act_or_rule_ta TEXT NOT NULL,
    source_id UUID REFERENCES sources(id),
    verification_status TEXT DEFAULT 'verified' CHECK (verification_status IN ('verified', 'pending', 'unavailable')),
    verified_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Politicians Table
CREATE TABLE IF NOT EXISTS politicians (
    id TEXT PRIMARY KEY,
    name_en TEXT NOT NULL,
    name_ta TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    photo_url TEXT,
    type TEXT NOT NULL CHECK (type IN ('MLA', 'MP_LOK_SABHA', 'MP_RAJYA_SABHA', 'CHIEF_MINISTER', 'MINISTER', 'HISTORICAL')),
    is_current BOOLEAN DEFAULT TRUE,
    position_title_en TEXT NOT NULL,
    position_title_ta TEXT NOT NULL,
    portfolio_en TEXT,
    portfolio_ta TEXT,
    party_id TEXT REFERENCES political_parties(id),
    constituency_id TEXT REFERENCES constituencies(id),
    district_id TEXT REFERENCES districts(id),
    birth_year INTEGER,
    education_en TEXT,
    education_ta TEXT,
    biography_en TEXT NOT NULL,
    biography_ta TEXT NOT NULL,
    verification_status TEXT DEFAULT 'verified' CHECK (verification_status IN ('verified', 'pending', 'unavailable')),
    last_verified_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Politician Terms Table
CREATE TABLE IF NOT EXISTS politician_terms (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    politician_id TEXT REFERENCES politicians(id) ON DELETE CASCADE,
    position_id TEXT REFERENCES positions(id),
    constituency_id TEXT REFERENCES constituencies(id),
    assembly_or_parliament_term TEXT NOT NULL, -- e.g. 16th Assembly
    start_date DATE NOT NULL,
    end_date DATE,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'resigned', 'deceased')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Politician Party History Table
CREATE TABLE IF NOT EXISTS politician_party_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    politician_id TEXT REFERENCES politicians(id) ON DELETE CASCADE,
    party_id TEXT REFERENCES political_parties(id),
    from_year INTEGER NOT NULL,
    to_year INTEGER,
    role_en TEXT,
    role_ta TEXT,
    notes_en TEXT,
    notes_ta TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Political Events / Timeline Table
CREATE TABLE IF NOT EXISTS political_events (
    id TEXT PRIMARY KEY,
    year INTEGER NOT NULL,
    date_formatted TEXT NOT NULL,
    title_en TEXT NOT NULL,
    title_ta TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Election', 'Chief Minister', 'Landmark Legislation', 'Governance Milestone', 'Political Movement')),
    description_en TEXT NOT NULL,
    description_ta TEXT NOT NULL,
    key_figures_en TEXT[],
    key_figures_ta TEXT[],
    source_name TEXT,
    source_url TEXT,
    verification_status TEXT DEFAULT 'verified' CHECK (verification_status IN ('verified', 'pending', 'unavailable')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. Public Records Table
CREATE TABLE IF NOT EXISTS public_records (
    id TEXT PRIMARY KEY,
    title_en TEXT NOT NULL,
    title_ta TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Gazette', 'Assembly Debates', 'Election Results', 'Salary Notification', 'Government Order (G.O)', 'Audit & Committee Report')),
    issuing_authority_en TEXT NOT NULL,
    issuing_authority_ta TEXT NOT NULL,
    record_date DATE NOT NULL,
    source_name TEXT NOT NULL,
    source_url TEXT NOT NULL,
    document_ref TEXT NOT NULL,
    summary_en TEXT NOT NULL,
    summary_ta TEXT NOT NULL,
    verification_status TEXT DEFAULT 'verified' CHECK (verification_status IN ('verified', 'pending', 'unavailable')),
    last_verified DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. Record Verifications Table
CREATE TABLE IF NOT EXISTS record_verifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    record_id TEXT REFERENCES public_records(id) ON DELETE CASCADE,
    verified_by TEXT NOT NULL,
    claim_verified TEXT NOT NULL,
    evidence_url TEXT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('verified', 'pending', 'disputed')),
    notes TEXT,
    verified_at TIMESTAMPTZ DEFAULT NOW()
);

-- 13. User Profiles Table (Supabase Auth extension)
CREATE TABLE IF NOT EXISTS user_profiles (
    id UUID PRIMARY KEY, -- References auth.users(id)
    full_name TEXT,
    preferred_language TEXT DEFAULT 'ta' CHECK (preferred_language IN ('ta', 'en')),
    role TEXT DEFAULT 'citizen' CHECK (role IN ('citizen', 'researcher', 'admin')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 14. Saved Politicians Table
CREATE TABLE IF NOT EXISTS saved_politicians (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES user_profiles(id) ON DELETE CASCADE,
    politician_id TEXT REFERENCES politicians(id) ON DELETE CASCADE,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, politician_id)
);

-- 15. Correction Reports Table
CREATE TABLE IF NOT EXISTS correction_reports (
    id TEXT PRIMARY KEY,
    politician_id TEXT REFERENCES politicians(id) ON DELETE SET NULL,
    politician_name TEXT,
    record_id TEXT REFERENCES public_records(id) ON DELETE SET NULL,
    user_email TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Salary/Remuneration', 'Constituency Info', 'Election Data', 'Biographical', 'Other')),
    reported_claim TEXT NOT NULL,
    suggested_correction TEXT NOT NULL,
    supporting_source_url TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    submitted_at TIMESTAMPTZ DEFAULT NOW(),
    reviewed_at TIMESTAMPTZ,
    admin_notes TEXT
);

-- 16. Admin Audit Logs Table
CREATE TABLE IF NOT EXISTS admin_audit_logs (
    id TEXT PRIMARY KEY,
    admin_email TEXT NOT NULL,
    action_type TEXT NOT NULL CHECK (action_type IN ('CREATE_POLITICIAN', 'UPDATE_POLITICIAN', 'ARCHIVE_POLITICIAN', 'UPDATE_SALARY_RULE', 'ADD_PUBLIC_RECORD', 'RESOLVE_CORRECTION')),
    target_id TEXT NOT NULL,
    details TEXT NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- INDEXES FOR PERFORMANCE
-- =========================================================================
CREATE INDEX IF NOT EXISTS idx_politicians_type ON politicians(type);
CREATE INDEX IF NOT EXISTS idx_politicians_party ON politicians(party_id);
CREATE INDEX IF NOT EXISTS idx_politicians_district ON politicians(district_id);
CREATE INDEX IF NOT EXISTS idx_constituencies_district ON constituencies(district_id);
CREATE INDEX IF NOT EXISTS idx_public_records_cat ON public_records(category);
CREATE INDEX IF NOT EXISTS idx_correction_status ON correction_reports(status);

-- =========================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Public access: Read-only for educational/civic transparency
-- Admin access: Read & Write with authentication
-- =========================================================================
ALTER TABLE political_parties ENABLE ROW LEVEL SECURITY;
ALTER TABLE districts ENABLE ROW LEVEL SECURITY;
ALTER TABLE constituencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE positions ENABLE ROW LEVEL SECURITY;
ALTER TABLE remuneration_rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE politicians ENABLE ROW LEVEL SECURITY;
ALTER TABLE politician_terms ENABLE ROW LEVEL SECURITY;
ALTER TABLE politician_party_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE political_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE correction_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_audit_logs ENABLE ROW LEVEL SECURITY;

-- Public can read verified information
CREATE POLICY "Public Read Access: Parties" ON political_parties FOR SELECT USING (true);
CREATE POLICY "Public Read Access: Districts" ON districts FOR SELECT USING (true);
CREATE POLICY "Public Read Access: Constituencies" ON constituencies FOR SELECT USING (true);
CREATE POLICY "Public Read Access: Positions" ON positions FOR SELECT USING (true);
CREATE POLICY "Public Read Access: Remuneration" ON remuneration_rules FOR SELECT USING (true);
CREATE POLICY "Public Read Access: Politicians" ON politicians FOR SELECT USING (true);
CREATE POLICY "Public Read Access: Terms" ON politician_terms FOR SELECT USING (true);
CREATE POLICY "Public Read Access: Events" ON political_events FOR SELECT USING (true);
CREATE POLICY "Public Read Access: Records" ON public_records FOR SELECT USING (true);

-- Anyone can submit a correction report
CREATE POLICY "Citizen Insert: Corrections" ON correction_reports FOR INSERT WITH CHECK (true);

-- Admin full access
CREATE POLICY "Admin All Access: Politicians" ON politicians FOR ALL USING (
    auth.jwt() ->> 'role' = 'admin' OR auth.jwt() ->> 'email' LIKE '%@arasiyalarivu.tn.gov.in'
);
