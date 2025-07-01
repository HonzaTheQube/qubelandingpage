"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function LecturersSection() {
  const lecturers = [
    {
      name: "Honza Nedvídek",
      position: "CEO Qube",
      bio: [
        "Zakladatel, CEO AI agentury Qube. Honza Začal podnikat už ve svých 15-letech, AI agenturu Qube dotáhl do zisku za 6 měsíců a to bez jediného investora.",
        "Vede tým mladých vizionářů, kteří staví AI agenty firmám na míru - od marketingových agentur až po energetické giganty. Je to vášnivý vizionář, podnikatel a AI developer, který zastává styl moderního podnikání s minimem nákladů a maximální efektivitou.",
        "Honza je velký fanoušek filozofie Tomáše Bati a jeho osobu bere jako jeden ze svých vzorů.",
      ],
      image: "/images/honza-nedvídek.jpeg",
    },
    {
      name: "Ondra Hanigovský",
      position: "CTO Qube",
      bio: [
        "Mozek celého vývoje v AI agentůře Qube. Expert na automatizace, implementace AI do firemních procesů a orchestrace LLM modelů v AI agentic systémech.",
        "Certifikovaný specialista na platformy jako je Make, Relay, Lindy a n8n. Vedl implementace a vývoj systémů pro klienty jako je Zentiva, Raiffeissen Bank nebo AirBank.",
        "Vysvětlí vám vše přirozenou lidskou řečí a hlavně krok za krokem. Je to Váš budoucí parťák při stavbě vašeho prvního AI zaměstnance.",
      ],
      image: "/images/ondra-hanigovský.jpeg",
    },
  ]

  return (
    <section id="lektori" className="py-20 lg:py-28 bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            <span className="relative inline-block">
              Lektoři –{" "}
              <span className="relative">
                Odborníci z praxe
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary mt-1"></span>
              </span>
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {lecturers.map((lecturer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full bg-dark/50 backdrop-blur-md border-white/10 shadow-card overflow-hidden group">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={lecturer.image || "/placeholder.svg"}
                      alt={lecturer.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <h3 className="text-2xl font-display font-bold">{lecturer.name}</h3>
                      <p className="text-primary">{lecturer.position}</p>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-gradient-to-b from-surface/30 to-dark/30">
                    {lecturer.bio.map((paragraph, i) => (
                      <p key={i} className="text-light/80 mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
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
