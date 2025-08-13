"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import CheckoutModal from "./checkout-modal"
import { useSeatsData } from "@/hooks/use-seats-data"
import cs from "@/content/cs"

export default function OfferSection() {
  const offerItems = [
    { name: "Kompletní výcvik (3 týdny)", value: "25 000 Kč", price: "9 997 Kč" },
    { name: "Přístup do AI komunity", value: "2 000 Kč", price: "ZDARMA" },
    { name: "3 x hodinové Q&A session s Honzou a Ondrou", value: "6 000 Kč", price: "ZDARMA" },
    { name: "Prompt Master Guide", value: "970 Kč", price: "ZDARMA" },
    { name: "Minimální úspora za zaměstnance", value: "-21 000 Kč/m", price: "ZISK" },
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const { remainingSeats } = useSeatsData()

  const totalValueOriginal = 25000 + 2000 + 6000 + 970

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-black">
      <div className="container px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 md:mb-6 text-center">
            <span className="relative">
              {cs.offer.headingPrefix}
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-primary rounded-full"></span>
            </span>{" "}
            {cs.offer.headingSuffix}
          </h2>

          <p className="text-lg md:text-xl text-center text-light/80 mb-8 md:mb-12 max-w-4xl mx-auto">
            {cs.offer.description}
          </p>

          <div className="bg-surface/30 backdrop-blur-md border border-white/10 shadow-card rounded-xl overflow-hidden">
            {/* Mobile Card Layout */}
            <div className="block md:hidden">
              <div className="p-4 space-y-4">
                {offerItems.map((item, index) => (
                  <div key={index} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-start mb-2">
                      <Check className="text-primary mr-2 flex-shrink-0 mt-0.5" size={16} />
                      <span className="font-medium text-sm">{item.name}</span>
                    </div>
                    <div className="ml-6 flex justify-between items-center">
                      <span className="text-sm text-light/70">Hodnota: {item.value}</span>
                      <span className="font-medium text-sm">
                        {item.price === "ZDARMA" ? (
                          <span className="text-primary">{item.price}</span>
                        ) : item.price === "ZISK" ? (
                          <span className="text-green-500">{item.price}</span>
                        ) : (
                          <span>{item.price}</span>
                        )}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Table Layout */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-6 text-left">{cs.offer.table.headers.item}</th>
                    <th className="py-4 px-6 text-center">{cs.offer.table.headers.value}</th>
                    <th className="py-4 px-6 text-center">{cs.offer.table.headers.price}</th>
                  </tr>
                </thead>
                <tbody>
                  {offerItems.map((item, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <Check className="text-primary mr-2 flex-shrink-0" size={18} />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">{item.value}</td>
                       <td className="py-4 px-6 text-center font-medium">
                        {item.price === "ZDARMA" ? (
                          <span className="text-primary">{cs.offer.table.priceFree}</span>
                        ) : item.price === "ZISK" ? (
                          <span className="text-green-500">{cs.offer.table.priceProfit}</span>
                        ) : (
                          <span>{item.price}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 md:p-6 bg-primary/10 border-t border-white/10">
              <div className="flex items-center justify-center mb-2">
                <span className="inline-block bg-primary text-white text-xs md:text-sm px-3 py-1 rounded-full">
                  {cs.offer.ribbon}
                </span>
              </div>
              <p className="text-base md:text-lg text-center font-medium">
                {cs.offer.recap.totalValueLabel}{" "}
                <span className="line-through text-light/70">{totalValueOriginal.toLocaleString()} Kč</span> → {cs.offer.recap.payOnlyPrefix}
                {" "}
                <span className="text-primary font-bold">{cs.offer.recap.payOnlyPrice}</span>
              </p>
              <p className="text-center mt-2 text-sm md:text-base">
                {cs.offer.recap.microClaim}
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <h3 className="text-lg md:text-xl lg:text-2xl font-normal mb-4 md:mb-6 text-white">
              {cs.offer.ctaTitle}
            </h3>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-semibold px-8 md:px-12 py-3 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] min-h-[44px] touch-manipulation"
            >
              {cs.offer.ctaButton}
            </button>
            <p className="text-xs md:text-sm text-light/70 mt-3">{cs.offer.urgencyNote}</p>
          </div>

          <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} seatsLeft={remainingSeats} />
        </motion.div>
      </div>
    </section>
  )
}
