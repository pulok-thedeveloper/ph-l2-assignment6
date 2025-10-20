const Cta = () => {
    return (
    <section className="py-20 bg-gradient-to-r from-primary to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Transportation Business?</h2>
            <p className="text-xl text-indigo-100 mb-8">Join thousands of businesses already using our platform to revolutionize their ride-sharing operations.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Start Free Trial</button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">Schedule Demo</button>
            </div>
        </div>
    </section>
    );
};

export default Cta;