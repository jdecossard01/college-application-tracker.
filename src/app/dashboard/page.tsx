import Link from "next/link";
import { Institution } from "@/payload-types";

export default async function DashboardPage() {
  // Temporary fetch - your partner may replace this
  const res = await fetch("http://localhost:3000/api/tracked?limit=50", {
    cache: "no-store",
  });

  const data: { docs?: Institution[] } = await res.json();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Your Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-4">Tracked Institutions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.docs?.length ? (
          data.docs.map((inst) => (
            <div
              key={inst.id}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold">{inst.name}</h3>
              <p className="text-sm text-gray-600">{inst.website}</p>

              <div className="mt-3">
                <Link
                  href={`/institutions/${inst.slug}`}
                  className="text-indigo-600 hover:underline"
                >
                  View Institution →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            You are not tracking any institutions yet.
          </p>
        )}
      </div>
    </div>
  );
}
