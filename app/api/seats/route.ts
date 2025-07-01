import { NextResponse } from "next/server"

export async function GET() {
  try {
    const totalSeats = 60 // Total capacity

    // Simulace počtu registrací
    const workshopDate = new Date("2025-09-11T00:00:00")
    const now = new Date()
    const timeRemaining = workshopDate.getTime() - now.getTime()
    const daysTillWorkshop = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))

    let registeredCount = 0

    if (daysTillWorkshop > 365) {
      registeredCount = Math.floor(totalSeats * 0.2) // 20% registered if > 1 year away
    } else if (daysTillWorkshop > 180) {
      registeredCount = Math.floor(totalSeats * 0.4) // 40% registered if > 6 months away
    } else if (daysTillWorkshop > 90) {
      registeredCount = Math.floor(totalSeats * 0.6) // 60% registered if > 3 months away
    } else if (daysTillWorkshop > 30) {
      registeredCount = Math.floor(totalSeats * 0.75) // 75% registered if > 1 month away
    } else {
      registeredCount = Math.max(totalSeats - 5, Math.floor(totalSeats * 0.9)) // Almost full if close to date
    }

    const remainingSeats = Math.max(0, totalSeats - registeredCount)

    return NextResponse.json({
      remainingSeats,
      totalSeats,
      registeredCount,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error fetching seats data:", error)
    return NextResponse.json({ error: "Failed to fetch seats data" }, { status: 500 })
  }
}
