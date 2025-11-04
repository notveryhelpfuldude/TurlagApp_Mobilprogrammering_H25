import { Slot } from "expo-router";
import { View } from "react-native";
import { Stack } from 'expo-router';
import AuthProvider, {useAuth} from '../src/state/auth';



export function RootLayout() {
  const {  } = useAuth();
  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
export default function LayoutWithProviders() {
  return (
    <AuthProvider>
      <RootLayout></RootLayout>
    </AuthProvider>
  )
}