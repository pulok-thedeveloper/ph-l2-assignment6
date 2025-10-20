import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    feedback:
      "RideAxis has completely changed how I get around the city. The drivers are professional, the cars are clean, and the app is so easy to use.",
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    feedback:
      "I use RideAxis daily for my commute. It's reliable, affordable, and the real-time tracking gives me peace of mind. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    feedback:
      "The customer service is exceptional. When I had an issue with a ride, they resolved it immediately. This is how ride-sharing should be done.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            What Our Riders Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don’t just take our word for it — hear what our community of riders
            says about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-muted rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-500 w-5 h-5 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                “{item.feedback}”
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {item.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
