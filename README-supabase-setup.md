# Supabase Setup Guide

## Quick Setup Steps

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create a new project
4. Note your project URL and anon key

### 2. Create Database Table
In your Supabase project dashboard, go to SQL Editor and run:

```sql
-- Create email signups table
CREATE TABLE email_signups (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  source VARCHAR(50) DEFAULT 'early-access',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX idx_email_signups_created_at ON email_signups(created_at DESC);
CREATE INDEX idx_email_signups_source ON email_signups(source);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for the anon key)
CREATE POLICY "Allow public email signup inserts" ON email_signups
    FOR INSERT WITH CHECK (true);

-- Create policy to allow reads for authenticated users only
CREATE POLICY "Allow authenticated reads" ON email_signups
    FOR SELECT USING (auth.role() = 'authenticated');
```

### 3. Configure Environment Variables
1. Copy `.env.example` to `.env`
2. Fill in your Supabase credentials:

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
NODE_ENV=development
```

### 4. Test the Integration
1. Open your website locally
2. Fill out the early access form
3. Check your Supabase dashboard → Table Editor → email_signups

## Security Notes

### For Development:
- The `.env` file is for local development only
- It's included in `.gitignore` to prevent accidental commits

### For Production:
- Use your hosting platform's environment variable system
- For static sites (Netlify, Vercel), use their environment variable settings
- Replace the env-loader.js with build-time environment injection

## Database Schema

```sql
Table: email_signups
┌─────────────┬─────────────────────────┬─────────────┐
│ Column      │ Type                    │ Constraints │
├─────────────┼─────────────────────────┼─────────────┤
│ id          │ SERIAL                  │ PRIMARY KEY │
│ email       │ VARCHAR(255)            │ UNIQUE, NOT NULL │
│ source      │ VARCHAR(50)             │ DEFAULT 'early-access' │
│ created_at  │ TIMESTAMP WITH TIME ZONE│ DEFAULT NOW() │
└─────────────┴─────────────────────────┴─────────────┘
```

## API Usage

The form will automatically POST to:
```
POST https://your-project-id.supabase.co/rest/v1/email_signups
Headers:
- apikey: your-anon-key
- Authorization: Bearer your-anon-key
- Content-Type: application/json

Body:
{
  "email": "user@example.com",
  "source": "early-access",
  "created_at": "2024-01-01T00:00:00.000Z"
}
```

## Viewing Your Data

1. Go to your Supabase dashboard
2. Navigate to "Table Editor"
3. Select "email_signups" table
4. View all collected emails with timestamps

## Export Data

You can export your email list anytime:
1. In Supabase dashboard → Table Editor
2. Select all rows in email_signups table  
3. Click "Export" → CSV format
4. Use for your email marketing campaigns

## Troubleshooting

### Common Issues:
1. **CORS errors**: Make sure your domain is added to Supabase Auth settings
2. **401 Unauthorized**: Check your anon key is correct
3. **Network errors**: Verify your Supabase URL is correct

### Debug Mode:
Check browser console for detailed error messages when form submission fails.