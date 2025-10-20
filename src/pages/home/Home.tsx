import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Promotions from "./Promotions";
import Cta from "./Cta";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero/>
      <HowItWorks/>
      <Services/>
      <Testimonial/>
      <Promotions/>
      <Cta/>
    </div>
  );
}
