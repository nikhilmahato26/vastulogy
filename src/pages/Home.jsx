import Hero from '../components/sections/Hero'
import {
  ProblemsSection,
  ConsultationSection,
  PrivacySection,
  OnlineSection,
} from '../components/sections/ProblemsSections'
import {
  ServicesSection,
  PricingSection,
  WhyChooseUs,
} from '../components/sections/ServicesPricingSections'
import {
  Testimonials,
  FAQSection,
  ContactSection,
} from '../components/sections/TestimonialsFAQContact'

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemsSection />
      <ConsultationSection />
      <PrivacySection />
      <OnlineSection />
      <ServicesSection />
      <PricingSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <ContactSection />
    </main>
  )
}
