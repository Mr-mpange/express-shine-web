import { Target, Eye, Users } from "lucide-react";
import warehouseImg from "@/assets/warehouse.jpg";

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
      </div>
    </section>
  );
};

export default About;