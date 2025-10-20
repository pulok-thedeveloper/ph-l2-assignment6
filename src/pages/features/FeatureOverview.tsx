const FeatureOverview = () => {
    return (
    <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Three Powerful Platforms</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Each user type gets a tailored experience with features designed specifically for their needs and workflows.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div id="rider-overview" className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fa-solid fa-user text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Rider Platform</h3>
                    <p className="text-gray-600 mb-6">Intuitive booking, real-time tracking, and seamless payment solutions for passengers.</p>
                    <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">15+ Features</span>
                </div>
                <div id="driver-overview" className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fa-solid fa-car text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Driver Platform</h3>
                    <p className="text-gray-600 mb-6">Comprehensive tools for earnings management, route optimization, and customer service.</p>
                    <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">20+ Features</span>
                </div>
                <div id="admin-overview" className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fa-solid fa-chart-line text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Admin Platform</h3>
                    <p className="text-gray-600 mb-6">Advanced analytics, fleet management, and operational control for business owners.</p>
                    <span className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">25+ Features</span>
                </div>
            </div>
        </div>
    </section>
    );
};

export default FeatureOverview;