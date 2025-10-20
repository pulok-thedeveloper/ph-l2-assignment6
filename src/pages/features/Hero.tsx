const Hero = () => {
    return (
    <section className="bg-gradient-to-br from-primary to-indigo-700 text-white h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-5xl font-bold mb-6 leading-tight">Comprehensive Platform Features</h1>
                <p className="text-xl text-indigo-100 mb-8">Discover the powerful capabilities designed for riders, drivers, and administrators. Built for seamless transportation experiences.</p>
                <div className="flex space-x-4">
                    <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Explore Features</button>
                    <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">Watch Demo</button>
                </div>
            </div>
            <div className="hidden lg:block">
                <img className="w-full h-96 rounded-2xl object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/09bd7a5e9f-118a8a893f8840e3bf44.png" alt=""/>
            </div>
        </div>
    </section>
    );
};

export default Hero;