import type { Metadata, Viewport } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SkipLink } from "@/components/layout/SkipLink";
import { siteConfig } from "@/data/site";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.brandName}`,
  },
  description: `${siteConfig.category}. ${siteConfig.supportingLine}`,
  icons: {
    icon: "/logo/kenenet_consultancy_logo_transparent.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FCFBF9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kenenét Consultancy",
    tagline: "Transforming Workplaces.",
    description: "Ethiopian organizational and management consultancy. Organizational excellence for sustainable change.",
    url: "https://kenenet.com",
    logo: "https://kenenet.com/logo/kenenet_consultancy_logo_transparent.png",
  };

  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${sourceSans3.variable} scroll-smooth bg-paper`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-paper text-ink antialiased">
        <SkipLink />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

