"use client"

import { useState, useEffect } from "react"

interface SeatsData {
  remainingSeats: number
  totalSeats: number
  lastUpdated: string
  isLoading: boolean
  error: string | null
}

const TOTAL_SEATS = 60
const DEFAULT_RESERVED_COUNT = 10
// URL naší interní proxy API route
const INTERNAL_API_URL = "/api/fetch-make-webhook"

export function useSeatsData(): SeatsData {
  const [data, setData] = useState<SeatsData>({
    remainingSeats: TOTAL_SEATS - DEFAULT_RESERVED_COUNT,
    totalSeats: TOTAL_SEATS,
    lastUpdated: "",
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    const fetchSeatsData = async () => {
      setData((prev) => ({ ...prev, isLoading: true, error: null }))
      try {
        // Voláme naši interní proxy API route
        const response = await fetch(INTERNAL_API_URL, {
          method: "GET",
          cache: "no-store", // Zajistíme, že se data vždy načítají čerstvá
        })

        if (!response.ok) {
          let errorBody = null
          try {
            errorBody = await response.json()
          } catch (e) {
            errorBody = await response.text()
          }
          console.error("Error from internal proxy API:", response.status, response.statusText, errorBody)
          throw new Error(
            `Failed to fetch seats data via proxy. Status: ${response.status} ${response.statusText}. Details: ${JSON.stringify(errorBody)}`,
          )
        }

        const result = await response.json()
        console.log("Data from internal proxy API success:", result)

        // Zpracování odpovědi z našeho proxy (který by měl vracet formát z Make.com)
        const reservedCount = typeof result.count === "number" ? result.count : DEFAULT_RESERVED_COUNT
        const currentRemainingSeats = Math.max(0, TOTAL_SEATS - reservedCount)

        setData({
          remainingSeats: currentRemainingSeats,
          totalSeats: TOTAL_SEATS,
          lastUpdated: new Date().toISOString(),
          isLoading: false,
          error: null,
        })
      } catch (error) {
        console.error("Error fetching seats data using internal proxy:", error)

        let errorMessage = "Došlo k neznámé chybě při načítání dat o místech."
        if (error instanceof TypeError && error.message === "Failed to fetch") {
          errorMessage =
            "Chyba sítě: Nepodařilo se načíst data ze serveru. Zkontrolujte prosím své internetové připojení a zkuste to znovu. API endpoint může být dočasně nedostupný."
        } else if (error instanceof Error) {
          errorMessage = error.message
        }

        setData((prev) => ({
          ...prev,
          isLoading: false,
          error: errorMessage,
          remainingSeats: prev.lastUpdated === "" ? TOTAL_SEATS - DEFAULT_RESERVED_COUNT : prev.remainingSeats,
        }))
      }
    }

    fetchSeatsData()

    // const intervalId = setInterval(fetchSeatsData, 5 * 60 * 1000)

    // return () => clearInterval(intervalId)
  }, [])

  return data
}
