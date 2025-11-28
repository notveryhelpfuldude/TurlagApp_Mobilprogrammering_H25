// app/components/TourCard.tsx
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import type { Tour } from "src/data/tours";
import { PrimaryButton } from "./PrimaryButton";
import { useWishlist } from "src/context/WishlistContext";

type Props = {
  tour: Tour;
  onPress?: () => void;
  onBookPress?: () => void;
};

export function TourCard({ tour, onPress, onBookPress }: Props) {
  const { addToWishlist } = useWishlist();

  const handleAddToWishlist = () => {
    addToWishlist(tour);
  };

  const handleMainPress = onBookPress ?? onPress ?? (() => {});

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={onPress}
    >
      {tour.imageURL ? (
        <Image
          source={{ uri: tour.imageURL }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : null}

      <View style={styles.content}>
        <Text style={styles.title}>{tour.title}</Text>
        <Text style={styles.location}>{tour.location}</Text>
        <Text style={styles.price}>{tour.priceNOK} kr</Text>

        {tour.tourDescription ? (
          <Text style={styles.description} numberOfLines={2}>
            {tour.tourDescription}
          </Text>
        ) : null}

        <View style={styles.footer}>
          <Text style={styles.spots}>
            {tour.spotsLeft ?? 0} ledige plasser
          </Text>

          <View style={styles.buttonsRow}>
            <PrimaryButton
              title="Legg til ønskeliste"
              onPress={handleAddToWishlist}
            />
            <View style={{ width: 8 }} />
            <PrimaryButton
              title="Se mer / meld på"
              onPress={handleMainPress}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  image: {
    width: "100%",
    height: 180,
  },
  content: {
    padding: 12,
    gap: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  location: {
    fontSize: 14,
    color: "#6b7280",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 4,
  },
  description: {
    fontSize: 13,
    color: "#4b5563",
    marginTop: 4,
  },
  footer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  spots: {
    fontSize: 12,
    color: "#6b7280",
  },
  buttonsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
