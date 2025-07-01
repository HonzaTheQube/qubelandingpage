import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-light text-center px-4 bg-dark">
      <h1 className="text-4xl lg:text-5xl font-display font-extrabold mb-4">Stránka nenalezena</h1>
      <p className="mt-4 max-w-xl mx-auto text-lg text-light/80 mb-10">
        Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
      </p>

      <Button variant="outline" asChild className="flex items-center gap-2">
        <Link href="/">
          <ArrowLeft size={16} />
          Zpět na hlavní stránku
        </Link>
      </Button>
    </main>
  )
}
