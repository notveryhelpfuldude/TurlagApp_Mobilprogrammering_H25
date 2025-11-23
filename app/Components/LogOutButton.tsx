import { TouchableOpacity, Text } from 'react-native';

type LogoutButtonProps = {
    onPress: () => void;
};

export function LogOutButton({ onPress }: LogoutButtonProps) {
    const handlePress = async () => {
        if (onPress) {
            await onPress();
        }
    };
    return (
        <TouchableOpacity
            onPress={onPress}
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
        </TouchableOpacity>
    );
}
