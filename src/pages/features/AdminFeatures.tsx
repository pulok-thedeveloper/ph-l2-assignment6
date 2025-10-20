const AdminFeatures = () => {
    return (
    <section  className="py-20 bg-muted/40 dark:bg-[#0f0f16]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-3 bg-purple-100 px-6 py-3 rounded-full mb-6">
                    <i className="text-purple-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-chart-line" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg></i>
                    <span className="text-purple-600 font-semibold">ADMIN FEATURES</span>
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-4">Business Intelligence</h2>
                <p className="text-xl text-muted-foreground">Comprehensive platform management and analytics for business growth</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div id="analytics-dashboard" className="bg-background rounded-2xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Analytics Dashboard</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-purple-50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-purple-600 font-semibold">Total Rides</span>
                                <i className="fa-solid fa-car text-purple-600"></i>
                            </div>
                            <div className="text-2xl font-bold text-gray-900">12,847</div>
                            <div className="text-sm text-green-600">+15% from last month</div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-blue-600 font-semibold">Revenue</span>
                                <i className="fa-solid fa-dollar-sign text-blue-600"></i>
                            </div>
                            <div className="text-2xl font-bold text-gray-900">$89,432</div>
                            <div className="text-sm text-green-600">+23% from last month</div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Active Drivers</span>
                            <span className="font-semibold">1,247</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Customer Satisfaction</span>
                            <span className="font-semibold">4.8/5.0</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Average Trip Time</span>
                            <span className="font-semibold">18 min</span>
                        </div>
                    </div>
                </div>
                <div id="management-tools" className="space-y-6">
                    <div className="bg-background rounded-xl p-6 shadow-sm">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <i className="fa-solid fa-users text-orange-600"></i>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-foreground">User Management</h4>
                                <p className="text-muted-foreground text-sm">Driver verification, rider profiles, and account management</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background rounded-xl p-6 shadow-sm">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                <i className="fa-solid fa-gear text-red-600"></i>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-foreground">System Configuration</h4>
                                <p className="text-muted-foreground text-sm">Pricing models, service areas, and platform settings</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background rounded-xl p-6 shadow-sm">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <i className="fa-solid fa-shield-halved text-green-600"></i>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-foreground">Safety &amp; Compliance</h4>
                                <p className="text-muted-foreground text-sm">Background checks, vehicle inspections, and regulatory compliance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default AdminFeatures;