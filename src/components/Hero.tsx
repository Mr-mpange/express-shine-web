import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Clock, Shield } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroTruck}
          alt="Professional courier truck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Reliable Courier &{" "}
            <span className="text-gold">Logistics Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Delivering excellence across the region with speed, security, and reliability you can trust.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#about")}
              className="group"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="gold"
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="group"
            >
              Our Services
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Truck className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-blue-100 text-center">Express delivery services across all major routes</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Shield className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Transport</h3>
              <p className="text-blue-100 text-center">Your packages are safe with our secure handling</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Clock className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Service</h3>
              <p className="text-blue-100 text-center">Round-the-clock support and tracking</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;