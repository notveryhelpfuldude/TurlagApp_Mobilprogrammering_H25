import { Tabs, Redirect } from 'expo-router';
import { useAuth } from '../../Appwrite/providers/auth';
import { useColorScheme } from 'react-native';

export default function TouristTabs() {
    const theme = useColorScheme();
  
  //if (!token || role !== 'tourist') return <Redirect href="/(auth)/sign-in" />;

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme === "dark" ? "#ffffff" : "#111827",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarStyle: {
          backgroundColor: theme === "dark" ? "#0B1220" : "#ffffff",
          borderTopColor: "#E5E7EB",
          height: 100,
          paddingTop: 6,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
      }}
    >
      <Tabs.Screen name="index"    options={{ title: 'Hjem' }} />
      <Tabs.Screen name="wishlist" options={{ title: 'Ønsker' }} />
      <Tabs.Screen name="bookings" options={{ title: 'Bestill.' }} />
      <Tabs.Screen name="profile"  options={{ title: 'Profil' }} />
      <Tabs.Screen name="activity/[id]" options={{ href: null }} />
      <Tabs.Screen name="checkout/index" options={{ href: null }}/>
      <Tabs.Screen name="review/[bookingId]" options={{ href: null }}/>
      <Tabs.Screen name="ticket/[bookingId]" options={{ href: null }}/>
    </Tabs>
  );
}
