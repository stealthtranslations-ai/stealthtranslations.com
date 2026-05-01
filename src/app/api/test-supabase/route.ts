import { NextRequest, NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export async function GET() {
  return NextResponse.json({
    isSupabaseConfigured,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    supabaseExists: !!supabase,
    timestamp: new Date().toISOString()
  });
}
