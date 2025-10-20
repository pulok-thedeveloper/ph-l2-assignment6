const Promotions = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center text-white space-y-8">
                    <h2 className="text-5xl font-bold">Limited Time Offer</h2>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">Join RideFlow today and enjoy exclusive benefits for new riders. Don't miss out on these amazing deals!</p>
                    
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="space-y-4">
                                <div className="text-4xl font-bold">50% OFF</div>
                                <div className="text-xl">Your first 5 rides</div>
                                <div className="text-sm opacity-80">Valid for new users only. Maximum discount $10 per ride.</div>
                                <button className="bg-background text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors w-full">Claim Offer</button>
                            </div>
                        </div>
                        
                        <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="space-y-4">
                                <div className="text-4xl font-bold">FREE</div>
                                <div className="text-xl">Premium membership for 1 month</div>
                                <div className="text-sm opacity-80">Includes priority booking and exclusive vehicle access.</div>
                                <button className="bg-background text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors w-full">Get Premium</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promotions;