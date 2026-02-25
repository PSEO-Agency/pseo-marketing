import { createClient } from "@supabase/supabase-js";

const AGENCY_SUPABASE_URL = "https://kvnovcnuqccxarjbnqil.supabase.co";
const AGENCY_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2bm92Y251cWNjeGFyamJucWlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExOTE3MTUsImV4cCI6MjA2Njc2NzcxNX0.Veoys8Ee4uEfIHNTafBqL1yAgjTCS6DsZR3gLYTXHHA";

export const agencySupabase = createClient(
  AGENCY_SUPABASE_URL,
  AGENCY_SUPABASE_ANON_KEY
);
