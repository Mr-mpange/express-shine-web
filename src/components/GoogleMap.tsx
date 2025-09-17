// Add this type declaration for window.google
declare global {
  interface Window {
    google: any;
  }
}
import React, { useEffect, useRef } from "react";

interface GoogleMapProps {
  location: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ location }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao";
    let scriptLoaded = !!window.google;

    function initializeMap() {
      if (!window.google || !mapRef.current) return;
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (results: any, status: any) => {
        let map;
        if (status === "OK" && results && results[0]) {
          map = new window.google.maps.Map(mapRef.current!, {
            zoom: 14,
            center: results[0].geometry.location,
          });
          new window.google.maps.Marker({
            map,
            position: results[0].geometry.location,
          });
        } else {
          // Fallback: Mwanza city center
          const fallback = { lat: -2.5164, lng: 32.9175 };
          map = new window.google.maps.Map(mapRef.current!, {
            zoom: 12,
            center: fallback,
          });
          new window.google.maps.Marker({
            map,
            position: fallback,
          });
        }
      });
    }

    if (!scriptLoaded) {
      (window as any).initMap = initializeMap;
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
      script.async = true;
      script.onload = () => {
        initializeMap();
      };
      document.body.appendChild(script);
    } else {
      initializeMap();
    }
    // Cleanup callback
    return () => {
      if ((window as any).initMap) {
        delete (window as any).initMap;
      }
    };
  }, [location]);

  return <div ref={mapRef} style={{ width: "100%", height: "300px", borderRadius: "12px" }} />;
};

export default GoogleMap;
