import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, lastName, tier = "standard" } = await req.json()

    // Simulace vytvoření platby - ve skutečnosti pouze přesměrujeme na thank-you stránku
    // V reálném nasazení byste zde měli integraci s platební bránou

    // Vytvoříme URL s parametry
    const baseUrl = `${req.headers.get("origin")}/thank-you`
    const url = new URL(baseUrl)

    // Přidáme parametry
    url.searchParams.append("email", email)
    url.searchParams.append("firstName", firstName)
    url.searchParams.append("lastName", lastName)
    url.searchParams.append("tier", tier)

    // Přidáme simulovaný session_id
    const sessionId = `sim_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`
    url.searchParams.append("session_id", sessionId)

    // Vrátíme URL pro přesměrování
    return NextResponse.json({ url: url.toString() })
  } catch (error: any) {
    console.error("Checkout error:", error)
    return NextResponse.json({ error: `Chyba při zpracování: ${error.message}` }, { status: 500 })
  }
}
