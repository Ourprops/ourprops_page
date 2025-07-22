"use client";

import { useEffect, useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function MapView() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  if (!apiKey) {
    throw new Error("Google Maps API key is missing. Set it in .env.local");
  }

  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
          setUserLocation({ lat: 5.56, lng: -0.205 });
        }
      );
    } else {
      setUserLocation({ lat: 5.56, lng: -0.205 });
    }
  }, []);

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        {!userLocation && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "1.2rem",
              color: "#555",
            }}
          >
            Loading map...
          </div>
        )}

        {userLocation && (
          <Map
            center={userLocation}
            zoom={18}
            mapTypeId="hybrid"
            tilt={45}
            disableDefaultUI={true}
            rotateControl={true}
            zoomControl={true}
            fullscreenControl={true}
            mapTypeControl={true}
          >
            <Marker position={userLocation} />
          </Map>
        )}
      </div>
    </APIProvider>
  );
}
