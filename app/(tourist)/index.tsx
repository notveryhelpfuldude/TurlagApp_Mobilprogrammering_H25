import { router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Home() {
  return (
    <View style={{ padding: 16, gap: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: '600' }}>Anbefalt i nærheten</Text>
      <Button title="Se tur 123" onPress={() => router.push('/(tourist)/activity/123')} />
    </View>
  );
}
