import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chemistry Explorer | Interactive Molecular Discovery Lab",
  description: "Interactive chemistry explorer for students: explore all 118 elements in the Periodic Table, combine atoms, discover real-world molecules, and complete science quests.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full">
      <body className="min-h-screen bg-[#0b0f14] text-[#dfe2eb] flex flex-col antialiased selection:bg-[#00d2ff]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
