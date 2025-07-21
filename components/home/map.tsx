'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Polygon, Marker } from '@react-google-maps/api';

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
    const mapRef = useRef<google.maps.Map | null>(null);

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
        ]
    };

    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
        // Enable 3D buildings
        const buildingsLayer = map.get("buildings");
        if (buildingsLayer) {
            buildingsLayer.setOptions({
                styles: [
                    { stylers: [{ color: '#f5f5f5' }, { lightness: 20 }] },
                    { stylers: [{ visibility: 'on' }, { color: '#e0e0e0' }, { weight: 2.0 }] }
                ]
            });
        }
    }, []);

    const handleShapeClick = (shape: Shape) => {
        setSelectedShape(shape);
        // Optional: Center the map on the clicked shape
        if (mapRef.current && shape.coordinates.length > 0) {
            const bounds = new window.google.maps.LatLngBounds();
            shape.coordinates.forEach(coord => bounds.extend(coord));
            mapRef.current.fitBounds(bounds);
        }
    };

    return (
        <div className="w-full relative py-20">
            {/* Title Section */}
            <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold text-gray-800">Property Portfolio Map</h1>
                <p className="mt-2 text-gray-600">Explore and manage your properties with our interactive map</p>
            </div>

            {/* Sidebar with house list */}
            <div className="absolute top-[200px] left-4 z-10 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <h3 className="font-bold mb-2">Properties</h3>
                {isLoading ? (
                    <p>Loading properties...</p>
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
                                    <span className="text-xs text-gray-400">Click to view</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Map */}
            <div className="relative border border-gray-200 rounded-lg overflow-hidden">
                <LoadScript
                    googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
                    libraries={libraries}
                >
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={defaultCenter}
                        zoom={18}
                        onLoad={onLoad}
                        options={{
                            ...mapOptions,
                            disableDefaultUI: false,
                        }}
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
                                        label={{
                                            text: shape.properties.name,
                                            color: '#ffffff',
                                            className: 'font-bold text-sm',
                                            fontWeight: 'bold',
                                        }}
                                        options={{
                                            icon: {
                                                url: 'data:image/svg+xml;charset=UTF-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwIiBoZWlnaHQ9IjAiPjwvc3ZnPg==',
                                                anchor: new window.google.maps.Point(0, 0),
                                                labelOrigin: new window.google.maps.Point(0, 0)
                                            }
                                        }}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </GoogleMap>
                </LoadScript>

                {isLoading && (
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                            <span>Loading properties...</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InteractiveMap;