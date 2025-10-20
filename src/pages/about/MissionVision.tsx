const MissionVision = () => {
    return (
        <section className="py-20 bg-muted/40 dark:bg-[#0f0f16]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Mission &amp; Vision</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our core values and aspirations that guide everything we do</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-background p-10 rounded-2xl shadow-lg">
                        <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                            <i className="fa-solid fa-bullseye text-2xl text-indigo-600"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                        <p className="text-muted-foreground leading-relaxed">To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We believe that every organization, regardless of size, deserves access to world-class technology that transforms their operations and accelerates their success.</p>
                    </div>
                    <div className="bg-background p-10 rounded-2xl shadow-lg">
                        <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                            <i className="fa-solid fa-eye text-2xl text-purple-600"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                        <p className="text-muted-foreground leading-relaxed">To be the global leader in transformative technology solutions, creating a world where innovation is accessible to all. We envision a future where technology seamlessly integrates with human potential to solve complex challenges and unlock unprecedented opportunities.</p>
                    </div>
                </div>
            </div>
        </section>  
    );
};

export default MissionVision;