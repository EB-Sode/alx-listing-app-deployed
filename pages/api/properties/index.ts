import type { NextApiRequest, NextApiResponse } from "next";
import { Property } from "@/interfaces";

const properties: Property[] = [
  {
    id: 1,
    title: "Modern Apartment",
    description: "2 bedroom apartment in Lekki",
    image: "https://via.placeholder.com/400",
    price: 350000,
    location: "Lagos",
  },
  {
    id: 2,
    title: "Luxury Duplex",
    description: "5 bedroom duplex with pool",
    image: "https://via.placeholder.com/400",
    price: 1250000,
    location: "Abuja",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property[]>
) {
  res.status(200).json(properties);
}
