import { Truck, Package, Plane, Ship, ShoppingCart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import deliveryPersonImg from "@/assets/delivery-person.jpg";
import expressDeliveryImg from "@/assets/express-delivery.jpg";
import internationalShippingImg from "@/assets/international-shipping.jpg";
import ecommerceFulfillmentImg from "@/assets/ecommerce-fulfillment.jpg";
import customerServiceImg from "@/assets/customer-service.jpg";
import warehouseImg from "@/assets/warehouse.jpg";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Courier Services",
      description: "Fast and reliable door-to-door delivery for documents and small packages",
      image: deliveryPersonImg,
    },
    {
      icon: Truck,
      title: "Freight Services",
      description: "Heavy cargo transportation with specialized handling and tracking",
      image: expressDeliveryImg,
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Same-day and next-day delivery options for urgent shipments",
      image: customerServiceImg,
    },
    {
      icon: Ship,
      title: "Logistics Solutions",
      description: "End-to-end supply chain management and warehousing services",
      image: warehouseImg,
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Support",
      description: "Specialized delivery solutions for online retailers and marketplaces",
      image: ecommerceFulfillmentImg,
    },
    {
      icon: Plane,
      title: "International Shipping",
      description: "Cross-border delivery services with customs clearance support",
      image: internationalShippingImg,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive courier and logistics solutions tailored to meet your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent group-hover:from-primary/90 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-gold-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-lg p-12">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Ship with Safirisha Express?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get started with our reliable delivery services today. Contact us for a custom quote.
          </p>
          <Button variant="gold" size="lg" onClick={() => {
            const element = document.querySelector("#contact");
            element?.scrollIntoView({ behavior: "smooth" });
          }}>
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;