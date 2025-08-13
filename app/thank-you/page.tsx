"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"
import YouTubePlayer from "@/components/youtube-player"
import { useEffect } from "react"
import { pixelEvents } from "@/lib/meta-pixel-events"

export default function ThankYou({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const firstName = searchParams?.firstName || ""
  const tier = searchParams?.tier || "standard"

  // Sledování dokončení nákupu při načtení stránky
  useEffect(() => {
    // Určení hodnoty podle vybrané varianty
    const value = tier === "pro" ? 14997 : 9997

    // Získání session_id z URL parametrů pro lepší sledování konverzí
    const sessionId = searchParams?.session_id || `session_${Date.now()}`

    // Meta Pixel tracking
    pixelEvents.trackPurchase(value, "CZK", {
      content_name: `AI zaměstnanec - ${typeof tier === 'string' ? tier.toUpperCase() : 'STANDARD'}`,
      content_type: "product",
      content_category: "kurz",
      transaction_id: sessionId,
      num_items: 1,
    })

    // Google Ads conversion tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17137817348/vsHOCN20s9MaEISu-es_",
        transaction_id: sessionId,
        value: value,
        currency: "CZK",
      })
    }
  }, [tier, searchParams])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-light text-center px-4 bg-dark">
      <div className="max-w-5xl mx-auto py-16 px-4">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-primary" />
          </div>
        </div>

        <h1 className="text-4xl lg:text-5xl font-display font-extrabold mb-12">
          Děkujeme za vaši důvěru{firstName ? `, ${firstName}` : ""}!
        </h1>

        <div className="w-full shadow-neon mb-10 rounded-xl overflow-hidden">
          <YouTubePlayer videoId="P0agzhQ3b3o" title="Úvodní video ke kurzu" className="w-full h-full" />
        </div>

        <div className="bg-surface/30 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-4">Co dál?</h2>
          <ol className="text-left space-y-4">
            <li className="flex items-start">
              <span className="bg-primary/20 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                1
              </span>
              <span>
                Zkontrolujte svůj e-mail, kde vám dojde mail pro potvrzení objednávky se všemi potřebnými počátečními
                informacemi.
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/20 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                2
              </span>
              <span>
                Kurz začíná 11. září 2025 – do e-mailu vám přijde pozvánka do našeho společného kalendáře, po jejím
                přijetí se vám všechny naše plánované sessions automaticky propíšou do vašeho kalendáře.
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary/20 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                3
              </span>
              <span>No a jako poslední věc si připravte dobrou náladu 😊</span>
            </li>
          </ol>
        </div>

        <p className="text-light/60 max-w-md mx-auto mb-8">
          Těšíme se na vás v kurzu! Pokud budete mít jakékoliv dotazy, neváhejte nás kontaktovat na{" "}
          <a href="mailto:qube@theqube.tech" className="text-primary hover:underline">
            qube@theqube.tech
          </a>
        </p>

        <Button variant="outline" asChild className="flex items-center gap-2">
          <Link href="/">
            <ArrowLeft size={16} />
            Zpět na hlavní stránku
          </Link>
        </Button>
      </div>
    </main>
  )
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
