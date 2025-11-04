import { View, Text, Button } from 'react-native';
import { useAuth } from '../../src/state/auth';

export default function TouristProfile() {
  async function signOut() {
    const { logout } = useAuth();
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
    }
  }
  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text>Profil: { 'Ukjent'}</Text>
      <Button title="Logg ut" onPress={signOut} />
    </View>
  );
}
