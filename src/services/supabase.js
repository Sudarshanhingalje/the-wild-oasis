import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hlpkxnzqfibmviprxkoc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhscGt4bnpxZmlibXZpcHJ4a29jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwNzcwNzUsImV4cCI6MjA2NjY1MzA3NX0.2iIVu6s5Rj-a22iMGW5G3IFWVGgMPJVbLeZQVYxw2ss";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
