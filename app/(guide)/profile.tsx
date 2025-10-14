import { View, Text, Button } from 'react-native';
import { useAuth } from '../../src/state/auth';
export default function GuideProfile() {
  const { signOut } = useAuth();
  return <View style={{ padding: 16, gap: 12 }}>
    <Text>Guideprofil</Text>
    <Button title="Logg ut" onPress={signOut} />
  </View>;
}
