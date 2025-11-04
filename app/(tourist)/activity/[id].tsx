import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function ActivityDetailsScreen() {
  const router = useRouter();
  const { id, title, price } = useLocalSearchParams<{
    id: string;
    title: string;
    price: string;
  }>();

  const numericPrice = Number(price ?? 0);

  function goToCheckout() {
    router.push({
      pathname: "/(tourist)/checkout",
      params: {
        activityId: id,
        title,
        price: numericPrice.toString(),
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title ?? "Turdetaljer"}</Text>
      {/* Din info om turen her */}

      <Pressable style={styles.button} onPress={goToCheckout}>
        <Text style={styles.buttonText}>
          Book tur – {Number.isNaN(numericPrice) ? "pris ukjent" : `${numericPrice} kr`}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#050505", padding: 20 },
  title: { fontSize: 22, fontWeight: "700", color: "#fff", marginBottom: 12 },
  button: {
    marginTop: 20,
    backgroundColor: "#1e88e5",
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600" },
});
