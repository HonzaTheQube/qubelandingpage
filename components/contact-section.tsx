"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MessageCircle, Sparkles, Zap, Heart } from "lucide-react"

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const subtleFloatingVariants = {
    animate: {
      y: [-3, 3, -3],
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  }

  return (
    <section
      id="kontakt"
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-dark to-black relative overflow-hidden"
    >
      {/* Subtle Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-16 sm:top-20 left-4 sm:left-10 text-primary/10"
          variants={subtleFloatingVariants}
          animate="animate"
        >
          <Sparkles size={18} className="sm:w-5 sm:h-5" />
        </motion.div>
        <motion.div
          className="absolute top-32 sm:top-40 right-4 sm:right-20 text-primary/10"
          variants={subtleFloatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <Zap size={20} className="sm:w-6 sm:h-6" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 sm:bottom-40 left-4 sm:left-20 text-primary/10"
          variants={subtleFloatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        >
          <Heart size={19} className="sm:w-5 sm:h-5" />
        </motion.div>
      </div>

      <div className="container px-4 sm:px-6 relative">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <span className="relative inline-block">
              Máte otázky?
              <motion.span
                className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-0.5 sm:h-1 bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              ></motion.span>
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-light/80 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
            variants={itemVariants}
          >
            V případě jakýchkoliv dotazů ohledně kurzu, se nám neváhejte ozvat
          </motion.p>

          <motion.div
            className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
            variants={itemVariants}
          >
            {/* Email Card */}
            <motion.div
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:bg-white/8 min-h-[200px] sm:min-h-[220px] flex flex-col justify-center"
              variants={cardVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl mx-auto mb-4 sm:mb-6 group-hover:from-primary/30 group-hover:to-primary/15 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                E-mail
              </h3>
              <a
                href="mailto:qube@theqube.tech"
                className="text-primary hover:text-primary/80 transition-colors text-base sm:text-lg font-medium block break-all"
              >
                qube@theqube.tech
              </a>
              <p className="text-xs sm:text-sm text-light/60 mt-2">Klikněte pro odeslání e-mailu</p>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:bg-white/8 min-h-[200px] sm:min-h-[220px] flex flex-col justify-center"
              variants={cardVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl mx-auto mb-4 sm:mb-6 group-hover:from-primary/30 group-hover:to-primary/15 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                Telefon
              </h3>
              <a
                href="tel:+420603252018"
                className="text-primary hover:text-primary/80 transition-colors text-base sm:text-lg font-medium"
              >
                +420 603 252 018
              </a>
              <p className="text-xs sm:text-sm text-light/60 mt-2">Klikněte pro zavolání</p>
            </motion.div>
          </motion.div>

          {/* Quick Response Promise */}
          <motion.div
            className="p-6 sm:p-8 bg-gradient-to-r from-primary/8 via-primary/4 to-primary/8 rounded-2xl border border-primary/15 relative overflow-hidden mx-4"
            variants={itemVariants}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                <MessageCircle size={14} className="sm:w-4 sm:h-4 text-primary" />
              </div>
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                <Zap size={14} className="sm:w-4 sm:h-4 text-primary" />
              </div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <Sparkles size={14} className="sm:w-4 sm:h-4 text-primary" />
              </div>
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4">
                <Heart size={14} className="sm:w-4 sm:h-4 text-primary" />
              </div>
            </div>

            <motion.div
              className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary/15 rounded-xl mx-auto mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </motion.div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-primary">
              ⚡ Rychlá odpověď zaručena
            </h3>
            <p className="text-light/80 text-sm sm:text-base md:text-lg leading-relaxed">
              Odpovídáme na všechny dotazy do <span className="text-primary font-semibold">24 hodin</span>. Pokud máte
              urgentní otázku, neváhejte nám zavolat přímo na uvedené telefonní číslo.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
