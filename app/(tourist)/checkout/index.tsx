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

type PaymentStatus = "idle" | "processing" | "success" | "error";

export default function CheckoutScreen() {
  const router = useRouter();
  const { activityId, title, price } = useLocalSearchParams<{
    activityId: string;
    title: string;
    price: string;
  }>();

  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<PaymentStatus>("idle");

  const numericPrice = Number(price ?? 0);

  function simulateVippsPayment() {
    if (!phone || phone.length < 8) {
      Alert.alert("Feil", "Skriv inn et gyldig mobilnummer.");
      return;
    }

    setStatus("processing");

    // Simulerer at vi åpner Vipps og får svar etter 2 sekunder
    setTimeout(() => {
      const success = true; // du kan flippe denne for å teste feil

      if (success) {
        setStatus("success");

        // Naviger til billett/kvittering etter en liten pause
        setTimeout(() => {
          router.replace({
            pathname: "/(tourist)/ticket/[id]",
            params: {
              id: `${activityId}-fakeBookingId`,
              title,
              price: numericPrice.toString(),
            },
          });
        }, 800);
      } else {
        setStatus("error");
        Alert.alert(
          "Betaling feilet",
          "Vipps-betalingen ble avbrutt eller feilet (simulering)."
        );
      }
    }, 2000);
  }

  const isProcessing = status === "processing";

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Betaling (Vipps-simulering)</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Tur</Text>
        <Text style={styles.value}>{title ?? "Ukjent tur"}</Text>

        <Text style={[styles.label, { marginTop: 12 }]}>Pris</Text>
        <Text style={styles.price}>
          {Number.isNaN(numericPrice) ? "—" : `${numericPrice} kr`}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Ditt mobilnummer (Vipps)</Text>
        <TextInput
          keyboardType="phone-pad"
          placeholder="f.eks. 41234567"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.vippsButton,
          (pressed || isProcessing) && styles.vippsButtonPressed,
          isProcessing && styles.vippsButtonDisabled,
        ]}
        onPress={simulateVippsPayment}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <>
            <ActivityIndicator />
            <Text style={styles.vippsButtonText}> Sender til Vipps …</Text>
          </>
        ) : (
          <Text style={styles.vippsButtonText}>Betal med Vipps (simulering)</Text>
        )}
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
    marginBottom: 4,
  },
  card: {
    backgroundColor: "#151515",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#2c2c2c",
  },
  label: {
    fontSize: 13,
    color: "#aaaaaa",
  },
  value: {
    fontSize: 16,
    color: "#ffffff",
    marginTop: 2,
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffffff",
    marginTop: 2,
  },
  input: {
    marginTop: 8,
    backgroundColor: "#1f1f1f",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#ffffff",
  },
  vippsButton: {
    marginTop: 8,
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#ff5b24", // Vipps-aktig farge (simulert)
  },
  vippsButtonPressed: {
    opacity: 0.85,
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
  },
});
