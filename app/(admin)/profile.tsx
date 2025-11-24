import { View, Text, Button } from 'react-native';
import { useAuth } from '../../src/state/auth';
import { router } from 'expo-router';
export default function AdminProfile() {
  const { logout } = useAuth();
  return <View style={{ padding: 16, gap: 12 }}>
    <Text>Adminprofil</Text>
    <Button title="Logg ut" onPress={logout} />
  </View>;
}
