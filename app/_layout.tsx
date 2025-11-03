import { Stack } from 'expo-router';
import AuthProvider, {useAuth} from '../src/state/auth';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  AuthProvider({ children });
  return (
    <>
      {children}
    </>
  );
}

export default function RootLayout() {
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
