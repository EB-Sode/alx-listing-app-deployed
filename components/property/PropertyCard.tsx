import React from "react";
import { Property } from "../../interfaces";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {property.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {property.title}
        </h3>

        <p className="text-gray-600 text-sm">
          {property.description}
        </p>

        {property.price && (
          <p className="text-blue-600 font-bold mt-2">
            ₦{property.price.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
