import { createBrowserClient } from '@supabase/ssr'
import type { SupabaseClient } from '@supabase/supabase-js'

import { getSupabaseConfig } from './supabase-config'

declare global {
  var __supabaseClient__: SupabaseClient | undefined
}

/**
 * Creates (or reuses) a browser-only Supabase client.
 * Uses @supabase/ssr for better session handling.
 * PKCE code verifier is automatically stored and managed by the client.
 */
export function createSupabaseBrowserClient() {
  if (typeof window === 'undefined') {
    throw new Error('Supabase browser client can only be created in the browser.')
  }

  const config = getSupabaseConfig()

  if (!config) {
    return null
  }

  if (!globalThis.__supabaseClient__) {
    // createBrowserClient automatically handles PKCE and stores the code verifier
    // The code verifier will be available in cookies for server-side code exchange
    globalThis.__supabaseClient__ = createBrowserClient(config.supabaseUrl, config.supabaseAnonKey)
  }

  return globalThis.__supabaseClient__
}
