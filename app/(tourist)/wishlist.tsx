// app/(tourist)/wishlist.tsx
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import type { Tour } from "src/data/tours";
import { useWishlist } from "src/context/WishlistContext";
import { PrimaryButton } from "../components/PrimaryButton";

export default function WishlistScreen() {
  const { items, removeFromWishlist } = useWishlist();
  const router = useRouter();

  const handleBook = (tour: Tour) => {
    router.push({
      pathname: "/(tourist)/checkout",
      params: {
        activityId: tour.$id ?? "",
        title: tour.title,
        // checkout-skjermen forventer normalt string
        price: tour.priceNOK?.toString() ?? "0",
      },
    });
  };

  if (!items.length) {
    return (
      <View style={styles.centered}>
        <Text style={styles.emptyTitle}>Ønskelisten er tom</Text>
        <Text style={styles.emptyText}>
          Gå til Hjem-fanen og trykk «Legg til ønskeliste» på turer du vil lagre.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Ønskeliste</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.$id ?? item.title}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.imageURL ? (
              <Image
                source={{ uri: item.imageURL }}
                style={styles.image}
                resizeMode="cover"
              />
            ) : null}

            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.price}>{item.priceNOK} kr</Text>
            </View>

            <View style={styles.cardFooter}>
              <PrimaryButton
                title="Slett"
                onPress={() => item.$id && removeFromWishlist(item.$id)}
              />
              <View style={{ width: 8 }} />
              <PrimaryButton title="Book" onPress={() => handleBook(item)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f3f4f6",
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },
  centered: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },
  card: {
    borderRadius: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    marginBottom: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    padding: 12,
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  location: {
    fontSize: 14,
    color: "#6b7280",
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 4,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 12,
    paddingTop: 0,
  },
});
