import { Tabs, Redirect } from 'expo-router';
import { useAuth } from '../../src/state/auth';

export default function GuideTabs() {
  const { token, role } = useAuth();
  //if (!token || role !== 'guide') return <Redirect href="/(auth)/sign-in" />;

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="tours"    options={{ title: 'Turer' }} />
      <Tabs.Screen name="orders"   options={{ title: 'Bestill.' }} />
      <Tabs.Screen name="messages" options={{ title: 'Meldinger' }} />
      <Tabs.Screen name="profile"  options={{ title: 'Profil' }} />
    </Tabs>
  );
}
