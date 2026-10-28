import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/site";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-outfit", display: "swap", adjustFontFallback: false });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap", adjustFontFallback: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  keywords: ["Naclite", "Naclite LLC", "consumer brands", "commerce", "Wyoming"],
  openGraph: { type: "website", siteName: site.name, title: `${site.name} — ${site.tagline}`, description: site.description, url: site.url },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: "US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
