import { Text, View } from 'react-native';

type Props = {
  label: string;
};

export function Tag({ label }: Props) {
  return (
    <View
      style={{
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#ccc',
        alignSelf: 'flex-start',
        marginRight: 6,
      }}
    >
      <Text style={{ fontSize: 12 }}>{label}</Text>
    </View>
  );
}
