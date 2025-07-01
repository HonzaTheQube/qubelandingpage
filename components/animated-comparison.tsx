"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { User, Bot, ArrowRight } from "lucide-react"

export default function AnimatedComparison() {
  const [hoveredSide, setHoveredSide] = useState<"human" | "ai" | null>(null)

  const comparisonPoints = [
    { human: "30 000 – 50 000 Kč", ai: "3 000 - 5 000 Kč", label: "Měsíční náklady" },
    { human: "8 h denně, 5 dní", ai: "24/7 nonstop", label: "Pracovní doba" },
    { human: "4–8 týdnů", ai: "do 2-3 týdnů", label: "Nábor" },
    { human: "vysoká", ai: "0 %", label: "Fluktuace" },
    { human: "nízká", ai: "100 % (Dokud jej nevypnete 😂)", label: "Loajalita" },
    { human: "kolísavá", ai: "stabilní", label: "Spolehlivost" },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
        <motion.div
          className={`relative p-4 md:p-6 rounded-xl overflow-hidden ${
            hoveredSide === "human" ? "ring-2 ring-white/30" : "ring-1 ring-white/10"
          } transition-all`}
          whileHover={{ scale: 1.02 }}
          onHoverStart={() => setHoveredSide("human")}
          onHoverEnd={() => setHoveredSide(null)}
        >
          <div className="absolute inset-0 bg-surface/50 backdrop-blur-sm -z-10"></div>
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mr-3 md:mr-4">
              <User size={20} className="md:w-6 md:h-6 text-light/70" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold">Lidský zaměstnanec</h3>
          </div>

          <ul className="space-y-3 md:space-y-4">
            {comparisonPoints.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/30 rounded-full mr-2 md:mr-3 mt-2 flex-shrink-0"></div>
                <div className="min-w-0">
                  <p className="text-sm md:text-base lg:text-lg text-light/60">{point.label}</p>
                  <p className="font-medium text-base md:text-lg lg:text-xl break-words">{point.human}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className={`relative p-4 md:p-6 rounded-xl overflow-hidden ${
            hoveredSide === "ai" ? "ring-2 ring-primary" : "ring-1 ring-primary/30"
          } transition-all`}
          whileHover={{ scale: 1.02 }}
          onHoverStart={() => setHoveredSide("ai")}
          onHoverEnd={() => setHoveredSide(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-surface/50 backdrop-blur-sm -z-10"></div>
          <div className="flex items-center mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3 md:mr-4">
              <Bot size={20} className="md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold">AI zaměstnanec</h3>
          </div>

          <ul className="space-y-3 md:space-y-4">
            {comparisonPoints.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mr-2 md:mr-3 mt-2 flex-shrink-0"></div>
                <div className="min-w-0">
                  <p className="text-sm md:text-base lg:text-lg text-light/60">{point.label}</p>
                  <p className="font-medium text-base md:text-lg lg:text-xl text-primary break-words">{point.ai}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center px-4 md:px-8 py-3 md:py-4 bg-primary/10 rounded-full">
          <ArrowRight className="text-primary mr-2 md:mr-3 flex-shrink-0" size={16} />
          <span className="text-base md:text-lg lg:text-xl font-medium">Ušetřete až 90% nákladů s AI zaměstnancem</span>
        </div>
      </motion.div>
    </div>
  )
}
