
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useBookings } from "src/context/BookingContext";

type PaymentStatus = "idle" | "processing" | "success" | "error";

export default function CheckoutScreen() {
  const router = useRouter();
  const { addBooking } = useBookings();

  const params = useLocalSearchParams<{
    activityId?: string;
    id?: string;
    title?: string;
    price?: string;
  }>();

  const activityId = (params.activityId ?? params.id) ?? null;
  const tourTitle = params.title ?? "Ukjent tur";
  const tourPrice = Number(params.price ?? 0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");  
  const [participants, setParticipants] = useState("1");
  const [status, setStatus] = useState<PaymentStatus>("idle");

  const isProcessing = status === "processing";

  function handleVippsPayment() {
    if (!phoneNumber.trim()) {
      Alert.alert(
        "Manglende informasjon",
        "Vennligst fyll inn alle feltene før du fortsetter."
        
      );
      return;
    }

    if (isProcessing) return;

    setStatus("processing");

    setTimeout(() => {
      try {
        const bookingId = Date.now().toString();

        addBooking({
          id: bookingId,
          activityId,
          title: tourTitle,
          price: tourPrice,
          customerName: name.trim(),
          customerEmail: email.trim(),
          phoneNumber: phoneNumber.trim(),       
          createdAt: new Date().toISOString(),
        });

        setStatus("success");

        router.replace({
          pathname: "/(tourist)/ticket/[bookingId]",
          params: { bookingId },
        });
      } catch (error) {
        setStatus("error");
        Alert.alert(
          "Noe gikk galt",
          "Betalingen feilet. Prøv igjen senere."
        );
      }
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Betaling</Text>

      <View style={styles.summaryCard}>
        <Text style={styles.label}>Tur</Text>
        <Text style={styles.value}>{tourTitle}</Text>

        <Text style={[styles.label, { marginTop: 12 }]}>
          Pris per person
        </Text>
        <Text style={styles.value}>{tourPrice} kr</Text>

        <Text style={[styles.label, { marginTop: 12 }]}>Deltakere</Text>
        <TextInput
          style={styles.input}
          value={participants}
          onChangeText={setParticipants}
          keyboardType="number-pad"
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.sectionTitle}>Dine opplysninger</Text>

       
        <Text style={styles.label}>Telefonnummer</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="8 sifre"
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => [
            styles.vippsButton,
            isProcessing && styles.vippsButtonDisabled,
            pressed && !isProcessing && { opacity: 0.8 },
          ]}
          onPress={handleVippsPayment}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <Text style={styles.vippsButtonText}>Betal med Vipps</Text>
          )}
        </Pressable>

        <Text style={styles.helperText}>
          Du vil bli omdirigert til Vipps for å fullføre betalingen.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 16,
  },
  summaryCard: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#1f2933",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    color: "#9ca3af",
  },
  value: {
    fontSize: 16,
    color: "#ffffff",
    marginTop: 2,
  },
  input: {
    marginTop: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#4b5563",
    color: "#ffffff",
  },
  footer: {
    marginTop: "auto",
  },
  vippsButton: {
    marginTop: 20,
    backgroundColor: "#ff5b24",
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
  },
  vippsButtonDisabled: {
    opacity: 0.6,
  },
  vippsButtonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
  },
  helperText: {
    fontSize: 12,
    color: "#888888",
    marginTop: 8,
    textAlign: "center",
  },
});
