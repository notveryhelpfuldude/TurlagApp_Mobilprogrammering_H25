import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function GuideHome() {
  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>Turer (Guide)</Text>

      <Link href="/(guide)/become-guide" asChild>
        <Pressable style={btn}><Text style={btnTxt}>Bli guide (skjema)</Text></Pressable>
      </Link>

      <Link href="/(guide)/new-tour" asChild>
        <Pressable style={btn}><Text style={btnTxt}>Opprett ny tur</Text></Pressable>
      </Link>
    </View>
  );
}

const btn = { backgroundColor: "#0ea5e9", padding: 12, borderRadius: 10 };
const btnTxt = { color: "white", textAlign: "center", fontWeight: "600" };
