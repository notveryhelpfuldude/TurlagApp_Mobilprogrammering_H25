import { useLocalSearchParams, router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function ActivityDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ padding: 16, gap: 8 }}>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>Tur #{id}</Text>
      <Button title="+ Ønskeliste" onPress={() => {}} />
      <Button title="Reserver" onPress={() => router.push('/(tourist)/checkout')} />
    </View>
  );
}
