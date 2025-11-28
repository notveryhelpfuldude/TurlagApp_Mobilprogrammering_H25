import { Tabs, Redirect } from 'expo-router';
import { useAuth } from '../../Appwrite/providers/auth';
import { AppTabs } from '../components/AppTabs';

export default function AdminTabs() {
 // if (!token || role !== 'admin') return <Redirect href="/(auth)/sign-in" />;

  return (
    <AppTabs>
      <Tabs.Screen name="dashboard" options={{ title: 'Oversikt' }} />
      <Tabs.Screen name="tours"     options={{ title: 'Turer' }} />
      <Tabs.Screen name="users"     options={{ title: 'Brukere' }} />
      <Tabs.Screen name="profile"   options={{ title: 'Profil' }} />
    </AppTabs>
  );
}
