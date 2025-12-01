import { redirect } from 'next/navigation'

import { DashboardContent } from '@/components/dashboard/dashboard-content'
import { NavHeader } from '@/components/dashboard/nav-header'
import { createSupabaseServerClient } from '@/lib/supabase-server'

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient()

  if (!supabase) {
    return (
      <div className="relative min-h-screen selection:bg-primary/20">
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black">
          <div className="absolute -left-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[120px]" />
          <div className="absolute -right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
          <div className="absolute bottom-0 left-[20%] h-[500px] w-[500px] rounded-full bg-slate-500/5 blur-[100px]" />
        </div>

        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="max-w-xl space-y-3 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-8 text-yellow-50 shadow-2xl">
            <p className="text-lg font-semibold">Supabase credentials required</p>
            <p className="text-sm text-yellow-100/80">
              Add <code className="font-mono">NEXT_PUBLIC_SUPABASE_URL</code> and
              <code className="font-mono"> NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to access the dashboard.
            </p>
            <p className="text-sm text-yellow-100/80">
              Once the environment variables are set, restart the dev server and refresh this page to load your
              account data.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/')
  }

  return (
    <div className="relative min-h-screen selection:bg-primary/20">
      {/* Elegant Background */}
      <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black">
        {/* Subtle accent lights */}
        <div className="absolute -left-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute -right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-0 left-[20%] h-[500px] w-[500px] rounded-full bg-slate-500/5 blur-[100px]" />
      </div>

      <NavHeader />
      <DashboardContent />
    </div>
  )
}
