"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import CountdownTimer from "./countdown-timer"
import CheckoutModal from "./checkout-modal"
import { useSeatsData } from "@/hooks/use-seats-data"

export default function PricingSection() {
  const { remainingSeats, totalSeats, isLoading } = useSeatsData()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="cena" className="py-20 lg:py-28 bg-black">
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            <span className="relative">
              Cena & Registrace
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></span>
            </span>
          </h2>

          <CountdownTimer />

          <Card className="bg-surface/30 backdrop-blur-md border-white/10 shadow-card overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-2">9 997 Kč</h3>
                  <p className="text-light/70">Jednorázová platba</p>
                </div>

                <div className="mt-4 md:mt-0 flex items-center">
                  <AlertCircle className="text-primary mr-2" size={20} />
                  <span className="font-medium">
                    {isLoading ? (
                      <span className="opacity-70">Načítání dostupných míst...</span>
                    ) : (
                      <span className={remainingSeats <= 10 ? "text-strike animate-pulse" : ""}>
                        Zbývá posledních {remainingSeats} / {totalSeats} míst!
                      </span>
                    )}
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto animate-pulse transition-all hover:scale-105 hover:shadow-neon"
                  onClick={() => setIsModalOpen(true)}
                >
                  Chci si rezervovat své místo
                </Button>
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20 text-center">
                <h4 className="font-medium text-lg mb-2">!!! Garance bez rizika !!!</h4>
                <p>Bez otázek, bez výmluv. Pokud po první lekci nebudete spokojeni, vratíme Vám peníze.</p>
              </div>

              <div className="mt-6 flex items-center justify-center text-light/60 text-sm">
                <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                <span>Bezpečná platba</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} seatsLeft={remainingSeats} />
    </section>
  )
}
