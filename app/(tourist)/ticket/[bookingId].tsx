import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function TicketScreen() {
  const router = useRouter();
  const { id, title, price } = useLocalSearchParams<{
    id: string;
    title: string;
    price: string;
  }>();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Takk for bestillingen!</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Bestillings-ID</Text>
        <Text style={styles.value}>{id}</Text>

        <Text style={[styles.label, { marginTop: 12 }]}>Tur</Text>
        <Text style={styles.value}>{title ?? "Ukjent tur"}</Text>

        <Text style={[styles.label, { marginTop: 12 }]}>Betalt</Text>
        <Text style={styles.price}>{price ? `${price} kr` : "—"}</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.replace("/(tourist)/bookings")}
      >
        <Text style={styles.buttonText}>Se mine bookinger</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    padding: 20,
    gap: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ffffff",
  },
  card: {
    backgroundColor: "#151515",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#2c2c2c",
  },
  label: { fontSize: 13, color: "#aaaaaa" },
  value: { fontSize: 16, color: "#ffffff", marginTop: 2 },
  price: { fontSize: 20, fontWeight: "700", color: "#ffffff", marginTop: 2 },
  button: {
    marginTop: 8,
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: "center",
    backgroundColor: "#1e88e5",
  },
  buttonText: { color: "#ffffff", fontWeight: "600", fontSize: 16 },
});
