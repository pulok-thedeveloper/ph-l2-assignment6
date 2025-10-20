export default function HowItWorks() {

  return (
    <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-5xl font-bold text-foreground">How it works</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Getting a ride has never been easier. Follow these simple steps and you'll be on your way.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                        <i className="fa-solid fa-mobile-screen-button text-3xl text-blue-600"></i>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-foreground">Book your ride</h3>
                        <p className="text-muted-foreground leading-relaxed">Open the app, enter your destination, and choose your preferred ride type. It's that simple.</p>
                    </div>
                </div>
                
                <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                        <i className="fa-solid fa-car text-3xl text-green-600"></i>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-foreground">Get matched</h3>
                        <p className="text-muted-foreground leading-relaxed">Our smart algorithm finds the nearest driver and matches you instantly for the fastest pickup.</p>
                    </div>
                </div>
                
                <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto">
                        <i className="fa-solid fa-map-location-dot text-3xl text-primary"></i>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-foreground">Enjoy the ride</h3>
                        <p className="text-muted-foreground leading-relaxed">Sit back, relax, and enjoy your comfortable ride to your destination with real-time tracking.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
