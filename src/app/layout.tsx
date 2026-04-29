import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://jakubasek.eu";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const TITLE = "Jakubasek — Štrk, kamenivo, strojové potery a omietky | Bardejov";
const DESCRIPTION =
  "Predaj a doprava štrku, kameniva a piesku, strojové betónové potery, pancierové podlahy, strojové omietky a gabiónové ploty na východnom Slovensku. Skúsenosti od roku 2003.";
const KEYWORDS = [
  "štrk",
  "kamenivo",
  "piesok",
  "strojové potery",
  "betónové potery",
  "pancierové podlahy",
  "strojové omietky",
  "gabiónové ploty",
  "preprava sypkých materiálov",
  "Bardejov",
  "východné Slovensko",
  "Jakubasek",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Jakubasek",
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: "Jakubasek",
  authors: [{ name: "Jaroslav Jakubašek", url: SITE_URL }],
  creator: "Jaroslav Jakubašek",
  publisher: "Jakubasek",
  category: "Construction",
  alternates: {
    canonical: "/",
    languages: { "sk-SK": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: SITE_URL,
    siteName: "Jakubasek",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/hero.webp",
        width: 1600,
        height: 900,
        alt: "Jakubasek — Štrk, kamenivo, potery a omietky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/hero.webp"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/logo.png", type: "image/png" }],
    shortcut: ["/favicon.ico"],
    apple: ["/logo.png"],
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Jakubasek — Jaroslav Jakubašek",
  description: DESCRIPTION,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 520,
    height: 210,
  },
  image: [
    {
      "@type": "ImageObject",
      url: `${SITE_URL}/hero.webp`,
      width: 1600,
      height: 900,
    },
    {
      "@type": "ImageObject",
      url: `${SITE_URL}/about.webp`,
      width: 960,
      height: 720,
    },
  ],
  telephone: "+421948300988",
  email: "jaroslavjakubasek@gmail.com",
  foundingDate: "2003",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rovná 8, Dlhá Lúka",
    postalCode: "085 01",
    addressLocality: "Bardejov",
    addressRegion: "Prešovský kraj",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.3071,
    longitude: 21.2787,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Prešovský kraj" },
    { "@type": "AdministrativeArea", name: "Košický kraj" },
    { "@type": "Country", name: "Slovensko" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Služby",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Štrk, piesok a kamenivo",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Strojové betónové potery",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Pancierové podlahy" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Špedícia a logistika" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Gabiónové ploty a múry" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Strojové omietky" },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <CookieBanner />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD payload
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
