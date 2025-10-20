const Services = () => {
    return (
        <section className="py-20 bg-muted/40 dark:bg-[#0f0f16]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-5xl font-bold text-foreground">Our Services</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Choose from our range of ride options designed to meet every need and budget.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                            <i className="fa-solid fa-car text-3xl text-blue-600"></i>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">RideAxis Go</h3>
                        <p className="text-muted-foreground mb-4">Affordable everyday rides for your daily commute and errands.</p>
                        <div className="text-2xl font-bold text-blue-600">$0.85/mile</div>
                    </div>
                    
                    <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                            <i className="fa-solid fa-car-side text-2xl text-green-600"></i>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">RideAxis Plus</h3>
                        <p className="text-muted-foreground mb-4">Premium vehicles with extra comfort and space for special occasions.</p>
                        <div className="text-2xl font-bold text-green-600">$1.25/mile</div>
                    </div>
                    
                    <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                            <i className="fa-solid fa-users text-2xl text-purple-600"></i>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">RideAxis Share</h3>
                        <p className="text-muted-foreground mb-4">Share your ride with others heading in the same direction and save money.</p>
                        <div className="text-2xl font-bold text-purple-600">$0.65/mile</div>
                    </div>
                    
                    <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                            <i className="fa-solid fa-truck text-2xl text-orange-600"></i>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">RideAxis Delivery</h3>
                        <p className="text-muted-foreground mb-4">Fast and reliable delivery service for packages and documents.</p>
                        <div className="text-2xl font-bold text-orange-600">$2.50/delivery</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;