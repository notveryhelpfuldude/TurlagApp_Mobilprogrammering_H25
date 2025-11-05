import { useState } from "react";
import { View, Text, TextInput, Pressable, Alert, ScrollView } from "react-native";
import { fakeDb } from "../../src/types/fakeDb";
import { useRouter } from "expo-router";

export default function BecomeGuideScreen() {
  const r = useRouter();

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [languages, setLanguages] = useState(""); // "Norsk, Engelsk"
  const [themes, setThemes] = useState("");       // "Historie, Mat, Natur"

  const onSubmit = () => {
    // basic validering (alpha level)
    if (!name.trim()) {
      Alert.alert("Mangler navn", "Skriv inn navnet ditt.");
      return;
    }

    const payload = {
      name: name.trim(),
      bio: bio.trim(),
      languages: splitCsv(languages),
      themes: splitCsv(themes),
    };

    const row = fakeDb.createGuideProfile(payload);
    Alert.alert("Publisert", "Guide-profilen din er lagret (dummy).", [
      { text: "OK", onPress: () => r.back() },
    ]);
    // Du kan også route til guide-tab: r.replace("/(guide)/(tabs)")
    // eller til 'ny tur': r.push("/(guide)/new-tour")
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Header title="Bli guide" />
      <TextInput
        placeholder="Navn"
        value={name}
        onChangeText={setName}
        style={input}
      />
      <TextInput
        placeholder="Kort bio"
        value={bio}
        onChangeText={setBio}
        style={[input, { height: 110, textAlignVertical: "top" }]}
        multiline
      />
      <TextInput
        placeholder="Språk (Norsk, Engelsk, ...)"
        value={languages}
        onChangeText={setLanguages}
        style={input}
      />
      <TextInput
        placeholder="Temaer (Historie, Mat, Natur)"
        value={themes}
        onChangeText={setThemes}
        style={input}
      />

      <Pressable onPress={onSubmit} style={primaryBtn}>
        <Text style={primaryBtnTxt}>Publiser profil</Text>
      </Pressable>
    </ScrollView>
  );
}

function Header({ title }: { title: string }) {
  return (
    <View style={{ paddingVertical: 8 }}>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>{title}</Text>
    </View>
  );
}

const input = {
  borderWidth: 1,
  borderColor: "#cbd5e1",
  borderRadius: 12,
  padding: 12,
  backgroundColor: "white",
};

const primaryBtn = {
  backgroundColor: "#111827",
  paddingVertical: 14,
  borderRadius: 14,
};
const primaryBtnTxt = {
  color: "white",
  textAlign: "center" as const,
  fontWeight: "700" as const,
};

function splitCsv(s: string): string[] {
  return s
    .split(",")
    .map((x) => x.trim())
    .filter((x) => x.length);
}
