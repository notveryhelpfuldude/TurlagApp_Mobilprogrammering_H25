import { Pressable, Text } from 'react-native';
import { useAuth } from '../../Appwrite/providers/auth';
import { router } from 'expo-router';

type AuthButtonProps = {
    onPress?: () => Promise<void> | void;
};

export default function AuthButton({ onPress }: AuthButtonProps) {
    const { logout } = useAuth();
    const handlePress = async () => {
        if (onPress) {
            await onPress();
        } else {
            try {
                await logout();
            } catch (error) {
                console.error("Logout failed:", error);
            } finally {
                router.replace('/(auth)/sign-in');
            }
        }
    };

    return (
        //use Tailwind CSS classes for styling
        <Pressable
            onPress={handlePress}
            className="bg-red-500 py-2 px-4 rounded-full items-center justify-center"
        >
            <Text className="text-white font-semibold">Logg ut</Text>
        </Pressable>
    );
}