import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import GoogleMap from "./GoogleMap";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team for quotes, support, or general inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to experience reliable courier and logistics services? Contact us today 
                for personalized solutions that meet your delivery needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-elegant transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-muted-foreground text-sm">
                      33214 Ilemela Municipal<br />
                      Mwanza region, Tanzania
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-gold-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground text-sm">
                      +255 (0) 745 367 235<br />
                      +255 (0) 621 941 795
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground text-sm">
                      info@safirishaexpress.com<br />
                      support@safirishaexpress.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-gold-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Hours</h4>
                    <p className="text-muted-foreground text-sm">
                      Mon - Fri: 7:00 AM - 7:00 PM<br />
                      Sat: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-base font-semibold text-foreground">Name *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="h-12 text-lg border-gray-300 focus:border-primary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-base font-semibold text-foreground">Phone</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="h-12 text-lg border-gray-300 focus:border-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-base font-semibold text-foreground">Email *</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="h-12 text-lg border-gray-300 focus:border-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-base font-semibold text-foreground">Message *</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your delivery needs..."
                  className="text-lg border-gray-300 focus:border-primary"
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full text-lg font-bold py-3">
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Interactive Google Map */}
        <div className="mt-16">
          <Card className="p-4">
            <div style={{ minHeight: '300px', position: 'relative', borderRadius: '12px', overflow: 'hidden', background: '#f3f3f3' }}>
              <GoogleMap location="Ilemela, Mwanza, Tanzania" />
              {/* Fallback image if map fails to display */}
              <noscript>
                <img src="/assets/hero-warehouse.jpg" alt="Msafir Express Office" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px' }} />
              </noscript>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;