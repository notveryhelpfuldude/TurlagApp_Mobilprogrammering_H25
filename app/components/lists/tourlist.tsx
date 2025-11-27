import React, { use, useState, useEffect } from "react";
import { TourCard } from "../TourCard";
import { Tour } from "@/src/data/tours";
import { listAllTours } from "Appwrite/providers/tourprovider";
import { View, Text, FlatList } from "react-native";

export default function TourList() {
    const [tours, setTours] = useState<Tour[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        let isMounted = true;
        (async () => {
            setLoading(true);
            try {
                const fetchedTours = await listAllTours();
                if (!isMounted) return;
                setTours(fetchedTours);
                console.log("Fetched tours:", fetchedTours);
            } catch (err) {
                if (!isMounted) return;
                setError("Failed to load tours.");
            } finally {
                if (!isMounted) setLoading(false);
            }
        })();
        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) {
        return <Text>Loading tours...</Text>;
    }
    if (error) {
        return <Text>{error}</Text>;
    }
    return (
    <FlatList
      data={tours}
      keyExtractor={(item) => item.id ?? item.$id ?? JSON.stringify(item)}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 40, paddingHorizontal: 16 }}
      renderItem={({ item }) => (
        <TourCard
          tour={item as Tour}
          onPress={() => {
          }}
        />
      )}
    />
    );

}