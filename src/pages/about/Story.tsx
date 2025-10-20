const Story = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">Founded in 2015, RideAxis began as a small startup with a big vision: to democratize technology and make it accessible to businesses of all sizes. What started as a team of five passionate developers has grown into a global company serving thousands of clients worldwide.</p>
                        <p className="text-lg text-muted-foreground leading-relaxed">Today, we continue to push the boundaries of what's possible, developing solutions that not only meet current needs but anticipate future challenges. Our journey is driven by curiosity, innovation, and an unwavering commitment to our clients' success.</p>
                    </div>
                    <div className="relative">
                        <img className="w-full h-[400px] object-cover rounded-2xl shadow-xl" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f90bc28633-61f6336a184f793ec966.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;