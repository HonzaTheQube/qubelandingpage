"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import cs from "@/content/cs"

export default function ReferencesSection() {
  const references = cs.references.items

  return (
    <section className="py-20 lg:py-28 bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">{cs.references.heading}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {references.map((ref, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full bg-surface/30 backdrop-blur-md border-white/10 shadow-card">
                  <CardContent className="p-6">
                    <Quote className="text-primary mb-4 opacity-80" size={32} />
                    <h3 className="text-xl font-medium mb-3">{ref.company}</h3>
                    <p className="text-light/80">{ref.quote}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#cena"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-semibold px-8 md:px-12 py-3 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] min-h-[44px] touch-manipulation"
            >
              <span className="hidden sm:inline">{cs.ctaVariants.tertiary}</span>
              <span className="sm:hidden">{cs.ctaVariants.stickyMobile}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
