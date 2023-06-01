import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cnwzvkykcukvuzuvjyau.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNud3p2a3lrY3VrdnV6dXZqeWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNzczMDgsImV4cCI6MjAwMDg1MzMwOH0.oGRVlp53sa_LAm9X41ErKp0fwL6r82VcK8aJ21ZNQEk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
