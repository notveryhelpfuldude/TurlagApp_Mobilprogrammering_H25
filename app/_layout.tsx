<<<<<<< HEAD
import { Slot } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
=======
import { Slot } from 'expo-router';
import AuthProvider from '../src/state/auth';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
>>>>>>> c3b7cf9 (la til bestilling, guide panel, meldinger og fikset errors)
  );
}
