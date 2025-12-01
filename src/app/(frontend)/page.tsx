import { redirect } from 'next/navigation'
import React from 'react'

import { LoginCard } from '@/components/auth/login-card'
import { createSupabaseServerClient } from '@/lib/supabase-server'

export default async function HomePage() {
  const supabase = await createSupabaseServerClient()

  if (!supabase) {
    return (
      <main className="relative flex min-h-screen items-center justify-center p-4 selection:bg-primary/20">
        {/* Elegant Background */}
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black">
          {/* Subtle accent lights */}
          <div className="absolute -left-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[120px]" />
          <div className="absolute -right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
          <div className="absolute bottom-0 left-[20%] h-[500px] w-[500px] rounded-full bg-slate-500/5 blur-[100px]" />
        </div>

        <div className="w-full max-w-md space-y-4">
          <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-6 text-sm text-yellow-100 shadow-lg">
            <p className="font-semibold">Supabase credentials required</p>
            <p className="mt-2 text-yellow-100/90">
              Add <code className="font-mono">NEXT_PUBLIC_SUPABASE_URL</code> and
              <code className="font-mono"> NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to your environment to enable
              sign-in.
            </p>
            <ol className="mt-3 list-decimal space-y-1 pl-5">
              <li>Copy <code className="font-mono">.env.example</code> to <code className="font-mono">.env.local</code>.</li>
              <li>Set your Supabase project URL and anon key.</li>
              <li>Restart <code className="font-mono">pnpm dev</code>.</li>
            </ol>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/80 shadow">
            The rest of the app will load once these values are set.
          </div>
        </div>
      </main>
    )
  }

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Redirect authenticated users to dashboard
  if (user) {
    redirect('/dashboard')
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center p-4 selection:bg-primary/20">
      {/* Elegant Background */}
      <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black">
        {/* Subtle accent lights */}
        <div className="absolute -left-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute -right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-0 left-[20%] h-[500px] w-[500px] rounded-full bg-slate-500/5 blur-[100px]" />
      </div>

      <div className="w-full max-w-md">
        <LoginCard />
      </div>
    </main>
  )
}
