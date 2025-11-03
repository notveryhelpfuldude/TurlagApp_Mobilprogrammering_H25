import { Stack } from 'expo-router';
import AuthProvider, {useAuth} from '../src/state/auth';



export function RootLayout() {
  const {  } = useAuth();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tourist)" />
      <Stack.Screen name="(guide)" />
      <Stack.Screen name="(admin)" />
    </Stack>
  );
}
export default function LayoutWithProviders() {
  return (
    <AuthProvider>
      <RootLayout></RootLayout>
    </AuthProvider>
  )
}