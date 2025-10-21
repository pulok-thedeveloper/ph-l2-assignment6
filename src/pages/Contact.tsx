const Contact = () => {
    return (
        <div className="flex flex-col">
            <section className="bg-gradient-to-r from-secondary to-background dark:from-[#0f0f16] dark:to-[#1a1a24] transition-colors h-[400px] flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-foreground mb-6">Get In Touch</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Have a question or want to work together? We'd love to hear from you. 
                            Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                                <p className="text-muted-foreground text-lg">
                                    Ready to start your next project? Contact us today and let's bring your ideas to life.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <i className="fa-solid fa-phone text-primary"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Phone</h3>
                                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <i className="fa-solid fa-envelope text-primary"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Email</h3>
                                        <p className="text-muted-foreground">hello@techflow.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <i className="fa-solid fa-location-dot text-primary"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Address</h3>
                                        <p className="text-muted-foreground">123 Tech Street, San Francisco, CA 94105</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <i className="fa-solid fa-clock text-primary"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Business Hours</h3>
                                        <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <span className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                                        <i className="fa-brands fa-twitter"></i>
                                    </span>
                                    <span className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </span>
                                    <span className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                                        <i className="fa-brands fa-github"></i>
                                    </span>
                                    <span className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                                        <i className="fa-brands fa-instagram"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div id="contact-form-container" className="bg-background dark:bg-[#0f0f16] rounded-2xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                            
                            <form id="contact-form" className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-muted-foreground mb-2">First Name *</label>
                                        <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"/>
                                        <span className="error-message text-red-500 text-sm hidden">First name is required</span>
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-muted-foreground mb-2">Last Name *</label>
                                        <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"/>
                                        <span className="error-message text-red-500 text-sm hidden">Last name is required</span>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email Address *</label>
                                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"/>
                                    <span className="error-message text-red-500 text-sm hidden">Please enter a valid email address</span>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"/>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">Subject *</label>
                                    <select id="subject" name="subject" required className="w-full px-4 py-3 border dark:bg-[#0f0f16] border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="sales">Sales</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <span className="error-message text-red-500 text-sm hidden">Please select a subject</span>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message *</label>
                                    <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="Tell us about your project or inquiry..."></textarea>
                                    <span className="error-message text-red-500 text-sm hidden">Message is required</span>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <input type="checkbox" id="privacy" name="privacy" required className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"/>
                                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                                        I agree to the <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span> and 
                                        <span className="text-primary hover:underline cursor-pointer">Terms of Service</span> *
                                    </label>
                                </div>
                                <span className="error-message text-red-500 text-sm hidden">Please accept the privacy policy</span>

                                <button type="submit" id="submit-btn" className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold  transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
                                    <span className="submit-text">Send Message</span>
                                    <span className="loading-text hidden">
                                        <i className="mr-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-spinner fa-spin" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="spinner" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"></path></svg></i>Sending...
                                    </span>
                                </button>
                            </form>

                            <div id="success-message" className="hidden mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <div className="flex items-center">
                                    <i className="fa-solid fa-circle-check text-green-500"></i>
                                    <div>
                                        <h3 className="font-semibold text-green-800">Message Sent Successfully!</h3>
                                        <p className="text-green-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;