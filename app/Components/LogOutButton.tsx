import { Pressable, Text } from 'react-native';

type LogoutButtonProps = {
    onPress: () => void;
};

export default function LogOutButton({ onPress }: LogoutButtonProps) {
    const handlePress = async () => {
        if (onPress) {
            await onPress();
        }
    };
    if (!onPress) {
        return (<Pressable
            style={{
                backgroundColor: '#ef4444',
                paddingVertical: 10,
                paddingHorizontal: 16,
                borderRadius: 999,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text style={{ color: 'white', fontWeight: '600' }}>Logg ut</Text>
        </Pressable>);
    }
    return (
        <view style ={{ alignItems: 'center', justifyContent: 'center' }}>
            <Pressable
                onPress={handlePress}
                style={{
                    backgroundColor: '#ef4444',
                    paddingVertical: 10,
                    paddingHorizontal: 16,
                    borderRadius: 999,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text style={{ color: 'white', fontWeight: '600' }}>Logg ut</Text>
            </Pressable>
        </view>
    );
}
