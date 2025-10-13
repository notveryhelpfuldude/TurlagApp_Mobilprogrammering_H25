import { router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Checkout() {
  return (
    <View style={{ padding: 16, gap: 8 }}>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>Betaling</Text>
      <Button title="Betal" onPress={() => router.replace('/(tourist)/ticket/ABC123')} />
    </View>
  );
}
