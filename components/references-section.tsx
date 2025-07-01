"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function ReferencesSection() {
  const references = [
    {
      company: "Lama Energy Group",
      quote:
        "AI zaměstnanci nám pomohli překlopit část naší operativy do plnohodnotné automatizace. Úspora: 120+ hodin měsíčně a nákladově stovky tisíc ročně.",
    },
    {
      company: "StavbyDay",
      quote:
        'Proměnili jsme se z "Cavemana" na firmu, která díky síle AI zaměstnanců zautomatizovala komplexně celý proces fakturace, schvalování, vytváření na zalistování nabídek a reportingu.',
    },
    {
      company: "Eurepol s.r.o.",
      quote:
        "Náklady na naší administrativu se snížily o 40 %. Nechápu, že jsme to neudělali dřív. AI zaměstnanci jsou budoucnost podnikání a my už pracujeme na tom abychom co nejdříve měli v týmu další.",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Reference firem</h2>

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
        </motion.div>
      </div>
    </section>
  )
}
