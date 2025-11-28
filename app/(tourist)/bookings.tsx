// app/(tourist)/bookings.tsx
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { useBookings } from "src/context/BookingContext";

export default function BookingsScreen() {
  const { bookings } = useBookings();

  if (!bookings.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>Ingen bookinger enda</Text>
        <Text style={styles.emptyText}>
          Når du gjennomfører en betaling, vil turene dukke opp her.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dine bestillinger</Text>

      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.label}>Bestillingsnummer</Text>
            <Text style={styles.value}>{item.id}</Text>

            <Text style={styles.label}>Pris</Text>
            <Text style={styles.value}>{item.price} kr</Text>

            <Text style={styles.label}>Navn</Text>
            <Text style={styles.value}>{item.customerName}</Text>

            <Text style={styles.label}>E-post</Text>
            <Text style={styles.value}>{item.customerEmail}</Text>

            <Text style={styles.label}>Telefon</Text>
            <Text style={styles.value}>{item.phoneNumber}</Text>

            <Text style={styles.label}>Bestilt</Text>
            <Text style={styles.value}>
              {new Date(item.createdAt).toLocaleString()}
            </Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#050505" },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1f2933",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 8,
  },
  label: { fontSize: 12, color: "#9ca3af", marginTop: 4 },
  value: { fontSize: 14, color: "#ffffff", marginTop: 2 },
  emptyContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#050505",
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#ffffff",
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: "#9ca3af",
    textAlign: "center",
  },
});
