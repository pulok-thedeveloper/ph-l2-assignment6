const Cta = () => {
    return (
        <section className="py-20 bg-muted/40 dark:bg-[#0f0f16]">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="space-y-8">
                    <h2 className="text-5xl font-bold text-foreground">Ready to start your journey?</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Download the RideAxis app today and experience the future of transportation. Available on iOS and Android.</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3">
                            <i className="fa-brands fa-apple text-2xl"></i>
                            <div className="text-left">
                                <div className="text-xs">Download on the</div>
                                <div className="text-lg font-bold">App Store</div>
                            </div>
                        </button>
                        <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3">
                            <i className="fa-brands fa-google-play text-2xl"></i>
                            <div className="text-left">
                                <div className="text-xs">Get it on</div>
                                <div className="text-lg font-bold">Google Play</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;