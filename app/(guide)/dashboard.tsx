import { useEffect, useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { router } from "expo-router";
import type { Tour } from "../../src/types/types";
import { fakeDb } from "../../src/types/fakeDb";

export default function GuideDashboardScreen() {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    setTours(fakeDb.getTours()); 
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#f2f4f7", padding: 16, gap: 12 }}>
      <Header title="Guidepanel" />

      <View style={{ flexDirection: "row", gap: 8 }}>
        <Pill label="Turer" active onPress={() => {}} />
        <Pill label="Bestillinger" onPress={() => router.push("/(guide)/orders")} />
        <Pill label="Meldinger" onPress={() => router.push("/(guide)/messages")} />
      </View>

      <FlatList
        data={tours}
        keyExtractor={(t) => t.id}
        contentContainerStyle={{ gap: 10, paddingTop: 10 }}
        renderItem={({ item }) => <TourCard tour={item} />}
        ListEmptyComponent={
          <Text style={{ color: "#667085" }}>Ingen turer enda. Opprett en ny tur ➜</Text>
        }
      />

      <Pressable
        onPress={() => router.push("/(guide)/new-tour")}
        style={{
          backgroundColor: "#111827",
          borderRadius: 12,
          paddingVertical: 14,
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <Text style={{ color: "white", fontWeight: "700" }}>Opprett ny tur</Text>
      </Pressable>
    </View>
  );
}

function Header({ title }: { title: string }) {
  return (
    <View style={{ paddingVertical: 8 }}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>{title}</Text>
    </View>
  );
}

function Pill({
  label,
  active = false,
  onPress,
}: {
  label: string;
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: active ? "#111827" : "#CBD5E1",
        backgroundColor: active ? "#111827" : "white",
      }}
    >
      <Text style={{ color: active ? "white" : "#111827", fontWeight: "600" }}>{label}</Text>
    </Pressable>
  );
}

function TourCard({ tour }: { tour: Tour }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        padding: 12,
        gap: 6,
      }}
    >
      <Text style={{ fontWeight: "700" }}>{tour.title}</Text>
      <Text style={{ color: "#667085", fontSize: 12 }}>
        Neste: {tour.nextStart ?? "14:10 → 10:00"}
      </Text>

      <Pressable
        onPress={() => router.push({ pathname: "/(guide)/new-tour", params: { id: tour.id } })}
        style={{
          marginLeft: "auto",
          borderWidth: 1,
          borderColor: "#CBD5E1",
          borderRadius: 10,
          paddingHorizontal: 14,
          paddingVertical: 8,
        }}
      >
        <Text style={{ fontWeight: "600" }}>Rediger</Text>
      </Pressable>
    </View>
  );
}
