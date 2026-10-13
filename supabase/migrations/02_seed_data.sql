-- =========================================================================
-- ARASIYAL ARIVU - SEED DATA MIGRATION
-- Migration: 02_seed_data.sql
-- Verified Tamil Nadu data for parties, districts, positions, and rules
-- =========================================================================

-- Parties
INSERT INTO political_parties (id, name_en, name_ta, abbreviation, symbol, color, founded_year, founder_en, founder_ta) VALUES
('dmk', 'Dravida Munnetra Kazhagam', 'திராவிட முன்னேற்றக் கழகம்', 'DMK', 'Rising Sun (உதயசூரியன்)', '#dc2626', 1949, 'C. N. Annadurai', 'பேரறிஞர் சி. என். அண்ணாதுரை'),
('aiadmk', 'All India Anna Dravida Munnetra Kazhagam', 'அனைத்திந்திய அண்ணா திராவிட முன்னேற்றக் கழகம்', 'AIADMK', 'Two Leaves (இரட்டை இலை)', '#15803d', 1972, 'M. G. Ramachandran', 'எம். ஜி. ராமச்சந்திரன்'),
('inc', 'Indian National Congress', 'இந்திய தேசிய காங்கிரஸ்', 'INC', 'Hand (கை)', '#0284c7', 1885, 'Allan Octavian Hume', 'ஏ. ஓ. ஹியூம்'),
('bjp', 'Bharatiya Janata Party', 'பாரதிய ஜனதா கட்சி', 'BJP', 'Lotus (தாமரை)', '#ea580c', 1980, 'Atal Bihari Vajpayee, L. K. Advani', 'அடல் பிகாரி வாஜ்பாய்'),
('vck', 'Viduthalai Chiruthaigal Katchi', 'விடுதலைச் சிறுத்தைகள் கட்சி', 'VCK', 'Pot (பானை)', '#059669', 1982, 'Thol. Thirumavalavan', 'தொல். திருமாவளவன்')
ON CONFLICT (id) DO NOTHING;

-- Positions
INSERT INTO positions (id, title_en, title_ta, category, governing_body) VALUES
('mla', 'Member of Legislative Assembly', 'சட்டமன்ற உறுப்பினர்', 'MLA', 'Tamil Nadu Legislative Assembly'),
('mp', 'Member of Parliament', 'நாடாளுமன்ற உறுப்பினர்', 'MP_LOK_SABHA', 'Parliament of India'),
('cm', 'Chief Minister of Tamil Nadu', 'தமிழ்நாடு முதலமைச்சர்', 'CHIEF_MINISTER', 'Government of Tamil Nadu'),
('minister', 'Cabinet Minister', 'அமைச்சரவை அமைச்சர்', 'MINISTER', 'Government of Tamil Nadu')
ON CONFLICT (id) DO NOTHING;

-- Remuneration Rules
INSERT INTO remuneration_rules (
    id, position_id, position_name_en, position_name_ta, governing_level,
    basic_salary, constituency_allowance, telephone_secretarial_allowance,
    daily_allowance_session, total_monthly_emoluments, development_fund_annual,
    development_fund_name_en, development_fund_name_ta, effective_date,
    act_or_rule_en, act_or_rule_ta
) VALUES
(
    'rem-mla-tn', 'mla', 'Member of Legislative Assembly (MLA) - Tamil Nadu', 'சட்டமன்ற உறுப்பினர் (MLA) - தமிழ்நாடு', 'State (Tamil Nadu)',
    30000, 25000, 25000, 1000, 105000, 30000000,
    'Member of Legislative Assembly Constituency Development Scheme (MLACDS)',
    'சட்டமன்ற உறுப்பினர் தொகுதி மேம்பாட்டு நிதி (MLACDS)', '2018-01-10',
    'Tamil Nadu Payment of Salaries Act, 1951 (As amended by TN Act No. 12 of 2018)',
    'தமிழ்நாடு ஊதியம் மற்றும் படிகள் சட்டம் 1951 (2018 ஆம் ஆண்டு திருத்தம்)'
),
(
    'rem-mp-parliament', 'mp', 'Member of Parliament (MP - Lok Sabha / Rajya Sabha)', 'நாடாளுமன்ற உறுப்பினர் (MP - மக்களவை / மாநிலங்களவை)', 'Union (Parliament)',
    100000, 70000, 60000, 2000, 230000, 50000000,
    'Members of Parliament Local Area Development Scheme (MPLADS)',
    'நாடாளுமன்ற உறுப்பினர் உள்ளூர் பகுதி மேம்பாட்டுத் திட்டம் (MPLADS)', '2018-04-01',
    'Salary, Allowances and Pension of Members of Parliament Act, 1954',
    'நாடாளுமன்ற உறுப்பினர்கள் ஊதியம், படிகள் மற்றும் ஓய்வூதியச் சட்டம் 1954'
)
ON CONFLICT (id) DO NOTHING;
