import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Chemistry Explorer | Molecular Discovery Lab",
  description: "Interactive chemistry explorer: explore 118 elements in the Periodic Table, synthesize real-world molecules, and complete science quests.",
  metadataBase: new URL("https://chemistry.umarkairat.kz"),
  openGraph: {
    title: "Chemistry Explorer | Molecular Discovery Lab",
    description: "Explore all 118 elements, synthesize molecules (H + H + O → H₂O), discover 50+ substances, and complete laboratory quests.",
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
    <html lang="ru" className={`dark h-full ${montserrat.variable}`} suppressHydrationWarning>
      <body className={`${montserrat.className} font-sans min-h-screen flex flex-col antialiased selection:bg-indigo-500/25 selection:text-white transition-colors duration-200`}>
        {children}
      </body>
    </html>
  );
}
