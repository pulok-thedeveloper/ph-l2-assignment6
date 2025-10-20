const Services = () => {
    return (
        <section id="services" className="py-20 bg-muted/40 dark:bg-[#0f0f16]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-5xl font-bold text-foreground">Our Services</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Choose from our range of ride options designed to meet every need and budget.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                            <i className="text-2xl text-blue-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-car" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">RideFlow Go</h3>
                        <p className="text-muted-foreground mb-4">Affordable everyday rides for your daily commute and errands.</p>
                        <div className="text-2xl font-bold text-blue-600">$0.85/mile</div>
                    </div>
                    
                    <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                            <i className="text-2xl text-green-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-car-side" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="car-side" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M171.3 96H224v96H111.3l30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192V96h81.2c9.7 0 18.9 4.4 25 12l67.2 84H272zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36H171.3c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256V368c0 17.7 14.3 32 32 32H65.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H385.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H608c17.7 0 32-14.3 32-32V320c0-65.2-48.8-119-111.8-127zM434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1 -90.5-32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">RideFlow Plus</h3>
                        <p className="text-muted-foreground mb-4">Premium vehicles with extra comfort and space for special occasions.</p>
                        <div className="text-2xl font-bold text-green-600">$1.25/mile</div>
                    </div>
                    
                    <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                            <i className="text-2xl text-purple-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-users" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">RideFlow Share</h3>
                        <p className="text-muted-foreground mb-4">Share your ride with others heading in the same direction and save money.</p>
                        <div className="text-2xl font-bold text-purple-600">$0.65/mile</div>
                    </div>
                    
                    <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                            <i className="text-2xl text-orange-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-truck" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">RideFlow Delivery</h3>
                        <p className="text-muted-foreground mb-4">Fast and reliable delivery service for packages and documents.</p>
                        <div className="text-2xl font-bold text-orange-600">$2.50/delivery</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;