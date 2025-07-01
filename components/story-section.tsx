"use client"

import { useRef, useMemo } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 150,
    mass: 0.8,
  })

  const pathLength = useTransform(smoothProgress, [0, 0.8], [0, 1])
  const pathOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1])
  const ballPosition = useTransform(smoothProgress, [0, 0.95], [0, 100])

  const section1Active = useTransform(ballPosition, (v) => v >= 0 && v < 30)
  const section2Active = useTransform(ballPosition, (v) => v >= 30 && v < 50)
  const section3Active = useTransform(ballPosition, (v) => v >= 50 && v < 70)
  const section4Active = useTransform(ballPosition, (v) => v >= 70 && v < 85)
  const section5Active = useTransform(ballPosition, (v) => v >= 85 && v <= 100)

  const storyPoints = useMemo(
    () => [
      {
        title: "Problém dnešního trhu práce",
        content:
          "V Česku je dnes pro firmy čím dál těžší najít kvalitní lidi do svého týmu. Zaměstnanci mají často přehnané nároky, málo loajality a mizivou efektivitu. Náklady na jednoho zaměstnance přitom dnes v průměru přesahují 41 000 Kč měsíčně, přičemž návratnost bývá čím dál nižší.",
        active: section1Active,
        position: "left",
        progress: 0,
      },
      {
        title: "Zdlouhavý nábor a vysoká fluktuace",
        content:
          "Navíc – průměrná doba náboru jednoho kvalitního člověka je v ČR více než 45 dní a fluktuace dosahuje až 20 % ročně. To znamená neustálé hledání nových lidí a opakované zaučování.",
        active: section2Active,
        position: "right",
        progress: 25,
      },
      {
        title: "Naše zkušenost v Qube",
        content:
          "My v Qube jsme si tím prošli. Když jsme naši AI agenturu otevřeli, a to zcela bez externích zdrojů, nemohli jsme si zaměstnance dovolit. A tak jsme si postavili vlastní tým AI agentů – virtuálních zaměstnanců, kteří nás v nákladech stáli zlomek ceny oproti těm klasickým.",
        active: section3Active,
        position: "left",
        progress: 50,
      },
      {
        title: "Výhody AI zaměstnanců",
        content:
          "Naši AI zaměstnanci nikdy nejsou nemocní, nepotřebují dovolenou, pracují 24/7, 365 dní v roce a dělají přesně to, co chceme a jak chceme. Zkrátka bez výmluv a stížností. Výsledek? Už po 6 měsících jsme jako firma byli v zisku, a to – jak jsme zmiňovali – bez jediného fundraisingu.",
        active: section4Active,
        position: "right",
        progress: 75,
      },
      {
        title: "Váš vlastní AI zaměstnanec",
        content:
          "Tento kurz vám ukáže přesně, jak si takového zaměstnance pro svůj byznys můžete vytvořit sami. Můžete tak škálovat svůj byznys bez starostí o to, jestli člověk, kterého na danou pozici nabíráte, je ten správný nebo ne.",
        active: section5Active,
        position: "left",
        progress: 100,
      },
    ],
    [section1Active, section2Active, section3Active, section4Active, section5Active],
  )

  const opacity1 = useTransform(section1Active, (isActive) => (isActive ? 1 : 0.3))
  const filter1 = useTransform(section1Active, (isActive) => (isActive ? "brightness(1)" : "brightness(0.7)"))
  const color1 = useTransform(section1Active, (isActive) => (isActive ? "#0B5CF9" : "#6b7280"))

  const opacity2 = useTransform(section2Active, (isActive) => (isActive ? 1 : 0.3))
  const filter2 = useTransform(section2Active, (isActive) => (isActive ? "brightness(1)" : "brightness(0.7)"))
  const color2 = useTransform(section2Active, (isActive) => (isActive ? "#0B5CF9" : "#6b7280"))

  const opacity3 = useTransform(section3Active, (isActive) => (isActive ? 1 : 0.3))
  const filter3 = useTransform(section3Active, (isActive) => (isActive ? "brightness(1)" : "brightness(0.7)"))
  const color3 = useTransform(section3Active, (isActive) => (isActive ? "#0B5CF9" : "#6b7280"))

  const opacity4 = useTransform(section4Active, (isActive) => (isActive ? 1 : 0.3))
  const filter4 = useTransform(section4Active, (isActive) => (isActive ? "brightness(1)" : "brightness(0.7)"))
  const color4 = useTransform(section4Active, (isActive) => (isActive ? "#0B5CF9" : "#6b7280"))

  const opacity5 = useTransform(section5Active, (isActive) => (isActive ? 1 : 0.3))
  const filter5 = useTransform(section5Active, (isActive) => (isActive ? "brightness(1)" : "brightness(0.7)"))
  const color5 = useTransform(section5Active, (isActive) => (isActive ? "#0B5CF9" : "#6b7280"))

  return (
    <section id="o-kurzu" className="py-16 md:py-20 lg:py-28 bg-black" ref={containerRef}>
      <div className="container px-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative inline-block">
            Proč teď?
            <span className="absolute bottom-[-4px] md:bottom-[-6px] left-0 right-0 h-0.5 md:h-1 bg-primary"></span>
          </span>
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          {/* The animated path - optimized for mobile */}
          <div className="absolute left-2 md:left-0 top-0 bottom-0 w-0.5 md:w-1 lg:w-2">
            <svg className="h-full w-full" viewBox="0 0 20 1000" fill="none" preserveAspectRatio="none">
              <motion.path
                d="M10 0C10 0 30 200 10 300C-10 400 30 500 10 600C-10 700 30 800 10 900C-10 1000 10 1000 10 1000"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="4"
                style={{ opacity: pathOpacity }}
              />
              <motion.path
                d="M10 0C10 0 30 200 10 300C-10 400 30 500 10 600C-10 700 30 800 10 900C-10 1000 10 1000 10 1000"
                stroke="#0B5CF9"
                strokeWidth="4"
                strokeDasharray="1000"
                style={{
                  pathLength,
                  strokeDashoffset: useTransform(pathLength, (v) => 1000 - v * 1000),
                }}
              />
            </svg>

            {/* The animated ball */}
            <motion.div
              className="absolute w-3 h-3 md:w-5 md:h-5 lg:w-7 lg:h-7 bg-primary rounded-full shadow-neon z-10"
              style={{
                top: useTransform(ballPosition, (v) => `${v}%`),
                left: "50%",
                transform: "translateX(-50%)",
                boxShadow: "0 0 15px rgba(11, 92, 249, 0.7)",
              }}
            />
          </div>

          {/* Story paragraphs */}
          <div className="ml-6 md:ml-8 lg:ml-16 space-y-24 md:space-y-32 relative">
            {storyPoints.map((point, index) => {
              let opacity, filter, color
              if (index === 0) {
                opacity = opacity1
                filter = filter1
                color = color1
              } else if (index === 1) {
                opacity = opacity2
                filter = filter2
                color = color2
              } else if (index === 2) {
                opacity = opacity3
                filter = filter3
                color = color3
              } else if (index === 3) {
                opacity = opacity4
                filter = filter4
                color = color4
              } else {
                opacity = opacity5
                filter = filter5
                color = color5
              }

              return (
                <motion.div
                  key={index}
                  className={`max-w-2xl lg:max-w-3xl ${point.position === "right" ? "ml-auto" : ""}`}
                  style={{
                    opacity,
                    filter,
                    transition: "opacity 0.5s, filter 0.5s",
                  }}
                >
                  <motion.h3
                    className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4"
                    style={{
                      color,
                    }}
                  >
                    {point.title}
                  </motion.h3>
                  <p className="text-base sm:text-lg md:text-xl text-light/90 leading-relaxed">{point.content}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
