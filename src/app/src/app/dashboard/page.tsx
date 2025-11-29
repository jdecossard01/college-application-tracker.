export default async function DashboardPage() {
  // TEMP data — your partner's backend will replace this
  const res = await fetch("http://localhost:3001/api/tracked?limit=50", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Your Dashboard</h1>

      <h2 className="text-2xl font-semibold mb-4">Tracked Institutions</h2>

      <div className="space-y-4">
        {data?.docs?.map((inst: any) => (
          <div key={inst.id} className="border p-4 rounded-lg">
            <h3 className="text-xl font-bold">{inst.name}</h3>
            <p className="text-gray-600">{inst.deadline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
