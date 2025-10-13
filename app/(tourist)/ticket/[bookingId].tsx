import { useLocalSearchParams, router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Ticket() {
  const { bookingId } = useLocalSearchParams<{ bookingId: string }>();
  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 20, fontWeight: '600' }}>Digital billett: {bookingId}</Text>
      <Button title="Gi tilbakemelding" onPress={() => router.push(`/(tourist)/review/${bookingId}`)} />
    </View>
  );
}
