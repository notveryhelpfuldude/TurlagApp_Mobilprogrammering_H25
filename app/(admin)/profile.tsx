import { View, Text, Button } from 'react-native';
import { useAuth } from '../../src/state/auth';
import { router } from 'expo-router';
import LogOutButton from 'app/Components/LogOutButton';
export default function AdminProfile() {
  return <View style={{ padding: 16, gap: 12 }}>
    <Text>Adminprofil</Text>
    <LogOutButton>
  </View>;
}
