import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import heroImage from "@/assets/images/heroImage.jpg"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-secondary to-background dark:from-[#0f0f16] dark:to-[#1a1a24] transition-colors">
      {/* Hero Content */}
      <div className="max-w-7xl min-h-[600px] mx-auto grid lg:grid-cols-2 items-center justify-between gap-12 px-6 md:px-12 py-16">
        {/* Left Section */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
            Your ride is just a{" "}
            <span className="text-primary">tap away</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Experience seamless transportation with RideAxis. Safe, reliable,
            and affordable rides whenever you need them.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <Button className="bg-primary text-primary-foreground px-6 py-5 hover:opacity-90">
              Download App
            </Button>
            <Button variant="outline" className="px-6 py-5 hover:bg-muted">
              Watch Demo
            </Button>
          </div>

          {/* Ratings */}
          <div className="flex items-center justify-center md:justify-start gap-3 pt-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/40?img=${i + 1}`}
                  alt="user"
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
              ))}
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>10M+ happy riders</span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.8/5 rating
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - App Image */}
        <div className="mt-10 md:mt-0 relative">
          <Card className="w-full shadow-xl overflow-hidden py-0">
            <img
              src={heroImage}
              alt="RideAxis app preview"
              className="object-cover"
            />
          </Card>

          <div className="absolute -top-4 right-4 bg-card text-foreground px-3 py-1 rounded-full shadow-sm text-xs border border-border">
            Driver found in 2 min 🚗
          </div>
        </div>
      </div>
    </section>
  );
}
