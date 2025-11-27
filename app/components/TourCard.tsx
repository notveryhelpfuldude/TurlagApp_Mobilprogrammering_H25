import { View, Text, Image, TouchableOpacity } from 'react-native';
import type { Tour } from '@/src/data/tours';
import { Tag } from './Tag';
import { PrimaryButton } from './PrimaryButton';

type Props = {
  tour: Tour;
  onPress?: () => void;       // åpne detaljer
  onBookPress?: () => void;   // melde seg på
};



export function TourCard({ tour, onPress, onBookPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        borderRadius: 16,
        marginBottom: 16,
        overflow: 'hidden',
        elevation: 2,
      }}
      activeOpacity={0.8}
    >
      {tour.imageURL && (
        <Image
          source={{ uri: tour.imageURL }}
          style={{ width: '100%', height: 160 }}
        />
      )}

      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 4 }}>
          {tour.title}
        </Text>
        <Text style={{ fontSize: 13, color: '#555', marginBottom: 6 }}>
          {tour.location} • {tour.distanceKM} km • {tour.endDate} t
        </Text>

        <View style={{ flexDirection: 'row', marginBottom: 8 }}>
          {tour.difficulty && <Tag label={tour.difficulty.toUpperCase()} />}
          {tour.priceNOK === 0 ? (
            <Tag label="GRATIS" />
          ) : (
            <Tag label={`${tour.priceNOK} kr`} />
          )}
        </View>

        <Text
          numberOfLines={2}
          style={{ fontSize: 13, color: '#444', marginBottom: 10 }}
        >
          {tour.tourDescription}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 12, color: '#666' }}>
            {tour.spotsLeft} ledige plasser
          </Text>
          <PrimaryButton title="Se mer / meld på" onPress={onBookPress ?? onPress ?? (() => {})} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
