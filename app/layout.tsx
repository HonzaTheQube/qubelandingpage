import type React from "react"
import "./globals.css"
import { Oswald, DM_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  preload: true,
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
})

export const metadata = {
  title: "Qube AI | Váš AI zaměstnanec",
  description: "Postavte si vlastního AI zaměstnance, který pracuje 24/7 a přesně podle vašich pravidel.",
  generator: "v0.dev",
  keywords: "AI zaměstnanec, automatizace, umělá inteligence, business, efektivita",
  authors: [{ name: "Qube AI" }],
  creator: "Qube AI",
  publisher: "Qube AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Qube AI | Váš AI zaměstnanec",
    description: "Postavte si vlastního AI zaměstnance, který pracuje 24/7 a přesně podle vašich pravidel.",
    url: "/",
    siteName: "Qube AI",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qube AI - Váš AI zaměstnanec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qube AI | Váš AI zaměstnanec",
    description: "Postavte si vlastního AI zaměstnance, který pracuje 24/7 a přesně podle vašich pravidel.",
    images: ["/og-image.png"],
  },
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
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-48.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon-80.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-48.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://app.usercentrics.eu" />
        <link rel="preconnect" href="https://web.cmp.usercentrics.eu" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://app.usercentrics.eu" />
        <link rel="dns-prefetch" href="https://web.cmp.usercentrics.eu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B5CF9" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-48.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-80.png" />
        <link rel="shortcut icon" href="/favicon-48.png" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Qube AI - Váš AI zaměstnanec" />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Usercentrics Cookie Consent Management - Only load in production environment */}
        {process.env.NODE_ENV === "production" && (
          <>
            <script src="https://web.cmp.usercentrics.eu/modules/autoblocker.js"></script>
            <script
              id="usercentrics-cmp"
              src="https://web.cmp.usercentrics.eu/ui/loader.js"
              data-settings-id="WJtlEF-C18Rtub"
              async
            ></script>
          </>
        )}

        {/* Google Tag Manager - Data Layer Initialization (musí být před GTM skriptem) */}
        <Script
          id="gtm-datalayer"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}`,
          }}
        />

        {/* Google Tag Manager */}
        {process.env.NODE_ENV === "production" && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MJKT92T7');`,
            }}
          />
        )}
      </head>
      <body className={`${oswald.variable} ${dmSans.variable} font-body bg-dark text-light`}>
        {process.env.NODE_ENV === "production" && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MJKT92T7"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
