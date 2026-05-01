# Vistatec Discovery Form - Quick Start Guide

## 🚀 Quick Setup

### 1. Environment Variables
Add these to your Vercel project or `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
VISTATEC_DISCOVERY_PASSWORD=discovery_password
VISTATEC_DISCOVERY_ADMIN_PASSWORD=admin_password
```

### 2. Database Setup
Run `database/vistatec_discovery_schema.sql` in your Supabase SQL editor.

### 3. Deploy
Push to trigger Vercel deployment.

## 📍 Access URLs

- **Discovery Form**: `/vistatec-discovery`
- **Admin Interface**: `/vistatec-discovery/admin`

## 📋 Form Sections

1. Contact Details
2. Strategic Intent  
3. Current Opportunity Landscape
4. Existing Capability
5. Current Decision Process
6. Delivery Constraints
7. Risk & Unknowns
8. Pilot Candidate
9. Additional Context

## ✨ Key Features

- Password-protected access
- Auto-save every 30 seconds
- Progress tracking
- Admin interface with export
- Mobile responsive
- Supabase + localStorage fallback

## 🔧 Features Included

- ✅ Password gate with API authentication
- ✅ 8 comprehensive form sections
- ✅ Auto-save functionality
- ✅ Progress indicator
- ✅ Admin interface
- ✅ JSON/CSV export
- ✅ Mobile responsive design
- ✅ TypeScript types
- ✅ Validation & error handling
- ✅ Supabase integration
- ✅ LocalStorage fallback

## 📁 Files Created

```
src/
├── app/vistatec-discovery/
│   ├── page.tsx              # Main discovery form
│   └── admin/page.tsx        # Admin interface
├── app/api/vistatec-discovery/
│   └── auth/route.ts         # Authentication API
├── components/
│   ├── PasswordGate.tsx      # Password protection
│   ├── DiscoveryForm.tsx     # Main form component
│   ├── FormSection.tsx       # Form sections/fields
│   └── ProgressBar.tsx       # Progress indicator
├── lib/supabase.ts           # Database service
└── types/vistatec-discovery.ts # TypeScript types

database/
└── vistatec_discovery_schema.sql # Database schema

.env.example                    # Environment variables template
VISTATEC_DISCOVERY_SETUP.md    # Full documentation
```

## 🎯 Next Steps

1. Set up Supabase project
2. Run database schema
3. Configure environment variables
4. Deploy to Vercel
5. Test both discovery and admin interfaces

---

*Production-ready discovery form for Vistatec by Stealth Translations Ltd*
