import { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import { fakeDb } from "../../src/types/fakeDb";
import type { GuideProfile, Tour } from "../../src/types/types";

export default function GuideProfileScreen() {
  const [profile, setProfile] = useState<GuideProfile | null>(null);

  const [bio, setBio] = useState("");
  const [languages, setLanguages] = useState("");
  const [themes, setThemes] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("");

  const myTours = useMemo<Tour[]>(
    () => (profile ? fakeDb.getMyTours(profile.userId) : []),
    [profile]
  );

  useEffect(() => {
    const p = fakeDb.getMyGuideProfile("current-user-id");
    setProfile(p);
    if (p) {
      setBio(p.bio ?? "");
      setLanguages(p.languages?.join(", ") ?? "");
      setThemes(p.themes?.join(", ") ?? "");
      setPrice(p.priceNOK ? String(p.priceNOK) : "");
      setAvailability(p.availability ?? "");
    }
  }, []);

  const onSave = () => {
    if (!profile) {
      Alert.alert("Mangler profil", "Opprett guideprofil først i 'Bli guide'.");
      return;
    }
    const payload: GuideProfile = {
      ...profile,
      bio: bio.trim(),
      languages: splitCsv(languages),
      themes: splitCsv(themes),
      priceNOK: Number(price) || 0,
      availability: availability.trim(),
    };
    fakeDb.updateGuideProfile(payload);
    Alert.alert("Lagret", "Profilen din er oppdatert.");
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#f2f4f7" }}
      contentContainerStyle={{ padding: 16, gap: 12 }}
    >
      <Header title="Guideprofil" />

      <View
        style={{
          backgroundColor: "white",
          borderRadius: 14,
          borderWidth: 1,
          borderColor: "#E5E7EB",
          padding: 14,
          gap: 12,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Image
            source={{ uri: profile?.avatarUri ?? "https://via.placeholder.com/64" }}
            style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: "#E5E7EB" }}
          />
          <View style={{ gap: 2 }}>
            <Text style={{ fontWeight: "700" }}>{profile?.displayName ?? profile?.name ?? "Erik Eksempel"}</Text>
            <Text style={{ color: "#667085", fontSize: 12 }}>4.8 ★ (120)</Text>
          </View>
        </View>

        <Label>Kort bio</Label>
        <Input multiline value={bio} onChangeText={setBio} placeholder="Lokalhistoriker og friluftsguide." />

        <Label>Språk</Label>
        <ChipInput value={languages} onChangeText={setLanguages} placeholder="Norsk, Engelsk" />

        <Label>Temaer</Label>
        <ChipInput value={themes} onChangeText={setThemes} placeholder="Historie, Natur, Mat" />

        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ flex: 1 }}>
            <Label>Timepris</Label>
            <Input keyboardType="numeric" value={price} onChangeText={setPrice} placeholder="500" />
          </View>
          <View style={{ flex: 1 }}>
            <Label>Tilgjengelighet</Label>
            <Input value={availability} onChangeText={setAvailability} placeholder="Man–Lør" />
          </View>
        </View>

        <Pressable
          onPress={onSave}
          style={{
            backgroundColor: "#111827",
            borderRadius: 12,
            paddingVertical: 14,
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>Lagre profil</Text>
        </Pressable>
      </View>

      {/* Mine turer */}
      <Text style={{ fontWeight: "700", marginTop: 6 }}>Mine turer</Text>
      <FlatList
        data={myTours}
        keyExtractor={(t) => t.id}
        renderItem={({ item }) => <MiniTour tour={item} />}
        contentContainerStyle={{ gap: 10 }}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

function Header({ title }: { title: string }) {
  return (
    <View style={{ paddingVertical: 8 }}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>{title}</Text>
    </View>
  );
}

function Label({ children }: { children: string }) {
  return <Text style={{ color: "#111827", fontWeight: "600", marginBottom: 4 }}>{children}</Text>;
}

function Input(props: React.ComponentProps<typeof TextInput>) {
  return (
    <TextInput
      {...props}
      style={[
        {
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#CBD5E1",
          borderRadius: 12,
          padding: 12,
          minHeight: props.multiline ? 88 : 48,
        },
        props.style,
      ]}
      placeholderTextColor="#98A2B3"
    />
  );
}

function ChipInput(props: React.ComponentProps<typeof TextInput>) {
  return (
    <TextInput
      {...props}
      style={{
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#CBD5E1",
        borderRadius: 24,
        paddingVertical: 10,
        paddingHorizontal: 14,
      }}
      placeholderTextColor="#98A2B3"
    />
  );
}

function MiniTour({ tour }: { tour: Tour }) {
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
      <Text style={{ color: "#667085", fontSize: 12 }}>Neste: {tour.nextStart ?? "14:10 → 10:00"}</Text>
      <View style={{ flexDirection: "row", gap: 10, marginTop: 6 }}>
        <Pressable
          onPress={() => {}}
          style={{ borderWidth: 1, borderColor: "#CBD5E1", paddingVertical: 8, paddingHorizontal: 14, borderRadius: 10 }}
        >
          <Text style={{ fontWeight: "600" }}>Rediger</Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={{ borderWidth: 1, borderColor: "#CBD5E1", paddingVertical: 8, paddingHorizontal: 14, borderRadius: 10 }}
        >
          <Text style={{ fontWeight: "600" }}>Skjul</Text>
        </Pressable>
      </View>
    </View>
  );
}

function splitCsv(s: string) {
  return s
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}
