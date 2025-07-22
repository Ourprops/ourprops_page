"use client";

import dynamic from "next/dynamic";

// Load the actual map component dynamically
const MapView = dynamic(() => import("../home/map"), {
  ssr: false,
});

export default function MapSection() {
  return <MapView />;
}
