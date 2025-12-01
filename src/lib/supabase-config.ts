export type SupabaseConfig = {
  supabaseUrl: string
  supabaseAnonKey: string
}

export function getSupabaseConfig(): SupabaseConfig | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return null
  }

  return { supabaseUrl, supabaseAnonKey }
}

export function hasSupabaseConfig(): boolean {
  return getSupabaseConfig() !== null
}
