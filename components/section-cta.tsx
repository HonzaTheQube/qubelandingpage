"use client"

import { motion } from "framer-motion"
import cs from "@/content/cs"

export default function SectionCta() {
  return (
    <section className="py-8 md:py-10 bg-black">
      <div className="container px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#cena"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-semibold px-8 md:px-12 py-3 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] min-h-[44px] touch-manipulation"
          >
            <span className="hidden sm:inline">{cs.ctaVariants?.primary ?? "Rezervovat místo"}</span>
            <span className="sm:hidden">{cs.ctaVariants?.stickyMobile ?? cs.navbar.ctaShort}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}


