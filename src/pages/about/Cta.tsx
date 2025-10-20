const Cta = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
                <p className="text-xl text-indigo-100 mb-8 leading-relaxed">Join thousands of companies that trust RideAxis to transform their business through technology.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Get Started Today</button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">Contact Sales</button>
                </div>
            </div>
        </section>
    );
};

export default Cta;