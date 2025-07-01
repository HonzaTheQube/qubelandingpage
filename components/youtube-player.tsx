"use client"
import { useEffect, useRef, useState } from "react"

interface YouTubePlayerProps {
  videoId: string
  title?: string
  className?: string
  autoplay?: boolean
}

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: (() => void) | null
  }
}

export default function YouTubePlayer({
  videoId,
  title = "YouTube video",
  className = "",
  autoplay = false,
}: YouTubePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isApiLoaded, setIsApiLoaded] = useState(false)
  const playerRef = useRef<any>(null)

  useEffect(() => {
    // Funkce pro načtení YouTube API
    const loadYouTubeApi = () => {
      // Pokud již existuje YouTube API, nemusíme ho znovu načítat
      if (window.YT) {
        setIsApiLoaded(true)
        return
      }

      // Vytvoříme script tag pro načtení YouTube API
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

      // Nastavíme callback, který se zavolá po načtení API
      window.onYouTubeIframeAPIReady = () => {
        setIsApiLoaded(true)
      }
    }

    loadYouTubeApi()

    // Cleanup
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
      }
    }
  }, [])

  // Inicializace přehrávače po načtení API
  useEffect(() => {
    if (!isApiLoaded || !containerRef.current) return

    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: videoId,
      playerVars: {
        autoplay: autoplay ? 1 : 0,
        controls: 1, // Zobrazit ovládací prvky
        disablekb: 1, // Zakázat klávesové zkratky
        fs: 0, // Zakázat fullscreen
        modestbranding: 1, // Minimální branding YouTube
        rel: 0, // Nezobrazovat související videa
        cc_load_policy: 0, // Nezobrazovat titulky
        iv_load_policy: 3, // Nezobrazovat anotace
        playsinline: 1, // Přehrávat inline na mobilech
        showinfo: 0, // Nezobrazovat informace o videu
        enablejsapi: 1, // Povolit JavaScript API
      },
      events: {
        onStateChange: (event: any) => {
          // Pokud uživatel zkusí přetáčet (stav 3), zastavíme to
          if (event.data === 3) {
            playerRef.current.pauseVideo()
            // Krátká pauza a pak pokračujeme v přehrávání
            setTimeout(() => {
              if (playerRef.current) {
                playerRef.current.playVideo()
              }
            }, 100)
          }
        },
        onReady: (event: any) => {
          // Přidáme CSS pro skrytí progress baru
          const playerElement = event.target.getIframe()
          const style = document.createElement("style")
          style.textContent = `
            .ytp-progress-bar-container, 
            .ytp-time-display,
            .ytp-chapter-container {
              display: none !important;
              pointer-events: none !important;
            }
          `
          playerElement.contentDocument?.head.appendChild(style)
        },
      },
    })

    // Přidáme overlay pro zabránění interakce s progress barem
    const playerElement = playerRef.current.getIframe()
    const overlay = document.createElement("div")
    overlay.style.position = "absolute"
    overlay.style.bottom = "0"
    overlay.style.left = "0"
    overlay.style.width = "100%"
    overlay.style.height = "40px"
    overlay.style.zIndex = "10"
    overlay.style.background = "transparent"
    overlay.style.pointerEvents = "all"

    // Přidáme overlay jako sourozenecký element iframe
    if (playerElement.parentNode) {
      playerElement.parentNode.appendChild(overlay)
    }

    // Přidáme event listener pro zachycení kliknutí na overlay
    overlay.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()

      // Přepínáme mezi play a pause
      const state = playerRef.current.getPlayerState()
      if (state === 1) {
        // 1 = přehrávání
        playerRef.current.pauseVideo()
      } else {
        playerRef.current.playVideo()
      }
    })
  }, [isApiLoaded, videoId, autoplay])

  return (
    <div className={`relative aspect-video ${className}`}>
      <div ref={containerRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  )
}
