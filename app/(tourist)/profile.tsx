import { View, Text, Button } from 'react-native';
import { useAuth } from '../../src/state/auth';

export default function TouristProfile() {
  const { signOut, displayName } = useAuth();
  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text>Profil: {displayName ?? 'Ukjent'}</Text>
      <Button title="Logg ut" onPress={signOut} />
    </View>
  );
}
