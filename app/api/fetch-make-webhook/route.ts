import { NextResponse } from "next/server"

const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/rwvbxw45qksgwi4q9gyquivuys2semaz"

export async function GET() {
  try {
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Přidáme cache: 'no-store' aby se data vždy načítala čerstvá
      cache: "no-store",
    })

    if (!response.ok) {
      let errorBody = null
      try {
        errorBody = await response.json()
      } catch (e) {
        errorBody = await response.text()
      }
      console.error(
        "Error fetching from Make.com webhook (via proxy):",
        response.status,
        response.statusText,
        errorBody,
      )
      // Vracíme status a tělo chyby z Make.com, pokud je to možné
      return NextResponse.json(
        { error: `Failed to fetch from Make.com: ${response.status} ${response.statusText}`, details: errorBody },
        { status: response.status },
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Internal error in proxy API route:", error)
    let errorMessage = "Internal server error in proxy."
    if (error instanceof Error) {
      errorMessage = error.message
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
