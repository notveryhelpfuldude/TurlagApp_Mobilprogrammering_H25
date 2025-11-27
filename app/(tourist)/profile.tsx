import { View, Text, Button } from 'react-native';
import { useAuth } from '../../Appwrite/providers/auth';
import { router } from 'expo-router';
import LogOutButton from '@/app/components/LogOutButton';

export default function TouristProfile() {
  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text>Profil: { 'Ukjent'}</Text>
      <LogOutButton/>
    </View>
  );
}
