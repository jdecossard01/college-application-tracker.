import "./globals.css";

export const metadata = {
  title: "College Application Tracker",
  description: "Track your college deadlines and applications",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
