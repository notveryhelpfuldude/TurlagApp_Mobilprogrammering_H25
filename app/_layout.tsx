import { Stack } from 'expo-router';

export default function RootLayout() {
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
