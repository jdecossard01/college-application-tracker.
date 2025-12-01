import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

import { getSupabaseConfig } from './supabase-config'

/**
 * Creates a Supabase client for server-side operations.
 * This client reads cookies to maintain the user session.
 */
export async function createSupabaseServerClient() {
  const config = getSupabaseConfig()

  if (!config) {
    return null
  }

  const cookieStore = await cookies()

  return createServerClient(config.supabaseUrl, config.supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}
