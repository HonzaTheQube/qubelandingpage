"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Users, Clock, DollarSign } from "lucide-react"

export default function FloatingStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [hasBeenShown, setHasBeenShown] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  const stats = [
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Úspora pracovní síly",
      value: "Až 90%",
      description: "Nahraďte rutinní práci AI zaměstnancem",
    },
    {
      icon: <Clock className="text-primary" size={24} />,
      title: "Pracuje nonstop",
      value: "24/7/365",
      description: "Bez dovolené, nemocenské a přesčasů",
    },
    {
      icon: <DollarSign className="text-primary" size={24} />,
      title: "Měsíční náklady",
      value: "Od 3 000 Kč",
      description: "Zlomek nákladů oproti běžnému zaměstnanci",
    },
  ]

  useEffect(() => {
    // Check if user has scrolled to the comparison section
    const handleScroll = () => {
      const comparisonSection = document.getElementById("obsah")
      if (comparisonSection) {
        const sectionTop = comparisonSection.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        // Show widget when comparison section is in view (about 1/3 into the viewport)
        if (sectionTop < windowHeight * 0.7 && !hasBeenShown && !isClosed) {
          setTimeout(() => {
            setIsVisible(true)
            setHasBeenShown(true)
          }, 1000) // Delay after scrolling to section
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Auto-rotate stats
    const rotationTimer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % stats.length)
    }, 5000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(rotationTimer)
    }
  }, [stats.length, hasBeenShown, isClosed])

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed bottom-4 right-4 z-50 w-72 bg-surface/80 backdrop-blur-md border border-white/10 rounded-xl shadow-neon overflow-hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <div className="p-3 bg-primary/20 flex justify-between items-center">
            <h3 className="font-display font-bold text-sm">AI ZAMĚSTNANEC - VÝHODY</h3>
            <button
              onClick={() => {
                setIsVisible(false)
                setIsClosed(true)
              }}
              className="text-light/70 hover:text-light"
              aria-label="Zavřít"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2">{stats[activeTab].icon}</div>
                <h4 className="font-medium text-sm text-light/70 mb-1">{stats[activeTab].title}</h4>
                <p className="text-2xl font-display font-bold text-primary mb-1">{stats[activeTab].value}</p>
                <p className="text-xs text-light/60">{stats[activeTab].description}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-3 space-x-1">
              {stats.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeTab === index ? "bg-primary" : "bg-white/20"
                  }`}
                  onClick={() => setActiveTab(index)}
                  aria-label={`Zobrazit statistiku ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ) : isClosed ? (
        <motion.button
          className="fixed bottom-4 right-4 z-50 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-neon"
          onClick={() => setIsVisible(true)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          aria-label="Zobrazit výhody AI zaměstnance"
        >
          <Users size={20} className="text-white" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
