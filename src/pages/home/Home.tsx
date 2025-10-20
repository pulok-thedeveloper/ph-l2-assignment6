import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Services from "./Services";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero/>
      <HowItWorks/>
      <Services/>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-6 space-y-3 text-center">
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                  ))}
                </div>
                <p>
                  “This platform made my daily rides smooth and stress-free!”
                </p>
                <span className="font-semibold">– User {i}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#110B11] text-white text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Join the Future of Smart Mobility
        </h2>
        <p className="mb-6">Sign up today and be part of the change.</p>
        <Button variant="secondary" size="lg">
          Get Started Now
        </Button>
      </section>
    </div>
  );
}
