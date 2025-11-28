import { Tabs, Redirect } from 'expo-router';
import { useAuth } from '../../Appwrite/providers/auth';

export default function TouristTabs() {
  
  //if (!token || role !== 'tourist') return <Redirect href="/(auth)/sign-in" />;

  return (
    <Tabs screenOptions={{ headerShown: false }}>
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
