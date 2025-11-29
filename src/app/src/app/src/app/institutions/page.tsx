export default async function InstitutionsPage() {
  const res = await fetch("http://localhost:3001/api/institutions?limit=50", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">All Institutions</h1>

      <ul className="space-y-3">
        {data?.docs?.map((inst: any) => (
          <li key={inst.id} className="border p-4 rounded-md">
            {inst.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
