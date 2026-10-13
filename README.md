# அரசியல் அறிவு — Arasiyal Arivu
### Tamil Nadu Political Transparency & Civic Information Portal

> **Know Your Government. உங்கள் அரசாங்கத்தை அறிந்துகொள்ளுங்கள்.**

---

## 🌿 Overview

**Arasiyal Arivu** is a strictly non-partisan, open civic transparency platform for Tamil Nadu citizens. It provides:

- Verified **MLA and MP profiles** with constituency data
- Official **statutory salaries and allowances** (with key distinctions between personal pay vs development funds)
- **Constitutional powers and responsibilities** of each role
- **Tamil Nadu political history timeline** from 1952 to present
- **District and constituency explorer** across all 38 districts
- **Public records library** sourced from official government archives
- **Bilingual (Tamil / English)** interface with localStorage preference
- **Protected admin dashboard** for data management and correction review
- **Citizen correction submission** for crowdsourced accuracy auditing

All data sourced exclusively from:
- Tamil Nadu Legislative Assembly (NEVA Portal): https://tnla.neva.gov.in/
- Election Commission of India: https://www.eci.gov.in/
- Digital Sansad: https://sansad.in/
- Ministry of Parliamentary Affairs: https://mpa.gov.in/
- Tamil Nadu Government Portal: https://www.tn.gov.in/

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16 (App Router) with TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Charts | Recharts |
| Form Validation | Native + Zod (ready) |
| Database | Supabase PostgreSQL (optional) |
| Authentication | Supabase Auth (optional) |
| State Management | React Context + localStorage |
| Deployment | Vercel (recommended) |

---

## 🚀 Installation & Development

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### 1. Clone or download the repository

```bash
# If using git
git clone <your-repo-url>
cd ARASIYAL
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
# Copy the example file
cp .env.example .env.local
```

The application **runs fully in demo mode without Supabase credentials**. Leave the Supabase fields empty in `.env.local` to use the verified offline dataset.

To connect Supabase, fill in:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run development server

```bash
npm run dev
```

Open http://localhost:3000

### 5. Build for production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
src/
├── app/                     # Next.js App Router pages
│   ├── page.tsx             # Home Dashboard
│   ├── layout.tsx           # Root layout with providers
│   ├── politicians/         # Directory + Individual profiles [id]
│   ├── mlas/                # MLAs of Tamil Nadu
│   ├── mps/                 # MPs representing Tamil Nadu
│   ├── ministers/           # CM & Cabinet
│   ├── salary/              # Official Remuneration Comparison
│   ├── powers/              # Constitutional Powers & Responsibilities
│   ├── history/             # Political Timeline (1952–Present)
│   ├── districts/           # District & Constituency Explorer
│   ├── records/             # Public Records Library
│   ├── saved/               # Bookmarked Profiles
│   ├── about/               # Mission, Sources & Corrections
│   └── admin/               # Protected Admin Dashboard
├── components/
│   ├── AppShell.tsx         # Responsive layout wrapper
│   ├── Navbar.tsx           # Top navigation bar
│   ├── Sidebar.tsx          # Desktop sidebar & mobile drawer
│   ├── MobileNav.tsx        # Bottom navigation (mobile)
│   ├── Footer.tsx           # Footer with source links
│   ├── PoliticianCard.tsx   # Reusable representative card
│   ├── SalaryChart.tsx      # Recharts salary visualizations
│   ├── DistrictMapExplorer.tsx # Interactive district browser
│   ├── CorrectionModal.tsx  # Citizen correction form
│   └── VerificationBadge.tsx # Verification status indicator
├── data/
│   └── seedData.ts          # Verified demo dataset
├── lib/
│   ├── i18n.tsx             # Tamil/English translation context
│   ├── storeContext.tsx     # Data store with CRUD operations
│   └── supabase.ts          # Supabase client (optional)
└── types/
    └── index.ts             # TypeScript type definitions
supabase/
└── migrations/
    ├── 01_initial_schema.sql  # Full 16-table PostgreSQL schema with RLS
    └── 02_seed_data.sql       # Initial verified seed data
```

---

## 🗄 Database Setup (Supabase — Optional)

1. Create a project at https://supabase.com
2. Navigate to **SQL Editor** in the Supabase dashboard
3. Execute migrations in order:
   ```
   supabase/migrations/01_initial_schema.sql
   supabase/migrations/02_seed_data.sql
   ```
4. Add your credentials to `.env.local`
5. The app will automatically use live database instead of local demo data

### Row Level Security
- **Public**: Read-only access to all published political data
- **Citizens**: Can submit correction reports
- **Admin**: Full read/write with Supabase Auth role checks

---

## 🔐 Admin Dashboard

### Demo Access (Local Dev)
- Email: `admin@arasiyalarivu.tn.gov.in`
- Password: `admin123`

> ⚠️ **Change these credentials immediately in production. Never use demo credentials on a live server.**

### Admin Features
- View all politician records and verification status
- Review and resolve citizen correction requests
- Monitor audit logs of all data changes

### Production Admin Setup
1. Create a Supabase user with role `admin`
2. Update Row Level Security policies with the admin email domain
3. Set `SUPABASE_SERVICE_ROLE_KEY` securely in server-side environment (never in client)

---

## ☁️ Deployment (Vercel)

1. Push code to GitHub / GitLab
2. Import project at https://vercel.com/new
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL` (your domain)
4. Deploy

---

## 🌐 Language Support

The interface supports **Tamil (தமிழ்)** and **English**:
- Switch using the toggle in the top navigation bar
- Preference is saved in `localStorage`
- All UI labels, navigation, empty states, and error messages are translated
- Politician profiles include both Tamil and English names, biographies, and positions

---

## ⚖️ Political Neutrality

Arasiyal Arivu is **strictly non-partisan**:
- Identical design and verification standards for all political parties
- No rankings, scores, or performance ratings
- Allegations clearly distinguished from verified official records
- Citizens can flag inaccurate data via the Correction Request system
- Data unavailability is honestly labeled — absence of records ≠ absence of work

---

## ✅ Implemented Features

| Feature | Status |
|---------|--------|
| Home dashboard with search | ✅ |
| Politician directory with filters | ✅ |
| Individual politician profiles (6 tabs) | ✅ |
| MLA page with assembly stats | ✅ |
| MP page with parliamentary stats | ✅ |
| CM & Ministers page | ✅ |
| Salary comparison with Recharts | ✅ |
| Constitutional powers guide | ✅ |
| Political history timeline (1952-2026) | ✅ |
| District & constituency explorer | ✅ |
| Public records library | ✅ |
| Saved profiles with localStorage | ✅ |
| Tamil / English language switch | ✅ |
| Citizen correction modal | ✅ |
| Protected admin dashboard | ✅ |
| Audit logs | ✅ |
| Verification badges | ✅ |
| Supabase PostgreSQL schema (16 tables) | ✅ |
| Row Level Security policies | ✅ |
| Responsive layout (desktop + mobile) | ✅ |
| Mobile bottom navigation | ✅ |
| Offline verified demo dataset | ✅ |
| .env.example configuration template | ✅ |

---

## ⚠️ Known Limitations

- Demo dataset includes 7 verified representative profiles (expandable via Admin dashboard or Supabase)
- 38 districts mapped but detailed constituency data shown for documented cases only
- Legislative records sourced from publicly digitized Assembly proceedings
- Supabase live sync requires credentials; offline mode uses static verified data
- Photo URLs use stock placeholders — production should use official photographs under permitted use

---

## 📄 Disclaimer

Arasiyal Arivu is a public educational and civic transparency initiative. Content does not constitute legal advice or an official government gazette. All salaries and allowances shown are statutory figures from official notifications — not fabricated or estimated. Verify critical decisions against original sources linked throughout the platform.
