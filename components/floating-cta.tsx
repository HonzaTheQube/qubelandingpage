"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"
import CheckoutModal from "./checkout-modal"
import { useSeatsData } from "@/hooks/use-seats-data"
import cs from "@/content/cs"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { remainingSeats } = useSeatsData()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 left-4 z-50 flex flex-col space-y-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <button
            onClick={scrollToTop}
            aria-label={cs.floatingCta.backToTop}
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-dark border border-white/10 hover:bg-dark/80 transition-colors min-h-[44px] touch-manipulation"
          >
            <ArrowUp size={16} className="md:w-5 md:h-5 text-white" />
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center px-3 py-2 md:px-4 md:py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors text-sm md:text-base whitespace-nowrap min-h-[44px] touch-manipulation"
          >
            <span className="hidden sm:inline">{cs.ctaVariants.primary}</span>
            <span className="sm:hidden">{cs.ctaVariants.stickyMobile}</span>
          </button>
        </motion.div>
      )}
      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} seatsLeft={remainingSeats} />
    </AnimatePresence>
  )
}
