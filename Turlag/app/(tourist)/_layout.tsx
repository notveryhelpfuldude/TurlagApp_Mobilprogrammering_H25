import { Tabs, Redirect } from 'expo-router';
import { useAuth } from '../../src/state/auth';

export default function TouristTabs() {
  const { token, role } = useAuth();
  if (!token || role !== 'tourist') return <Redirect href="/(auth)/sign-in" />;

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index"    options={{ title: 'Hjem' }} />
      <Tabs.Screen name="search"   options={{ title: 'Søk' }} />
      <Tabs.Screen name="wishlist" options={{ title: 'Ønsker' }} />
      <Tabs.Screen name="bookings" options={{ title: 'Bestill.' }} />
      <Tabs.Screen name="profile"  options={{ title: 'Profil' }} />
    </Tabs>
  );
}
