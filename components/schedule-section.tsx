"use client"

import { Calendar, Clock, Mail } from "lucide-react"
import { useState, useEffect, useRef } from "react"

interface ScheduleItem {
  date: string
  formattedDate: string
  day: string
  month: string
}

export default function ScheduleSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  const scheduleItems: ScheduleItem[] = [
    {
      date: "11.09.2025",
      formattedDate: "11. září 2025",
      day: "11",
      month: "09",
    },
    {
      date: "17.09.2025",
      formattedDate: "17. září 2025",
      day: "17",
      month: "09",
    },
    {
      date: "24.09.2025",
      formattedDate: "24. září 2025",
      day: "24",
      month: "09",
    },
  ]

  // Rotate active index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev: number) => (prev + 1) % scheduleItems.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [scheduleItems.length])

  // Intersection observer for triggering animations only once
  useEffect(() => {
    if (!sectionRef.current || hasAnimated.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          sectionRef.current?.classList.add("animate-section")
          hasAnimated.current = true
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 lg:py-28 bg-black relative overflow-hidden" id="harmonogram" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out section-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            <span className="relative inline-block">
              Harmonogram lekcí
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-primary rounded-full transition-all duration-1000 delay-500 ease-out section-underline"></span>
            </span>
          </h2>

          <div className="text-center mb-12 opacity-0 translate-y-4 transition-all duration-700 delay-300 ease-out section-fade-in">
            <p className="text-xl text-light/80 max-w-3xl mx-auto">Lekce probíhají v následujících termínech.</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 w-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full transition-all duration-1500 delay-700 ease-out section-line"></div>

            {/* Schedule cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 pt-10">
              {scheduleItems.map((item, index) => (
                <div
                  key={item.date}
                  className={`relative opacity-0 translate-y-8 transition-all duration-700 ease-out section-card ${
                    activeIndex === index ? "z-20" : "z-10"
                  }`}
                  style={{ transitionDelay: `${700 + index * 150}ms` }}
                >
                  <div
                    className={`bg-surface/30 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden p-6 h-full transition-all duration-500 ${
                      activeIndex === index ? "border-primary/50 shadow-glow" : ""
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Calendar className="h-8 w-8 text-primary" />
                      </div>

                      <div className="text-center mb-4">
                        <div className="text-4xl font-display font-bold flex items-center justify-center gap-2">
                          <span>{item.day}</span>
                          <span className="text-primary text-2xl">.</span>
                          <span>{item.month}</span>
                          <span className="text-primary text-2xl">.</span>
                          <span className="text-xl">2025</span>
                        </div>
                        <p className="text-light/70 mt-1">{item.formattedDate}</p>
                      </div>

                      <div className="flex items-center text-light/60 text-sm mt-2">
                        <Clock className="mr-2 h-4 w-4 text-primary" />
                        <span>Čas bude upřesněn</span>
                      </div>
                    </div>
                  </div>

                  {/* Circle markers on timeline */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 rounded-full bg-black border-2 border-primary flex items-center justify-center">
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeIndex === index ? "bg-primary" : "bg-primary/50"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center bg-primary/10 rounded-xl p-6 border border-primary/20 opacity-0 translate-y-8 transition-all duration-700 delay-1200 ease-out section-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <p className="text-lg">
                Detailní rozvrh, přístupové údaje a všechny potřebné materiály vám zašleme na email po dokončení
                registrace.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visual connector to pricing section */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-primary/30 to-transparent"></div>

      {/* CSS for animations */}
      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 20px rgba(11, 92, 249, 0.2);
          animation: pulse 3s infinite;
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0px rgba(11, 92, 249, 0); }
          50% { box-shadow: 0 0 20px rgba(11, 92, 249, 0.3); }
          100% { box-shadow: 0 0 0px rgba(11, 92, 249, 0); }
        }
        
        .animate-section .section-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-section .section-underline {
          width: 100%;
        }
        
        .animate-section .section-line {
          width: 100%;
        }
        
        .animate-section .section-card {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
