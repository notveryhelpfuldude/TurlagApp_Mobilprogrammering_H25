import { useState } from "react";
import { View, Text, FlatList, Pressable, Alert } from "react-native";
import { router } from "expo-router";

type Order = {
  id: string;
  customer: string;
  tourTitle: string;
  when: string;
  seats: number;
  status: "Pending" | "Confirmed" | "Declined";
};

const seed: Order[] = [
  { id: "o1", customer: "Ola Nordmann", tourTitle: "Historisk vandring", when: "14:10 i morgen", seats: 2, status: "Pending" },
  { id: "o2", customer: "Kari", tourTitle: "Mat & marked", when: "Lør 10:00", seats: 3, status: "Confirmed" },
];

export default function OrdersScreen() {
  const [orders, setOrders] = useState<Order[]>(seed);

  const update = (id: string, status: Order["status"]) => {
    setOrders((arr) => arr.map((o) => (o.id === id ? { ...o, status } : o)));
    Alert.alert("Oppdatert", `Bestilling satt til ${status}.`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f2f4f7", padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 12 }}>Bestillinger</Text>

      <FlatList
        data={orders}
        keyExtractor={(x) => x.id}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 12,
              padding: 12,
              gap: 6,
            }}
          >
            <Text style={{ fontWeight: "700" }}>{item.customer}</Text>
            <Text style={{ color: "#667085" }}>
              {item.tourTitle} • {item.when} • {item.seats} plasser
            </Text>

            <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
              <StatusPill status={item.status} />
              <View style={{ marginLeft: "auto", flexDirection: "row", gap: 8 }}>
                <Btn text="Godkjenn" onPress={() => update(item.id, "Confirmed")} />
                <Btn text="Avslå" onPress={() => update(item.id, "Declined")} bordered />
              </View>
            </View>
          </View>
        )}
      />

      <Pressable
        onPress={() => router.replace("/(guide)/dashboard")}
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#CBD5E1",
          borderRadius: 12,
          paddingVertical: 12,
          alignItems: "center",
          marginTop: 12,
        }}
      >
        <Text style={{ fontWeight: "700" }}>Tilbake til panel</Text>
      </Pressable>
    </View>
  );
}

function StatusPill({ status }: { status: Order["status"] }) {
  const map = {
    Pending: { bg: "#FEF3C7", text: "#92400E", label: "Venter" },
    Confirmed: { bg: "#DCFCE7", text: "#166534", label: "Godkjent" },
    Declined: { bg: "#FEE2E2", text: "#991B1B", label: "Avslått" },
  }[status];
  return (
    <View
      style={{
        backgroundColor: map.bg,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
      }}
    >
      <Text style={{ color: map.text, fontWeight: "700" }}>{map.label}</Text>
    </View>
  );
}

function Btn({ text, onPress, bordered = false }: { text: string; onPress: () => void; bordered?: boolean }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: bordered ? "white" : "#111827",
        borderWidth: 1,
        borderColor: "#CBD5E1",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
      }}
    >
      <Text style={{ color: bordered ? "#111827" : "white", fontWeight: "700" }}>{text}</Text>
    </Pressable>
  );
}
