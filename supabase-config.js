// Iridescent Supabase configuration
const SUPABASE_URL = "https://vicatvajwmcvylxznxal.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_jozfDjnNexXPsK9o6yVCRw_b0hLjyqy";
const SUPABASE_BUCKET = "WebsitePhotos";
const IRIDESCENT_ADMIN_UID = "74914938-426b-4b6e-96ce-273c0005fc85";

const supabaseConfigured =
  SUPABASE_URL.startsWith("https://") &&
  !SUPABASE_URL.includes("PASTE_YOUR") &&
  !SUPABASE_ANON_KEY.includes("PASTE_YOUR");

const supabaseClient = supabaseConfigured
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
