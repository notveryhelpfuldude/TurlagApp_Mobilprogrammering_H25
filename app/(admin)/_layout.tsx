import { Tabs, Redirect } from 'expo-router';
import { useAuth } from '../../src/state/auth';

export default function AdminTabs() {
  const { token, role } = useAuth();
  if (!token || role !== 'admin') return <Redirect href="/(auth)/sign-in" />;

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="dashboard" options={{ title: 'Oversikt' }} />
      <Tabs.Screen name="tours"     options={{ title: 'Turer' }} />
      <Tabs.Screen name="users"     options={{ title: 'Brukere' }} />
      <Tabs.Screen name="profile"   options={{ title: 'Profil' }} />
    </Tabs>
  );
}
