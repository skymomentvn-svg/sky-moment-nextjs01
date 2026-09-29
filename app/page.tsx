import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import BrandStatement from "@/components/BrandStatement";
import Services from "@/components/Services";
import Showreel from "@/components/Showreel";
import SelectedWork from "@/components/SelectedWork";
import SkyMomentWay from "@/components/SkyMomentWay";
import ContactCTA from "@/components/ContactCTA";
import ContactForm from "@/components/ContactForm";
import FlightHUD from "@/components/FlightHUD";

export default function HomePage() {
  return (
    <main>
      <FlightHUD />
      <Hero />
      <LogoMarquee id="collaborations" />
      <BrandStatement />
      <Services />
      <Showreel />
      <SelectedWork />
      <SkyMomentWay />
      <LogoMarquee />
      <ContactCTA />

      <section id="contact" className="bg-base px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-content">
          <p className="meta-label mb-4 text-ink-dim">Get in touch</p>
          <h2 className="mb-14 font-display text-display-md font-black uppercase text-ink">
            Tell us about your project
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
