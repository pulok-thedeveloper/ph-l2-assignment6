const RiderFeatures = () => {
    return (
    <section className="py-20 bg-muted/40 dark:bg-[#0f0f16]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-3 bg-blue-100 px-6 py-3 rounded-full mb-6">
                    <i className="fa-solid fa-user text-blue-600"></i>
                    <span className="text-blue-600 font-semibold">RIDER FEATURES</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-4">Passenger Experience</h2>
                <p className="text-xl text-muted-foreground">Seamless, safe, and convenient ride booking from start to finish</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-background rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <i className="fa-solid fa-location-dot text-blue-600"></i>
                            </div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">Smart Booking</h4>
                            <p className="text-muted-foreground text-sm">Quick ride booking with location prediction and favorite destinations</p>
                        </div>
                        <div className="bg-background rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <i className="fa-solid fa-route text-blue-600"></i>
                            </div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">Live Tracking</h4>
                            <p className="text-muted-foreground text-sm">Real-time driver location and estimated arrival times</p>
                        </div>
                        <div className="bg-background rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <i className="fa-solid fa-credit-card text-blue-600"></i>
                            </div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">Secure Payments</h4>
                            <p className="text-muted-foreground text-sm">Multiple payment options with automatic billing</p>
                        </div>
                        <div  className="bg-background rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <i className="fa-solid fa-shield-halved text-blue-600"></i>
                            </div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">Safety First</h4>
                            <p className="text-muted-foreground text-sm">Emergency contacts, trip sharing, and safety alerts</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="w-full h-96 rounded-2xl object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ad78ad893e-9bef0308c6c874e8779f.png" alt=""/>
                </div>
            </div>
        </div>
    </section>
    );
};

export default RiderFeatures;