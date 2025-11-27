import { router } from 'expo-router';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { TOURS } from '../../src/data/tours';
import { TourCard } from '../componentsTemp/TourCard';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16, gap: 10, flex: 1 }}>
        {/* Headeren som dere allerede hadde */}
        <Text style={{ fontSize: 20, fontWeight: '600' }}>
          Anbefalt i nærheten
        </Text>

        {/* Liste med turer */}
        <FlatList
          data={TOURS}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 10, paddingBottom: 40 }}
          renderItem={({ item }) => (
            <TourCard
              tour={item}
              onPress={() =>
                router.push(`/(tourist)/activity/${item.id}`)
              }
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
