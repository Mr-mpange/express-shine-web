import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Package, MapPin, Clock, CheckCircle, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Tracking = () => {
  const { toast } = useToast();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock tracking data
  const mockTrackingData = {
    trackingNumber: "SE2024001234",
    status: "In Transit",
    currentLocation: "Nairobi Distribution Center",
    estimatedDelivery: "Tomorrow, 2:00 PM",
    timeline: [
      {
        status: "Package Picked Up",
        location: "Mwanza Collection Point",
        time: "2024-01-15 09:30 AM",
        completed: true,
      },
      {
        status: "In Transit",
        location: "Nairobi Distribution Center",
        time: "2024-01-15 02:45 PM",
        completed: true,
      },
      {
        status: "Out for Delivery",
        location: "Nairobi Delivery Hub",
        time: "Expected: Tomorrow 10:00 AM",
        completed: false,
      },
      {
        status: "Delivered",
        location: "Final Destination",
        time: "Expected: Tomorrow 2:00 PM",
        completed: false,
      },
    ],
  };

  const handleTrack = () => {
    if (!trackingNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter a tracking number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setTrackingData(mockTrackingData);
      setIsLoading(false);
      toast({
        title: "Package Found!",
        description: "Tracking information loaded successfully",
      });
    }, 1500);
  };

  return (
    <section id="tracking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Track Your <span className="text-primary">Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enter your tracking number to get real-time updates on your shipment
          </p>
        </div>

        {/* Tracking Input */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Enter tracking number (e.g., SE2024001234)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="h-12 text-lg"
                  onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                />
              </div>
              <Button
                onClick={handleTrack}
                disabled={isLoading}
                size="lg"
                variant="gold"
                className="h-12 px-8"
              >
                {isLoading ? (
                  <div className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Search className="h-5 w-5 mr-2" />
                    Track Package
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>

        {/* Tracking Results */}
        {trackingData && (
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Tracking Number</h3>
                  <p className="text-muted-foreground">{trackingData.trackingNumber}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-gold-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Current Location</h3>
                  <p className="text-muted-foreground">{trackingData.currentLocation}</p>
                  {/* Map Embed */}
                  <div style={{marginTop: '16px', borderRadius: '12px', overflow: 'hidden'}}>
                    {trackingData.currentLocation ? (
                      <iframe
                        title="Current Location Map"
                        width="100%"
                        height="200"
                        style={{border:0}}
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.google.com/maps?&q=${encodeURIComponent(trackingData.currentLocation)}&output=embed`}
                      ></iframe>
                    ) : (
                      <div style={{padding: '24px', color: '#888'}}>Map unavailable for this location.</div>
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Estimated Delivery</h3>
                  <p className="text-muted-foreground">{trackingData.estimatedDelivery}</p>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Shipping Timeline</h3>
                <div className="space-y-6">
                  {trackingData.timeline.map((event: any, index: number) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        event.completed 
                          ? "bg-green-500" 
                          : index === trackingData.timeline.findIndex((e: any) => !e.completed)
                          ? "bg-gold animate-pulse"
                          : "bg-muted"
                      }`}>
                        {event.completed ? (
                          <CheckCircle className="h-5 w-5 text-white" />
                        ) : index === trackingData.timeline.findIndex((e: any) => !e.completed) ? (
                          <Truck className="h-5 w-5 text-gold-foreground" />
                        ) : (
                          <div className="w-3 h-3 bg-muted-foreground rounded-full" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          event.completed ? "text-green-600" : "text-foreground"
                        }`}>
                          {event.status}
                        </h4>
                        <p className="text-muted-foreground text-sm">{event.location}</p>
                        <p className="text-muted-foreground text-xs">{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Quick Track Examples */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Try tracking with example number:</p>
          <Button
            variant="outline"
            onClick={() => {
              setTrackingNumber("SE2024001234");
              handleTrack();
            }}
            className="text-primary hover:text-primary-foreground"
          >
            SE2024001234
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tracking;