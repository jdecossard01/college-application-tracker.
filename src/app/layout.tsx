import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "College Tracker",
  description: "Track college deadlines easily.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        {/* Navigation Bar */}
        <nav className="p-4 bg-white dark:bg-gray-900 shadow">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="font-bold text-xl dark:text-white">College Tracker</a>
            <div className="flex items-center space-x-6">
              <a href="/institutions" className="hover:text-indigo-600 dark:text-gray-300">
                Institutions
              </a>
              <a href="/dashboard" className="hover:text-indigo-600 dark:text-gray-300">
                Dashboard
              </a>

              {/* Dark mode */}
              <button
                onClick={() => {
                  document.documentElement.classList.toggle("dark");
                }}
                className="px-3 py-1 border rounded dark:text-white dark:border-white"
              >
                Toggle Dark
              </button>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
