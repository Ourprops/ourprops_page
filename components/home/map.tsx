'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Polygon, Marker } from '@react-google-maps/api';
import { Montserrat } from 'next/font/google';
import { Button } from '../ui/button';

// Google Maps API libraries we need to load
const libraries: ('drawing' | 'geometry' | 'places' | 'visualization')[] = [];

// Default map center - Accra, Ghana
const defaultCenter = {
    lat: 5.6038,
    lng: -0.1869
};

// Shape types
type ShapeType = 'polygon' | 'rectangle';

// Shape interface
interface Shape {
    id: string;
    type: ShapeType;
    coordinates: Array<{ lat: number; lng: number }>;
    properties: {
        name: string;
        description?: string;
        color: string;
        fillOpacity?: number;
        strokeWeight?: number;
    };
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

// Mock data for shapes - smaller house plots
const mockShapes: Shape[] = [
    {
        id: 'house-1',
        type: 'polygon',
        coordinates: [
            { lat: 5.604733218203044, lng: -0.18579707570219428 },
            { lat: 5.6041032427028075, lng: -0.18607066102171332 },
            { lat: 5.604001805906185, lng: -0.185754160357956 },
            { lat: 5.604626442742363, lng: -0.1854709061143606 },
        ],
        properties: {
            name: 'House 1',
            description: '2 Bedroom Bungalow',
            color: '#4285F4',
            fillOpacity: 0.4,
            strokeWeight: 2
        }
    },
    {
        id: 'house-2',
        type: 'polygon',
        coordinates: [
            { lat: 5.603564025824606, lng: -0.18643007702970893 },
            { lat: 5.603483944070562, lng: -0.18609748311186225 },
            { lat: 5.6028966775388405, lng: -0.18623159356260688 },
            { lat: 5.602960743007376, lng: -0.18653736539030463 },
        ],
        properties: {
            name: 'House 2',
            description: '3 Bedroom Duplex',
            color: '#34A853',
            fillOpacity: 0.4,
            strokeWeight: 2
        }
    },
    {
        id: 'house-3',
        type: 'polygon',
        coordinates: [
            { lat: 5.603131584222397, lng: -0.18793211407804877 },
            { lat: 5.603713511736053, lng: -0.1877819103732148 },
            { lat: 5.6034519113658865, lng: -0.18727765507841498 },
            { lat: 5.602912693906635, lng: -0.18742785878324897 },
        ],
        properties: {
            name: 'House 3',
            description: '4 Bedroom Mansion',
            color: '#EA4335',
            fillOpacity: 0.4,
            strokeWeight: 2
        }
    }
];

// Mock API function to fetch shapes
const fetchShapes = async (): Promise<Shape[]> => {
    // In a real app, this would be an API call
    // const response = await fetch('/api/shapes');
    // return response.json();
    return new Promise(resolve => setTimeout(() => resolve(mockShapes), 500));
};

const InteractiveMap = () => {
    const [shapes, setShapes] = useState<Shape[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedShape, setSelectedShape] = useState<Shape | null>(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const mapRef = useRef<google.maps.Map | null>(null);

    const handleShapeClick = useCallback((shape: Shape) => {
        setSelectedShape(shape);
        if (mapRef.current && shape.coordinates.length > 0) {
            const bounds = new window.google.maps.LatLngBounds();
            shape.coordinates.forEach(coord => bounds.extend(coord));
            mapRef.current.fitBounds(bounds);
        }
    }, []);

    // Load shapes on component mount
    useEffect(() => {
        const loadShapes = async () => {
            try {
                setIsLoading(true);
                const data = await fetchShapes();
                setShapes(data);
            } catch (error) {
                console.error('Error loading shapes:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadShapes();
    }, []);

    const mapContainerStyle = {
        width: '100%',
        height: '600px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    };

    const mapOptions: google.maps.MapOptions = {
        center: defaultCenter,
        zoom: 18,
        mapTypeId: 'satellite',
        tilt: 45,
        styles: [
            {
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'transit',
                elementType: 'labels.icon',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ visibility: 'simplified' }]
            }
        ],
        
    };

    // Add loading state for the map
    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
        setMapLoaded(true);
        // Enable 3D buildings
        const buildingsLayer = map.get("buildings");
        if (buildingsLayer) {
            buildingsLayer.setMap(map);
            map.setOptions({
                styles: [
                    { featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
                    { featureType: 'transit', elementType: 'labels', stylers: [{ visibility: 'off' }] },
                    { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#e9e9e9' }] },
                    { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f5f5f5' }] },
                    { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
                    { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#e0e0e0' }] },
                    { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#a0a0a0' }] },
                    { elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { weight: 2 }] },
                    { elementType: 'labels.text.fill', stylers: [{ color: '#000000' }] },
                    { featureType: 'road', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
                    { featureType: 'road.local', elementType: 'geometry', stylers: [{ visibility: 'on' }, { color: '#e0e0e0' }, { weight: 2.0 }] }
                ]
            });
        }
    }, []);

    // if (!process.env.NEXT_PUBLIC_GOOGLE_API_KEY) {
    //     return (
    //         <div className="w-full h-[600px] flex items-center justify-center bg-gray-100 rounded-lg">
    //             <div className="text-center p-6">
    //                 <h3 className="text-lg font-medium text-gray-900 mb-2">Google Maps API Key Missing</h3>
    //                 <p className="text-gray-600">Please add your Google Maps API key to the environment variables.</p>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className="w-full relative pt-20">
            {/* Title Section */}
            <div className="mb-6 px-4 xl:px-20 lg:px-10 md:px-5">
                <h1 className={`sm:text-4xl text-3xl font-medium ${montserrat.className} lg:leading-[3rem] md:mt-2 mt-4 tracking-tighter text-black`}>From North to South – Verified Properties at Your Fingertips</h1>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">Real properties, real owners — verified and mapped for your confidence.</p>
            </div>

            {/* Sidebar with house list */}
            <div className="absolute top-[250px] left-4 z-10 bg-white p-4 rounded-lg shadow-lg max-w-xs sm:block hidden">
                <h3 className="font-bold mb-2">Properties</h3>
                {isLoading ? (
                    <div className="">

                    </div>
                ) : (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                        {shapes.map(shape => (
                            <div 
                                key={shape.id}
                                className={`p-3 rounded cursor-pointer hover:bg-gray-50 transition-colors ${
                                    selectedShape?.id === shape.id 
                                        ? 'bg-blue-50 border-l-4 border-blue-500' 
                                        : 'border-l-4 border-transparent'
                                }`}
                                onClick={() => handleShapeClick(shape)}
                            >
                                <div className="font-medium">{shape.properties.name}</div>
                                <div className="text-sm text-gray-500">{shape.properties.description}</div>
                                <div className="flex items-center mt-1">
                                    <span 
                                        className="inline-block w-3 h-3 rounded-full mr-2"
                                        style={{ backgroundColor: shape.properties.color }}
                                    ></span>
                                    <span className="text-xs text-gray-400">Double click to view</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Map */}
            <div className="relative border border-gray-200 rounded-lg overflow-hidden">
                <LoadScript
                    googleMapsApiKey="AIzaSyCvuZmy0Phh1P4BAf3S9yW5XtqArKyLAoU"
                    libraries={libraries}
                    onLoad={() => setMapLoaded(true)}
                >
                    {!mapLoaded ? (
                        <div className="w-full h-[600px] flex items-center justify-center bg-gray-100 rounded-lg">
                            <div className="animate-pulse text-gray-500 text-center mt-[50px]">Loading map...</div>
                        </div>
                    ) : (
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            options={mapOptions}
                            onLoad={onLoad}
                        >
                            {/* Render house plots */}
                            {shapes.map(shape => (
                                <React.Fragment key={shape.id}>
                                    <Polygon
                                        paths={shape.coordinates}
                                        options={{
                                            fillColor: shape.properties.color,
                                            fillOpacity: shape.properties.fillOpacity || 0.3,
                                            strokeColor: shape.properties.color,
                                            strokeOpacity: 0.8,
                                            strokeWeight: shape.properties.strokeWeight || 2,
                                            clickable: true,
                                            zIndex: 1,
                                        }}
                                        onClick={() => handleShapeClick(shape)}
                                    />
                                    
                                    {/* House label */}
                                    {shape.coordinates.length > 0 && (
                                        <Marker
                                            position={{
                                                lat: shape.coordinates[0].lat - 0.0001, // Slightly above the plot
                                                lng: shape.coordinates[0].lng
                                            }}
                                            clickable={true}
                                            icon="https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                        </GoogleMap>
                    )}
                </LoadScript>

                {selectedShape && (
                    <div className="absolute top-4 right-4 z-10 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                        <h3 className="font-bold mb-2">{selectedShape.properties.name}</h3>
                        <p className="text-sm text-gray-700 mb-2">{selectedShape.properties.description}</p>
                        <button 
                            onClick={() => setSelectedShape(null)}
                            className="text-sm text-blue-600 hover:text-blue-800"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-center mt-6">
                <Button>
                    Add Your Property to the Map
                </Button>
            </div>
        </div>
    );
};

export default InteractiveMap;