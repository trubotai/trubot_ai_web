"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

interface LocationInputProps {
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  error?: string;
}

interface PlaceDetail {
  formattedAddress?: string;
  name?: string;
}

declare global {
  interface Window {
    google: {
      maps: {
        places: {
          PlaceAutocompleteElement: {
            new (): Element;
          };
        };
      };
    };
  }
}

const LocationInput: React.FC<LocationInputProps> = ({
  onChange,
  placeholder = "City, State",
  className = "",
  error,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const autocompleteRef = useRef<Element | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Wait for Google Maps API to load
    const containerNode = containerRef.current;

    const initAutocomplete = () => {
      if (window.google && window.google.maps && containerNode) {
        try {
          // Create the new PlaceAutocompleteElement
          autocompleteRef.current =
            new window.google.maps.places.PlaceAutocompleteElement();

          // Set up the element
          if (autocompleteRef.current) {
            // Configure the element
            autocompleteRef.current.setAttribute("placeholder", placeholder);
            autocompleteRef.current.setAttribute("types", "(cities)");

            // Add event listener for place selection
            const handlePlaceSelect = (event: Event) => {
              const customEvent = event as CustomEvent;
              const place: PlaceDetail = customEvent.detail.place;

              if (place && place.formattedAddress) {
                // Extract city and state/country
                const addressParts = place.formattedAddress.split(", ");
                let location = "";

                if (addressParts.length >= 2) {
                  // Format as "City, State/Country"
                  location = `${addressParts[0]}, ${addressParts[1]}`;
                } else {
                  location = place.formattedAddress;
                }

                onChange(location);
                setIsLoading(false);
              }
            };

            const handleRequest = () => {
              setIsLoading(true);
            };

            const handleResponse = () => {
              setIsLoading(false);
            };

            autocompleteRef.current.addEventListener(
              "gmp-placeselect",
              handlePlaceSelect
            );
            autocompleteRef.current.addEventListener(
              "gmp-request",
              handleRequest
            );
            autocompleteRef.current.addEventListener(
              "gmp-response",
              handleResponse
            );

            // Append the element to our container
            containerNode.appendChild(autocompleteRef.current);
          }
        } catch (error) {
          console.error(
            "Error initializing Google Places PlaceAutocompleteElement:",
            error
          );
        }
      }
    };

    // Check if Google Maps API is already loaded
    if (window.google && window.google.maps) {
      initAutocomplete();
    } else {
      // Wait for the script to load
      const checkGoogleMaps = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(checkGoogleMaps);
          initAutocomplete();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkGoogleMaps), 10000);
    }

    return () => {
      if (autocompleteRef.current && containerNode) {
        autocompleteRef.current.removeEventListener(
          "gmp-placeselect",
          () => {}
        );
        autocompleteRef.current.removeEventListener("gmp-request", () => {});
        autocompleteRef.current.removeEventListener("gmp-response", () => {});
        if (containerNode.contains(autocompleteRef.current)) {
          containerNode.removeChild(autocompleteRef.current);
        }
      }
    };
  }, [onChange, placeholder]);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
        <MapPin className="h-5 w-5 text-gray-400" />
      </div>
      <div
        ref={containerRef}
        className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-electric focus-within:border-transparent transition-all duration-200 ${className}`}
      />
      {isLoading && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-electric" />
        </div>
      )}
      {error && <p className="text-coral text-xs mt-1 ml-1">{error}</p>}
    </div>
  );
};

export default LocationInput;
