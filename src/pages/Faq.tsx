import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Faq = () => {
    const items = [
        {
            id: "1",
            title: "How do I create a rider account?",
            content: "To create a rider account, click on the 'Sign Up' button, enter your phone number or email, verify it, and complete your profile with basic information such as name and payment method."
        },
        {
            id: "2",
            title: "How do I become a driver on the platform?",
            content: "To become a driver, go to the 'Join as Driver' page, fill out the registration form, and upload the required documents such as driving license, NID, and vehicle information. After verification, you’ll be approved to start accepting rides."
        },
        {
            id: "3",
            title: "How can I book a ride?",
            content: "Simply open the app or website, set your pickup and drop-off locations, select a ride type, and confirm. A nearby driver will be assigned automatically."
        },
        {
            id: "4",
            title: "Can I schedule a ride in advance?",
            content: "Yes, riders can schedule rides in advance by selecting the 'Schedule Ride' option and choosing the desired date and time. A driver will be assigned near the scheduled time."
        },
        {
            id: "5",
            title: "What payment methods are supported?",
            content: "We support multiple payment methods including cash, credit/debit cards, mobile banking (bKash, Nagad), and digital wallets."
        },
        {
            id: "6",
            title: "How do drivers get paid?",
            content: "Drivers receive payments directly to their linked mobile wallet or bank account. Earnings can be tracked daily through the driver dashboard."
        },
        {
            id: "7",
            title: "Is there an admin panel for managing the system?",
            content: "Yes, the admin dashboard allows management of users, rides, payments, promotions, and real-time analytics to ensure smooth operations."
        },
        {
            id: "8",
            title: "What should I do if I face a problem during a ride?",
            content: "If you encounter any issue during a ride, you can use the in-app 'Support' feature to report it or contact customer care directly."
        },
        {
            id: "9",
            title: "How is the fare calculated?",
            content: "The fare is calculated based on the distance, estimated time, and dynamic pricing during peak hours. An upfront fare is shown before confirming the ride."
        },
        {
            id: "10",
            title: "Can I cancel a ride after booking?",
            content: "Yes, riders can cancel a ride before pickup. However, a small cancellation fee may apply if the driver is already on the way."
        }
    ]

    return (
        <div className="max-w-7xl mx-auto flex flex-col px-6 lg:px-8 py-12">
            <section id="hero-section" className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Frequently Asked Questions
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    Find answers to common questions about our platform, features, and services. Can't find what you're looking for? Contact our support team.
                </p>
            </section>
            <section>
                <div className="space-y-4">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-2"
                        defaultValue="1"
                    >
                        {items.map((item) => (
                        <AccordionItem
                            value={item.id}
                            key={item.id}
                            className="rounded-md border bg-background px-4 py-1 outline-none last:border-b has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
                        >
                            <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline focus-visible:ring-0">
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent className="pb-2 text-muted-foreground">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
};

export default Faq;