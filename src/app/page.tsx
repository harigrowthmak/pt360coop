import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import StickyScalingImage from "@/components/StickyScalingImage";
import OurExpertise from "@/components/OurExpertise";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsCounter from "@/components/StatsCounter";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import MeetTeam from "@/components/MeetTeam";
import ServicesIconStrip from "@/components/ServicesIconStrip";
import BlogInsights from "@/components/BlogInsights";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--pt-bg)" }}>
      <NavBar />
      <Hero />
      <StickyScalingImage />
      <OurExpertise />
      <WhyChooseUs />
      <StatsCounter />
      <CaseStudy />
      <Testimonials />
      <MeetTeam />
      <ServicesIconStrip />
      <BlogInsights />
      <CallToAction />
      <Footer />
    </main>
  );
}
