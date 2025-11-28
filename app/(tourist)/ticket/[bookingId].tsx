import { View, Text, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useBookings } from "src/context/BookingContext";

export default function TicketScreen() {
  const router = useRouter();
  const { bookingId } = useLocalSearchParams<{ bookingId?: string }>();
  const { getBookingById } = useBookings();

  const booking = bookingId ? getBookingById(bookingId) : undefined;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Takk for bestillingen!</Text>

      {booking ? (
        <View style={styles.card}>
          <Text style={styles.cardHeading}>Din billett</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Bestillingsnummer</Text>
            <Text style={styles.value}>{booking.id}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Tur</Text>
            <Text style={styles.value}>{booking.title}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Pris</Text>
            <Text style={styles.price}>{booking.price} kr</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Telefon</Text>
            <Text style={styles.value}>{booking.phoneNumber}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.cardHeading}>Fant ikke bestilling</Text>
          <Text style={styles.value}>
            Klarte ikke å hente denne bestillingen. Gå til "Mine bookinger" for
            oversikt.
          </Text>
        </View>
      )}

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(tourist)/bookings")}
      >
        <Text style={styles.buttonText}>Se mine bookinger</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#050505", padding: 20 },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#2c2c2c",
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 12,
  },
  row: {
    marginTop: 8,
  },
  label: { fontSize: 13, color: "#aaaaaa" },
  value: { fontSize: 16, color: "#ffffff", marginTop: 2 },
  price: { fontSize: 20, fontWeight: "700", color: "#ffffff", marginTop: 2 },
  button: {
    marginTop: 20,
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: "center",
    backgroundColor: "#1e88e5",
  },
  buttonText: { color: "#ffffff", fontWeight: "600", fontSize: 16 },
});
