"use client"

import { motion } from "framer-motion"
import AnimatedComparison from "./animated-comparison"

export default function ComparisonSection() {
  return (
    <section id="obsah" className="py-16 md:py-20 lg:py-28 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 md:mb-12 text-center">
            <span className="relative inline-block">
              <span className="relative">
                Porovnání:
                <span className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-primary mt-1"></span>
              </span>{" "}
              <span className="block sm:inline mt-2 sm:mt-0">Lidský zaměstnanec vs AI zaměstnanec</span>
            </span>
          </h2>

          <AnimatedComparison />
        </motion.div>
      </div>
    </section>
  )
}
