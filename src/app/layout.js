// app/layout.js
import "./globals.css";

import TransitionWrapper from "./components/transition-wrapper";
import FirstFrameHeader from "./components/navbar";

export const metadata = {
  title: {
    default: "Slamm SOC Experts — Advanced Cybersecurity & SOC Services",
    template: "%s | Slamm SOC Experts",
  },
  description:
    "Slamm SOC Experts specializes in AI-driven cybersecurity and Security Operations Center (SOC) services, delivering proactive protection and resilience for your business.",
  keywords: [
    "cybersecurity",
    "SOC services",
    "security operations center",
    "AI cybersecurity",
    "threat detection",
    "cyber defense",
    "security monitoring",
    "Slamm SOC Experts",
    "incident response",
    "proactive security",
    "cyber resilience",
    "AI-driven SOC",
    "24/7 monitoring",
    "cyber threat intelligence",
    "network security",
    "data protection",
    "vulnerability management",
    "Ghana cybersecurity",
    "West Africa SOC",
    "cybersecurity consulting",
    "cybersecurity solutions",
    "cybersecurity experts",
    "cybersecurity services",
  ],
  authors: [{ name: "Slamm SOC Experts", url: "https://slammsocexperts.com" }],
  creator: "Slamm SOC Experts",
  publisher: "Slamm SOC Experts",
  manifest: "/site.webmanifest",
  themeColor: "#0f172a",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Slamm SOC Experts — Advanced Cybersecurity & SOC Services",
    description:
      "Specializing in AI-driven Security Operations Center services, Slamm SOC Experts offers industry-leading threat detection, response, and resilience.",
    url: "https://slammsocexperts.com",
    siteName: "Slamm SOC Experts",
    images: [
      {
        url: "https://slammsoc.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Slamm SOC Experts Cybersecurity Solutions",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slamm SOC Experts — AI-Driven Cybersecurity & SOC",
    description:
      "Proactive cybersecurity and threat mitigation with Slamm SOC Experts' advanced AI-powered SOC solutions.",
    siteId: "@slammGh",
    creator: "@SlammGh",
    images: ["https://slammsoc.com/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* FIXED: Only preload fonts that actually exist and are used in LCP */}
        <link
          rel="preload"
          href="/EncodeSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* REMOVED: These were causing 5.78s render delay
        <link
          rel="preload"
          href="/Aeonik-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Inter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        */}
      </head>
      <body>
        <FirstFrameHeader />
     
          {children}

      </body>
    </html>
  );
}