import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Services } from "@/components/home/Services";
import { Solutions } from "@/components/home/Solutions";
import { CodeShowcase } from "@/components/home/CodeShowcase";
import { Benefits } from "@/components/home/Benefits";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <Solutions />
      <CodeShowcase />
      <Benefits />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
