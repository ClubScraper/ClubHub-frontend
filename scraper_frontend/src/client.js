import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rrracbpsofoevdjwkhtw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJycmFjYnBzb2ZvZXZkandraHR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0NTIxOTIsImV4cCI6MjAzNTAyODE5Mn0.SuR6SSEtYRY6cYGIbbXLRgnBJPrUaqKCKBJgMMZZ8Lk'
export const supabase = createClient(supabaseUrl, supabaseKey)