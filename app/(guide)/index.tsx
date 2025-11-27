import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { useAuth } from "../../Appwrite/providers/auth";
import LogOutButton from "@/app/componentsTemp/LogOutButton";

export default function GuideHome() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
      >
      <Text style={{ fontSize: 22, fontWeight: "700" }}>Velkommen Guide 🎉</Text>
      <LogOutButton/>
      </View>
  );
}

const btn = { backgroundColor: "#0ea5e9", padding: 12, borderRadius: 10 };
const btnTxt = { color: "white", textAlign: "center", fontWeight: "600" };
