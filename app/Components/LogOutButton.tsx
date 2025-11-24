import { Pressable, Text } from 'react-native';

type LogoutButtonProps = {
    onPress: () => Promise<void> | void;
};

export default function LogOutButton({ onPress }: LogoutButtonProps) {
    const handlePress = async () => {
        if (onPress) {
            try {
                await onPress();
            } catch (error) {
                console.error('Logout failed:', error);
            }
        }
    };
    if (!onPress) {
        return (
        <Pressable
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
    );
}
