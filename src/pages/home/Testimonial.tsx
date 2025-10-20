import { Star } from "lucide-react";

const Testimonial = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-5xl font-bold text-foreground">What our riders say</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Don't just take our word for it. Here's what our community of riders has to say about their experience.</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-muted rounded-2xl p-8">
                        <div className="flex items-center space-x-1 mb-4">
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">"RideFlow has completely changed how I get around the city. The drivers are professional, the cars are clean, and the app is so easy to use."</p>
                        <div className="flex items-center space-x-3">
                            <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" className="w-12 h-12 rounded-full"/>
                            <div>
                                <div className="font-semibold text-foreground">Sarah Johnson</div>
                                <div className="text-sm text-muted-foreground">Marketing Manager</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-muted rounded-2xl p-8">
                        <div className="flex items-center space-x-1 mb-4">
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">"I use RideFlow daily for my commute. It's reliable, affordable, and the real-time tracking gives me peace of mind. Highly recommended!"</p>
                        <div className="flex items-center space-x-3">
                            <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" className="w-12 h-12 rounded-full"/>
                            <div>
                                <div className="font-semibold text-foreground">Michael Chen</div>
                                <div className="text-sm text-muted-foreground">Software Developer</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-muted rounded-2xl p-8">
                        <div className="flex items-center space-x-1 mb-4">
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">"The customer service is exceptional. When I had an issue with a ride, they resolved it immediately. This is how ride-sharing should be done."</p>
                        <div className="flex items-center space-x-3">
                            <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" className="w-12 h-12 rounded-full"/>
                            <div>
                                <div className="font-semibold text-foreground">Emily Rodriguez</div>
                                <div className="text-sm text-muted-foreground">Teacher</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;