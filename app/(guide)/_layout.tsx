import { Tabs, Redirect } from "expo-router";
import { ActivityIndicator, View, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../Appwrite/providers/auth";
import { AppTabs } from "../components/AppTabs";

export default function GuideTabs() {
  const theme = useColorScheme();
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user || user.role !== "guide") {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <AppTabs>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Panel",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen name="orders" options={{ href: null }} />
      <Tabs.Screen name="messages" options={{ href: null }} />
      <Tabs.Screen name="new-tour" options={{ href: null }} />
      <Tabs.Screen name="become-guide" options={{ href: null }} />
    </AppTabs>
  );
}
