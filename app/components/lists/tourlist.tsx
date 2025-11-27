import React, { use, useState } from "react";
import { TourCard } from "../TourCard";
import { Tour } from "@/src/data/tours";

export default function TourList() {
    const [tours, setTours] = useState<Tour[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
}