"use client"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import CheckoutModal from "./checkout-modal"
import { useSeatsData } from "@/hooks/use-seats-data"
import cs from "@/content/cs"

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: (() => void) | null
  }
}

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { remainingSeats } = useSeatsData()
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // YouTube API setup code remains the same...
  useEffect(() => {
    let player: any = null

    const initYouTubeAPI = () => {
      // Pokud je YouTube API již načteno, použijeme ho
      if (window.YT && window.YT.Player) {
        setupPlayer()
        return
      }

      // Pokud není načteno, načteme ho
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      tag.async = true
      tag.onload = () => {
        // Když se skript načte, počkáme na inicializaci API
        if (window.YT && window.YT.Player) {
          setupPlayer()
        } else {
          window.onYouTubeIframeAPIReady = setupPlayer
        }
      }
      document.head.appendChild(tag)
    }

    const setupPlayer = () => {
      if (!iframeRef.current) return

      const src = iframeRef.current.src
      const videoId = src.match(/embed\/([^?]+)/)?.[1]
      if (!videoId) return

      player = new window.YT.Player(iframeRef.current, {
        events: {
          onStateChange: (event: any) => {
            if (event.data === 3) {
              player.pauseVideo()
              setTimeout(() => player.playVideo(), 100)
            }
          },
        },
      })
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://www.youtube.com") return

      try {
        const data = JSON.parse(event.data)

        if (data.event === "onStateChange" && data.info === 3) {
          if (iframeRef.current) {
            iframeRef.current.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            setTimeout(() => {
              iframeRef.current?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
            }, 100)
          }
        }
      } catch (e) {
        // Ignore JSON parsing errors
      }
    }

    initYouTubeAPI()
    window.addEventListener("message", handleMessage)

    return () => {
      window.removeEventListener("message", handleMessage)
      window.onYouTubeIframeAPIReady = null
    }
  }, [])

  return (
    <section className="min-h-screen pt-16 md:pt-20 flex flex-col items-center justify-start relative overflow-hidden">
      <div className="container relative z-10 pt-8 md:pt-16 pb-6 md:pb-8 text-center px-4">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight mb-6 md:mb-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative inline-block mb-1">
            {cs.hero.titleMain}
            <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary transform skew-x-12"></span>
          </span>
          , <span className="text-primary">{cs.hero.titleHighlight}</span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          {cs.hero.titleSuffix}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-light/80 max-w-4xl mx-auto mb-8 md:mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {cs.hero.subtitle}
        </motion.p>
      </div>

      {/* Video Section */}
      <div id="hero-video-section" className="w-full max-w-6xl mx-auto px-3 md:px-4 mb-8 md:mb-12">
        <motion.div
          className="relative bg-gradient-to-r from-surface to-dark rounded-lg md:rounded-xl overflow-hidden shadow-neon border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative aspect-video">
            <iframe
              ref={iframeRef}
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/N6IuHKKJpfM?si=MhI5RBM7soCnCeef&enablejsapi=1&disablekb=1&fs=0&modestbranding=1&rel=0&controls=1&cc_load_policy=0&iv_load_policy=3&playsinline=1&origin=https://qube.ai"
              title={cs.hero.videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="eager"
            ></iframe>

            <div
              className="absolute bottom-0 left-0 w-full h-[40px] z-10"
              style={{
                background: "transparent",
                pointerEvents: "all",
              }}
              onClick={() => {
                // Jednoduchý fallback pro přehrávání/pozastavení videa, pokud API nefunguje
                if (iframeRef.current) {
                  try {
                    iframeRef.current.contentWindow?.postMessage(
                      '{"event":"command","func":"playVideo","args":""}',
                      "*",
                    )
                  } catch (e) {
                    console.log("Fallback play failed", e)
                  }
                }
              }}
            ></div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="w-full max-w-4xl mx-auto px-4 mb-12 md:mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-base md:text-lg lg:text-xl font-normal mb-6 md:mb-8 text-white/80 px-2">
          Získejte svého prvního AI zaměstnance
        </h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg sm:text-xl md:text-2xl font-bold px-8 sm:px-10 md:px-12 py-3 md:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] min-h-[44px] touch-manipulation"
        >
          <span className="block sm:inline">{cs.hero.cta}</span>
        </button>
      </motion.div>
      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} seatsLeft={remainingSeats} />
    </section>
  )
}
