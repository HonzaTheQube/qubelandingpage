"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { pixelEvents } from "@/lib/meta-pixel-events"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  seatsLeft: number
}

export default function CheckoutModal({ isOpen, onClose, seatsLeft }: CheckoutModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl max-h-[95vh] overflow-y-auto bg-surface/90 backdrop-blur-md border-white/10 shadow-card mx-4">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-display font-bold">Rezervovat místo</DialogTitle>
          <DialogDescription className="text-light/70">
            Vyberte si variantu kurzu a dokončete rezervaci
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 md:space-y-6 py-2 md:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-lg md:text-xl font-display font-bold">Kurz AI zaměstnanec</h3>
              <p className="text-light/70 text-sm md:text-base">Kompletní 3-týdenní kurz</p>
            </div>
            <div className="flex items-center">
              <AlertCircle className="text-primary mr-2 flex-shrink-0" size={16} />
              <span className={`text-sm font-medium ${seatsLeft <= 10 ? "text-strike animate-pulse" : ""}`}>
                Zbývá {seatsLeft} míst
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="border border-white/10 rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-lg">STANDARD</h4>
                  <span className="text-primary font-bold text-lg">9 997 Kč</span>
                </div>
                <ul className="space-y-2 text-sm text-light/70 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Kompletní 3-týdenní kurz</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Přístup do komunity (3 měsíce)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>3 x hodinové Q&A session s Honzou a Ondrou</span>
                  </li>
                </ul>
              </div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 mt-auto min-h-[44px] touch-manipulation"
                onClick={() => {
                  pixelEvents.trackInitiateCheckout({
                    content_category: "kurz",
                    content_name: "AI zaměstnanec - STANDARD",
                    value: 9997,
                    currency: "CZK",
                    contents: [{ id: "standard-course", quantity: 1, item_price: 9997 }],
                    num_items: 1,
                  })
                  window.location.href = "https://buy.stripe.com/eVqaEXake3wB3uocYwaIM01"
                }}
              >
                Vybrat STANDARD
              </Button>
            </div>

            <div className="border border-primary/50 rounded-lg p-4 bg-primary/5 relative flex flex-col justify-between">
              <div>
                <div className="absolute -top-2 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
                  Doporučeno
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-lg">PRO</h4>
                  <span className="text-primary font-bold text-lg">14 997 Kč</span>
                </div>
                <ul className="space-y-2 text-sm text-light/70 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Vše ze STANDARD</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Doživotní přístup do komunity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>3 unikátní šablony AI agentů v hodnotě 100 000 Kč</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Prioritní podpora</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>3 x hodinové Q&A session s Honzou a Ondrou</span>
                  </li>
                </ul>
              </div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 mt-auto min-h-[44px] touch-manipulation"
                onClick={() => {
                  pixelEvents.trackInitiateCheckout({
                    content_category: "kurz",
                    content_name: "AI zaměstnanec - PRO",
                    value: 14997,
                    currency: "CZK",
                    contents: [{ id: "pro-course", quantity: 1, item_price: 14997 }],
                    num_items: 1,
                  })
                  window.location.href = "https://buy.stripe.com/28E5kD63Y8QVc0U0bKaIM00"
                }}
              >
                Vybrat PRO
              </Button>
            </div>
          </div>

          <p className="text-xs text-light/60 text-center pt-2">Uvedené ceny jsou bez DPH.</p>

          <div className="flex flex-col items-center justify-center text-center pt-2">
            <h4 className="font-medium text-base mb-1">!!! Garance bez rizika !!!</h4>
            <p className="text-light/70 text-sm">
              Bez otázek, bez výmluv. Pokud po první lekci nebudete spokojeni, vratíme Vám peníze.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
