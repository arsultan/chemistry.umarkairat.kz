import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/host-montserrat/8298327da6d5bcce-s.p.3q4n78m6muld7.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/host-montserrat/44fac91e6f2d2b1b-s.p.1d_6dtvtn9g3_.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/host-montserrat/e8f2fbee2754df70-s.p.1dqa_6e_ad4sj.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/host-montserrat/a88409fdd7dc121c-s.1mvr14jy3vxq7.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/host-montserrat/2b402d8aebffd579-s.16nfeub7ja6ze.woff2",
      weight: "300 900",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
  fallback: ["Montserrat", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${montserrat.className} font-sans min-h-screen flex flex-col antialiased selection:bg-indigo-500/25 selection:text-white transition-colors duration-200`}>
        {children}
      </body>
    </html>
  );
}
