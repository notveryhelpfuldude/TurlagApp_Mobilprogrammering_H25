import { useState } from "react";
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
import {
  GUIDE_PROFILE,
  GUIDE_TOURS,
  GuideTour,
} from "../../src/data/guide";

export default function GuideProfileScreen() {
  // Dummy-profil fra data/guide.ts
  const [profile, setProfile] = useState(GUIDE_PROFILE);

  // Ekstra felt som KUN lever i UI (ikke i typen din)
  const [bio, setBio] = useState(profile.bio ?? "");
  const [languages, setLanguages] = useState("Norsk, Engelsk");
  const [themes, setThemes] = useState("Historie, Natur, Mat");
  const [price, setPrice] = useState("500");
  const [availability, setAvailability] = useState("Man–Lør");

  // Dummy “mine turer”
  const myTours: GuideTour[] = GUIDE_TOURS;

  const onSave = () => {
    // oppdaterer kun lokal state + viser alert (nok for dummy)
    setProfile((prev) => ({
      ...prev,
      bio: bio.trim(),
    }));
    Alert.alert("Lagret", "Profilen din er oppdatert (dummy-data).");
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
            source={{
              uri: "https://via.placeholder.com/64",
            }}
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: "#E5E7EB",
            }}
          />
          <View style={{ gap: 2 }}>
            <Text style={{ fontWeight: "700" }}>
              {profile.name ?? "Erik Eksempel"}
            </Text>
            <Text style={{ color: "#667085", fontSize: 12 }}>
              {profile.rating} ★ ({profile.totalTours} turer totalt)
            </Text>
          </View>
        </View>

        <Label>Kort bio</Label>
        <Input
          multiline
          value={bio}
          onChangeText={setBio}
          placeholder="Lokalhistoriker og friluftsguide."
        />

        <Label>Språk</Label>
        <ChipInput
          value={languages}
          onChangeText={setLanguages}
          placeholder="Norsk, Engelsk"
        />

        <Label>Temaer</Label>
        <ChipInput
          value={themes}
          onChangeText={setThemes}
          placeholder="Historie, Natur, Mat"
        />

        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ flex: 1 }}>
            <Label>Timepris</Label>
            <Input
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
              placeholder="500"
            />
          </View>
          <View style={{ flex: 1 }}>
            <Label>Tilgjengelighet</Label>
            <Input
              value={availability}
              onChangeText={setAvailability}
              placeholder="Man–Lør"
            />
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
          <Text style={{ color: "white", fontWeight: "700" }}>
            Lagre profil
          </Text>
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
  return (
    <Text
      style={{ color: "#111827", fontWeight: "600", marginBottom: 4 }}
    >
      {children}
    </Text>
  );
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

function MiniTour({ tour }: { tour: GuideTour }) {
  const prettyDate = new Date(tour.date).toLocaleString("nb-NO");

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
        Neste: {prettyDate}
      </Text>
      <Text style={{ color: "#667085", fontSize: 12 }}>
        Påmeldte: {tour.participants} / {tour.maxParticipants}
      </Text>
      <View
        style={{ flexDirection: "row", gap: 10, marginTop: 6 }}
      >
        <Pressable
          onPress={() => {}}
          style={{
            borderWidth: 1,
            borderColor: "#CBD5E1",
            paddingVertical: 8,
            paddingHorizontal: 14,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontWeight: "600" }}>Rediger</Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={{
            borderWidth: 1,
            borderColor: "#CBD5E1",
            paddingVertical: 8,
            paddingHorizontal: 14,
            borderRadius: 10,
          }}
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
