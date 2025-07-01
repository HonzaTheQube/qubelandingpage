import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Děkujeme za objednávku | Qube AI",
  description: "Děkujeme za Vaši objednávku kurzu AI zaměstnanec. Těšíme se na Vás!",
}

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
