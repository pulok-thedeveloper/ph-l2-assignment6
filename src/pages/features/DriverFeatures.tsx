const DriverFeatures = () => {
    return (
    <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-3 bg-green-100 px-6 py-3 rounded-full mb-6">
                    <i className="fa-solid fa-car text-green-600"></i>
                    <span className="text-green-600 font-semibold">DRIVER FEATURES</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-4">Driver Empowerment</h2>
                <p className="text-xl text-muted-foreground">Professional tools to maximize earnings and provide excellent service</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div id="earnings-management" className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                        <i className="fa-solid fa-dollar-sign text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Earnings Management</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center space-x-3">
                            <i className="fa-solid fa-check text-green-600"></i>
                            <span>Real-time earnings tracking</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <i className="fa-solid fa-check text-green-600"></i>
                            <span>Weekly/monthly reports</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <i className="fa-solid fa-check text-green-600"></i>
                            <span>Instant payouts</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <i className="fa-solid fa-check text-green-600"></i>
                            <span>Tax documentation</span>
                        </li>
                    </ul>
                </div>
                <div id="navigation-tools" className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                        <i className="fa-solid fa-compass text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Navigation &amp; Routes</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center space-x-3">
                            <i className="fa-solid fa-check text-green-600"></i>
                            <span>Optimized route planning</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <i className="fa-solid fa-check text-green-600"></i>
                            <span>Traffic-aware navigation</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <i className="fa-solid fa-check text-green-600"></i>
                            <span>Offline map support</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <i className="fa-solid fa-check text-green-600"></i>
                            <span>Voice-guided directions</span>
                        </li>
                    </ul>
                </div>
                <div id="customer-service" className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                        <i className="fa-solid fa-headset text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Service</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center space-x-3">
                            <i className="fa-solid fa-check text-green-600"></i>
                            <span>In-app messaging</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <i className="fa-solid fa-check text-green-600"></i>
                            <span>Rating system</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <i className="fa-solid fa-check text-green-600"></i>
                            <span>Feedback management</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <i className="fa-solid fa-check text-green-600"></i>
                            <span>24/7 support access</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    );
};

export default DriverFeatures;