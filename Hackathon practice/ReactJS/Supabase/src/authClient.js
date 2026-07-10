import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://ilouirfvcrmhvarhvkfg.supabase.co';
const supabaseKey = 'sb_publishable_lYjmd-_mYC2gUrpR4aHYtQ_jIC4llAo';

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase URL or Key! Check your environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);