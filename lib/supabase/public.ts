// lib/supabase/public.ts
import { createClient } from '@supabase/supabase-js';

// Safe for static pre-rendering (no cookies accessed)
export const supabasePublic = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);