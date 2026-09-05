import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0b0f14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Chemistry Explorer | Interactive Molecular Discovery Lab",
  description: "Interactive chemistry explorer for students: explore all 118 elements in the Periodic Table, combine atoms, discover real-world molecules, and complete science quests.",
  metadataBase: new URL("https://chemistry.umarkairat.kz"),
  openGraph: {
    title: "Chemistry Explorer | Interactive Molecular Discovery Lab",
    description: "Explore all 118 elements, combine atoms (H + H + O → H₂O), discover 50+ substances, and track your science discoveries.",
    url: "https://chemistry.umarkairat.kz",
    siteName: "Chemistry Explorer",
    type: "website",
    locale: "ru_RU",
  },
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
