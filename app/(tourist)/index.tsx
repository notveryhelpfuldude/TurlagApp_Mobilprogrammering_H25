import { router } from 'expo-router';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { TOURS } from '../../src/data/tours';
import { TourCard } from '../components/TourCard';
import TourList from '../components/lists/tourlist';

export default function Home() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16, gap: 10, flex: 1 }}>
        {/* Headeren som dere allerede hadde */}
        <Text style={{ fontSize: 20, fontWeight: '600' }}>
          Anbefalt i nærheten
        </Text>

        {/* Liste med turer */}
        <TourList />
      </View>
    </SafeAreaView>
  );
}
