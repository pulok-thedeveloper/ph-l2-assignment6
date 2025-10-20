const Values = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The principles that drive our culture and decision-making</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div id="value-innovation" className="text-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-lightbulb text-2xl text-white"></i>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
                        <p className="text-muted-foreground">Constantly pushing boundaries and exploring new possibilities</p>
                    </div>
                    <div id="value-excellence" className="text-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-star text-2xl text-white"></i>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
                        <p className="text-muted-foreground">Delivering the highest quality in everything we create</p>
                    </div>
                    <div id="value-integrity" className="text-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-handshake text-2xl text-white"></i>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">Integrity</h3>
                        <p className="text-muted-foreground">Building trust through transparency and ethical practices</p>
                    </div>
                    <div id="value-collaboration" className="text-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-users text-2xl text-white"></i>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">Collaboration</h3>
                        <p className="text-muted-foreground">Working together to achieve extraordinary results</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;