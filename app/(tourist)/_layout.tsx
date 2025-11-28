import { Tabs, Redirect } from 'expo-router';
import { useAuth } from '../../Appwrite/providers/auth';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Hjem',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="wishlist" 
        options={{ 
          title: 'Ønsker',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="bookings" 
        options={{ 
          title: 'Bestill.',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen name="activity/[id]" options={{ href: null }} />
      <Tabs.Screen name="checkout/index" options={{ href: null }}/>
      <Tabs.Screen name="review/[bookingId]" options={{ href: null }}/>
      <Tabs.Screen name="ticket/[bookingId]" options={{ href: null }}/>
    </Tabs>
  );
}
