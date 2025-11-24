import { Pressable, Text } from 'react-native';
import { useAuth } from '../../src/state/auth';
import { router } from 'expo-router';

type LogoutButtonProps = {
    onPress?: () => Promise<void> | void;
};

export default function LogOutButton({ onPress }: LogoutButtonProps) {
    const {logout} = useAuth();
    const handlePress = async () => {
    if (onPress) {
        await onPress();
    } else {
        alert("Logging out");
        try {
            await logout();
        } catch (error) {
            console.error("Logout failed:", error);
        } finally {
            router.replace('/(auth)/sign-in');
        }
    }
    };
    if (!onPress) {
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
