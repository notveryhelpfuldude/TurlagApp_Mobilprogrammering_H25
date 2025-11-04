import { View, Text, Button } from 'react-native';
import { useAuth } from '../../src/state/auth';
import { router } from 'expo-router';
export default function AdminProfile() {
    async function signOut() {
      const { logout } = useAuth();
      alert("Logging out");
      try {
        await logout();
      } catch (error) {
        console.error("Logout failed:", error);
      } finally {
        router.replace('/(auth)/sign-in');
      }
    }
  const { logout } = useAuth();
  return <View style={{ padding: 16, gap: 12 }}>
    <Text>Adminprofil</Text>
    <Button title="Logg ut" onPress={logout} />
  </View>;
}
