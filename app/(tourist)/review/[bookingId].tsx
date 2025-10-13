import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function Review() {
  const { bookingId } = useLocalSearchParams<{ bookingId: string }>();
  return <View style={{ padding: 16 }}><Text>Gi rating & omtale for booking {bookingId}</Text></View>;
}
