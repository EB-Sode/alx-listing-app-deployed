// Common interface for the Card component
export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

// Common interface for the Button component
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[]; // array of category tags
  price: number; // price in your currency
  offers: {
    bed: string;       // number of beds as string
    shower: string;    // number of showers as string
    occupants: string; // occupancy range as string
  };
  image: string;       // image URL
  discount: string;    // discount percentage as string
}

import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface Property {
  id: number;
  title: string;
  description: string;
  image?: string;
  price?: number;
  location?: string;
}

export interface ReviewSectionProps {
  propertyId: number | string;
}

export interface Review {
  id: number;
  comment: string;
}
