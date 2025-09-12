import { Target, Eye, Users, Mail, Phone } from "lucide-react";
import warehouseImg from "@/assets/warehouse.jpg";
import leadershipTeamImg from "@/assets/leadership-team.jpg";
import controlCenterImg from "@/assets/control-center.jpg";
import ceoPortrait from "@/assets/ceo-portrait.jpg";
import operationsManager from "@/assets/operations-manager.jpg";
import customerManager from "@/assets/customer-manager.jpg";
import logisticsCoordinator from "@/assets/logistics-coordinator.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Safirisha Express</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading courier and logistics company dedicated to providing reliable, efficient, and 
            secure delivery solutions across the region.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={warehouseImg}
              alt="Safirisha Express warehouse operations"
              className="w-full h-80 object-cover rounded-lg shadow-elegant"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Story</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Safirisha Express Company Limited was established with a vision to revolutionize 
              the courier and logistics industry. We combine traditional reliability with modern 
              technology to deliver exceptional service to our clients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With years of experience and a growing network of trusted partners, we have built 
              a reputation for excellence in courier services, freight management, and logistics solutions.
            </p>
          </div>
        </div>

        {/* Additional Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative">
            <img
              src={leadershipTeamImg}
              alt="Safirisha Express leadership team"
              className="w-full h-60 object-cover rounded-lg shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xl font-bold">Leadership Excellence</h4>
              <p className="text-blue-100">Experienced management team</p>
            </div>
          </div>
          <div className="relative">
            <img
              src={controlCenterImg}
              alt="Modern logistics control center"
              className="w-full h-60 object-cover rounded-lg shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xl font-bold">Technology Driven</h4>
              <p className="text-blue-100">Advanced tracking and monitoring</p>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-card rounded-lg border shadow-sm hover:shadow-elegant transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading courier and logistics company in the region, known for 
              our reliability, innovation, and exceptional customer service.
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-lg border shadow-sm hover:shadow-elegant transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-gold-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide fast, secure, and cost-effective courier and logistics solutions 
              that exceed customer expectations and contribute to business growth.
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-lg border shadow-sm hover:shadow-elegant transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
            <p className="text-muted-foreground leading-relaxed">
              Reliability, integrity, customer focus, innovation, and continuous improvement 
              are the core values that drive everything we do.
            </p>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Meet Our <span className="text-primary">Leadership Team</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering excellence in courier and logistics services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Kamau",
                role: "Chief Executive Officer",
                image: ceoPortrait,
                email: "j.kamau@safirishaexpress.com",
                phone: "+254 700 123 456",
                description: "15+ years experience in logistics and supply chain management"
              },
              {
                name: "Grace Wanjiku",
                role: "Operations Manager",
                image: operationsManager,
                email: "g.wanjiku@safirishaexpress.com",
                phone: "+254 733 234 567",
                description: "Expert in warehouse operations and fleet management"
              },
              {
                name: "David Ochieng",
                role: "Customer Service Manager",
                image: customerManager,
                email: "d.ochieng@safirishaexpress.com",
                phone: "+254 722 345 678",
                description: "Passionate about customer satisfaction and service excellence"
              },
              {
                name: "Sarah Mutua",
                role: "Logistics Coordinator",
                image: logisticsCoordinator,
                email: "s.mutua@safirishaexpress.com",
                phone: "+254 711 456 789",
                description: "Specialist in route optimization and delivery planning"
              }
            ].map((member, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2 text-primary" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2 text-gold" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;