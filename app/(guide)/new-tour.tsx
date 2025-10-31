import { useState } from "react";
import { View, Text, TextInput, Pressable, Alert, Image, ScrollView } from "react-native";
import { fakeDb } from "../../src/types/fakeDb";
import { useRouter } from "expo-router";

// I alpha trykker vi bare "Velg bilde (dummy)" som setter en placeholder-URI.
// Når backend er klar: bruk ImagePicker eller last opp til S3 og lagre URL.
const DUMMY_IMG = "https://picsum.photos/400/240";

export default function NewTourScreen() {
  const r = useRouter();

  const [imageUri, setImageUri] = useState<string | undefined>(undefined);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [languages, setLanguages] = useState("");
  const [themes, setThemes] = useState("");
  const [price, setPrice] = useState(""); // "299"
  const [seats, setSeats] = useState(""); // "12"

  const onPickDummy = () => setImageUri(DUMMY_IMG);

  const onSubmit = () => {
    if (!title.trim()) {
      Alert.alert("Mangler tittel", "Gi turen en tittel.");
      return;
    }
    if (!desc.trim()) {
      Alert.alert("Mangler beskrivelse", "Skriv en kort beskrivelse.");
      return;
    }

    const priceNOK = Number(price);
    const seatsNum = Number(seats);

    if (!Number.isFinite(priceNOK) || priceNOK <= 0) {
      Alert.alert("Ugyldig pris", "Pris må være et positivt tall.");
      return;
    }
    if (!Number.isInteger(seatsNum) || seatsNum <= 0) {
      Alert.alert("Ugyldig antall plasser", "Må være et heltall > 0.");
      return;
    }

    // I alpha antar vi at "innlogget guide" har id "demo-guide-1".
    const row = fakeDb.createTour({
      guideId: "demo-guide-1",
      imageUri,
      title: title.trim(),
      description: desc.trim(),
      languages: splitCsv(languages),
      themes: splitCsv(themes),
      priceNOK,
      seats: seatsNum,
    });

    Alert.alert("Publisert", "Turen er opprettet (dummy).", [
      { text: "OK", onPress: () => r.back() },
    ]);
    // Evt: r.replace("/(guide)/(tabs)"); eller push til en "tour/[id]" side.
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Header title="Opprett ny tur" />

      <View style={{ gap: 8 }}>
        <View style={{ height: 180, backgroundColor: "#e5e7eb", borderRadius: 12, overflow: "hidden", justifyContent: "center", alignItems: "center" }}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={{ width: "100%", height: "100%" }} />
          ) : (
            <Text style={{ color: "#6b7280" }}>Bildeplassholder</Text>
          )}
        </View>
        <Pressable onPress={onPickDummy} style={outlineBtn}>
          <Text style={outlineBtnTxt}>Velg bilde (dummy)</Text>
        </Pressable>
      </View>

      <TextInput
        placeholder="Tittel"
        value={title}
        onChangeText={setTitle}
        style={input}
      />
      <TextInput
        placeholder="Beskrivelse"
        value={desc}
        onChangeText={setDesc}
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

      <TextInput
        placeholder="Pris"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
        style={input}
      />
      <TextInput
        placeholder="Antall plasser"
        keyboardType="numeric"
        value={seats}
        onChangeText={setSeats}
        style={input}
      />

      <Pressable onPress={onSubmit} style={primaryBtn}>
        <Text style={primaryBtnTxt}>Publiser tur</Text>
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

const outlineBtn = {
  borderWidth: 1,
  borderColor: "#111827",
  borderRadius: 12,
  paddingVertical: 10,
};
const outlineBtnTxt = {
  textAlign: "center" as const,
  fontWeight: "600" as const,
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
