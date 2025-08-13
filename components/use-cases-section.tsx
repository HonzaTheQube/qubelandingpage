"use client"

import { motion } from "framer-motion"
import cs from "@/content/cs"

export default function UseCasesSection() {
  const uc = cs.useCases ?? {
    anchorId: "vyuziti-v-praxi",
    heading: "Příklady využití v praxi",
    subheading: "",
    tiles: [],
    ctaBelow: cs.ctaVariants?.primary ?? "Rezervovat místo",
  }

  return (
    <section id={uc.anchorId} className="py-16 md:py-20 lg:py-28 bg-black">
      <div className="container px-4">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
            <span className="relative inline-block">
              {uc.heading}
              <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-primary rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-light/80 max-w-3xl mx-auto">
            {uc.subheading}
          </p>
        </motion.div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uc.tiles.map((tile, idx) => (
            <motion.div
              key={idx}
              className="bg-surface/30 backdrop-blur-md border border-white/10 shadow-card rounded-xl p-5 md:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">{tile.title}</h3>
              <ul className="space-y-2 text-sm md:text-base text-light/80">
                {tile.bullets.map((b, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 mt-2 mr-2 rounded-full bg-primary/70 flex-shrink-0"></span>
                    <span className="min-w-0">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <a
            href="#cena"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-semibold px-8 md:px-12 py-3 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] min-h-[44px] touch-manipulation"
          >
            <span className="hidden sm:inline">{cs.ctaVariants?.primary ?? uc.ctaBelow}</span>
            <span className="sm:hidden">{cs.ctaVariants?.stickyMobile ?? cs.navbar.ctaShort}</span>
          </a>
        </div>
      </div>
    </section>
  )
}


