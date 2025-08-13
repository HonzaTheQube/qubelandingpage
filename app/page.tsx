import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import StorySection from "@/components/story-section"
import UseCasesSection from "@/components/use-cases-section"
import UseCasesRich from "@/components/UseCasesRich"
import ComparisonSection from "@/components/comparison-section"
import OfferSection from "@/components/offer-section"
import ReferencesSection from "@/components/references-section"
import LecturersSection from "@/components/lecturers-section"
import ScheduleSection from "@/components/schedule-section"
import PricingSection from "@/components/pricing-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingStats from "@/components/floating-stats"
import FloatingCTA from "@/components/floating-cta"
import SectionCta from "@/components/section-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-light">
      <Navbar />
      <HeroSection />
      <UseCasesRich />
      <StorySection />
      <ComparisonSection />
      <OfferSection />
      <ReferencesSection />
      <SectionCta />
      <LecturersSection />
      <ScheduleSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <FloatingStats />
      <FloatingCTA />
    </main>
  )
}
