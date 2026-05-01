# Vistatec Discovery Form Setup Guide

This guide explains how to set up and deploy the Vistatec Discovery Form for Stealth Translations Ltd.

## Overview

The Vistatec Discovery Form is a password-protected, production-ready Next.js application designed to capture comprehensive information about Vistatec's data engineering and annotation service development opportunities.

## Features

- **Password Protection**: Secure access for both discovery form and admin interface
- **Multi-section Form**: 8 comprehensive sections covering strategic intent to pilot candidates
- **Auto-save functionality**: Saves draft responses every 30 seconds
- **Progress tracking**: Visual progress indicator and section navigation
- **Admin Interface**: View, export, and manage submissions
- **Responsive Design**: Works on desktop and mobile devices
- **Database Integration**: Supabase backend with localStorage fallback
- **Export Capabilities**: JSON and CSV export for analysis

## Required Environment Variables

Add these to your Vercel environment variables or `.env.local` file:

```bash
# Supabase Configuration (Required for database storage)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Password Protection (Required)
VISTATEC_DISCOVERY_PASSWORD=your_discovery_password
VISTATEC_DISCOVERY_ADMIN_PASSWORD=your_admin_password
```

## Database Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key from Settings > API

### 2. Run Database Schema

Copy the contents of `database/vistatec_discovery_schema.sql` and run it in your Supabase SQL Editor:

```sql
-- This creates the vistatec_discovery_responses table
-- with proper indexes, RLS policies, and triggers
```

### 3. Configure Row Level Security (RLS)

The schema includes RLS policies that:
- Allow anyone to insert submissions (public form access)
- Restrict reading/updating to authenticated users only
- Enable admin access through the admin interface

## File Structure

```
src/
├── app/
│   ├── vistatec-discovery/
│   │   ├── page.tsx                 # Main discovery form page
│   │   └── admin/
│   │       └── page.tsx             # Admin interface
│   └── api/
│       └── vistatec-discovery/
│           └── auth/
│               └── route.ts         # Authentication API
├── components/
│   ├── PasswordGate.tsx             # Password protection component
│   ├── DiscoveryForm.tsx            # Main form component
│   ├── FormSection.tsx              # Form section and field components
│   └── ProgressBar.tsx              # Progress indicator
├── lib/
│   └── supabase.ts                  # Supabase client and database service
└── types/
    └── vistatec-discovery.ts        # TypeScript type definitions
```

## Deployment Instructions

### 1. Vercel Deployment

1. **Connect Repository**: Link your stealth-translations repository to Vercel
2. **Configure Environment Variables**: Add all required environment variables
3. **Deploy**: Push changes or trigger deployment

### 2. Local Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your environment variables to .env.local

# Run development server
npm run dev
```

## Access URLs

After deployment, access the forms at:

- **Discovery Form**: `https://your-domain.vercel.app/vistatec-discovery`
- **Admin Interface**: `https://your-domain.vercel.app/vistatec-discovery/admin`

## Usage Instructions

### For Vistatec Users

1. **Access the Form**: Navigate to the discovery form URL
2. **Enter Password**: Use the provided discovery password
3. **Complete Sections**: Fill out all 8 sections progressively
4. **Auto-save**: Form saves automatically every 30 seconds
5. **Manual Save**: Use "Save Draft" button for manual saves
6. **Submit**: When complete, click "Submit Discovery Response"

### For Administrators

1. **Access Admin**: Navigate to the admin URL
2. **Enter Admin Password**: Use the admin password
3. **View Submissions**: Browse all draft and submitted responses
4. **Export Data**: Download responses as JSON or CSV
5. **Manage Responses**: View details, delete if necessary

## Form Sections Overview

1. **Contact Details**: Basic information and stakeholders
2. **Strategic Intent**: Objectives, classification, and success criteria
3. **Current Opportunity Landscape**: Request types and promising opportunities
4. **Existing Capability**: Internal teams, strengths, and gaps
5. **Current Decision Process**: Assessment and decision-making
6. **Delivery Constraints**: Known constraints and bottlenecks
7. **Risk & Unknowns**: Confidence gaps and concerning risks
8. **Pilot Candidate**: Specific opportunity for initial pilot
9. **Additional Context**: Extra information and resources

## Data Storage

### With Supabase (Recommended)
- Responses stored in `vistatec_discovery_responses` table
- Automatic timestamps and session tracking
- Full CRUD operations through admin interface
- Export capabilities for data analysis

### Without Supabase (Fallback)
- Uses localStorage for draft storage
- Console warnings about missing database
- Limited functionality (no admin interface, no export)

## Security Considerations

- Passwords stored in environment variables only
- Session-based authentication (24-hour expiry)
- HTTPS required for production
- No sensitive data exposed in client code
- Row Level Security on database tables

## Customization

### Branding
- Update company name in headers and footers
- Modify colors in Tailwind CSS classes
- Add logo to public/images folder

### Form Fields
- Edit TypeScript types in `src/types/vistatec-discovery.ts`
- Modify form sections in `src/components/DiscoveryForm.tsx`
- Update database schema if adding new fields

### Password Protection
- Change passwords in environment variables
- Modify authentication logic in `src/app/api/vistatec-discovery/auth/route.ts`

## Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check Supabase URL and keys
   - Verify RLS policies are correctly configured
   - Ensure Supabase project is active

2. **Password Not Working**
   - Verify environment variables are set
   - Check for typos in password
   - Clear browser sessionStorage

3. **Auto-save Not Working**
   - Check browser console for errors
   - Verify Supabase connection
   - Ensure localStorage is available

4. **Admin Interface Empty**
   - Verify admin password
   - Check database permissions
   - Ensure submissions exist in database

### Debug Mode

For debugging, add this to your environment variables:
```bash
DEBUG=vistatec-discovery
```

This will enable additional console logging.

## Support

For technical issues or questions about the discovery form:

1. Check this documentation first
2. Review browser console for errors
3. Verify all environment variables are set
4. Test with different browsers if needed

## Version History

- **v1.0.0**: Initial release with all 8 form sections, password protection, and admin interface

---

*Prepared by Stealth Translations Ltd*
