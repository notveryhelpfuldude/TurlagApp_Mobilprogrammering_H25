import { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { router } from "expo-router";

type Thread = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
};

const initial: Thread[] = [
  { id: "t1", name: "Ola Nordmann", lastMessage: "Ser bra ut! Hvor møtes vi?", time: "12:41", unread: 2 },
  { id: "t2", name: "Kari", lastMessage: "Kan vi flytte til 15:00?", time: "09:10", unread: 0 },
  { id: "t3", name: "Anders", lastMessage: "Takk for turen!", time: "I går", unread: 0 },
];

export default function MessagesScreen() {
  const [threads] = useState<Thread[]>(initial);

  return (
    <View style={{ flex: 1, backgroundColor: "#f2f4f7", padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 12 }}>Meldinger</Text>

      <FlatList
        data={threads}
        keyExtractor={(x) => x.id}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => { router.push(`/(guide)/messages/${item.id}`); }}
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 12,
              padding: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ gap: 4, maxWidth: "80%" }}>
              <Text style={{ fontWeight: "700" }}>{item.name}</Text>
              <Text numberOfLines={1} style={{ color: "#667085" }}>
                {item.lastMessage}
              </Text>
            </View>
            <View style={{ alignItems: "flex-end", gap: 6 }}>
              <Text style={{ color: "#667085", fontSize: 12 }}>{item.time}</Text>
              {item.unread > 0 && (
                <View
                  style={{
                    backgroundColor: "#111827",
                    borderRadius: 999,
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "700", fontSize: 12 }}>
                    {item.unread}
                  </Text>
                </View>
              )}
            </View>
          </Pressable>
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
