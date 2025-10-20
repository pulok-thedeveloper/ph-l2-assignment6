const teamMembers = [
  {
    name: "Michael Chen",
    role: "Chief Executive Officer",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    desc: "15+ years of experience in technology leadership, previously VP at Google. Passionate about scaling innovative solutions.",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    desc: "Former Microsoft architect with deep expertise in cloud infrastructure and AI. Leads our technical innovation.",
  },
  {
    name: "David Rodriguez",
    role: "Chief Operating Officer",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
    desc: "Operations expert with 12+ years at Amazon. Ensures seamless execution and delivery across all departments.",
  },
  {
    name: "Emily Park",
    role: "Chief Marketing Officer",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
    desc: "Brand strategist with expertise in growth marketing. Previously led marketing at Salesforce and Dropbox.",
  },
  {
    name: "James Wilson",
    role: "Chief Financial Officer",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    desc: "Financial strategist with 18+ years in tech finance. Former CFO at multiple successful startups and IPOs.",
  },
  {
    name: "Lisa Thompson",
    role: "Chief Product Officer",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
    desc: "Product visionary with experience at Apple and Uber. Drives our product strategy and user experience innovation.",
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-muted/40 dark:bg-[#0f0f16] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The visionary leaders driving our company forward
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-background dark:bg-[#12121c] rounded-2xl p-8 shadow-md hover:shadow-xl text-center transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover ring-4 ring-primary/20"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.desc}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center space-x-3">
                {["linkedin", "twitter"].map((icon) => (
                  <span
                    key={icon}
                    className="w-10 h-10 bg-muted/70 dark:bg-[#1a1a25] rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    <i
                      className={`fa-brands fa-${icon} text-2xl text-foreground`}
                    ></i>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
