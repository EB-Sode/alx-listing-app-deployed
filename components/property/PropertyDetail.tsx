import React from "react";
import { Property } from "@/interfaces";

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Image */}
      {property.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        {property.title}
      </h1>

      {/* Location */}
      {property.location && (
        <p className="text-gray-500 mb-4">
          📍 {property.location}
        </p>
      )}

      {/* Price */}
      {property.price && (
        <p className="text-2xl font-semibold text-blue-600 mb-6">
          ₦{property.price.toLocaleString()}
        </p>
      )}

      {/* Description */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-2">
          Property Description
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {property.description}
        </p>
      </div>
    </div>
  );
};

export default PropertyDetail;
