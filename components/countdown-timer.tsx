"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  // Set end date to September 11, 2025
  const [endDate] = useState(new Date("2025-09-11T00:00:00"))
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  const timeUnits = [
    { label: "Dní", value: timeLeft.days },
    { label: "Hodin", value: timeLeft.hours },
    { label: "Minut", value: timeLeft.minutes },
    { label: "Sekund", value: timeLeft.seconds },
  ]

  return (
    <div className="mb-8">
      <motion.p
        className="text-center text-light/70 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Registrace končí za:
      </motion.p>

      <div className="flex justify-center space-x-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-surface/50 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center shadow-neon">
              <span className="text-2xl md:text-3xl font-display font-bold text-primary">
                {unit.value.toString().padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs mt-2 text-light/60">{unit.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
