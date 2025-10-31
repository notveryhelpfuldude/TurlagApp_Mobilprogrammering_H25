import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "700" }}>Velkommen 🎉</Text>

      {/* Link som åpner LoginForm-siden */}
      <Link href="/(auth)/LoginForm" asChild>
        <Pressable
          style={{
            backgroundColor: "#2563eb",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>
            Gå til innlogging
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
