import { Slot } from "expo-router";
import { View } from "react-native";
import { Stack } from 'expo-router';
import AuthProvider, {useAuth} from '../src/state/auth';
import { Children } from "react";

export  function RootLayout() {
  return (
    <AuthProvider>
      {Children.only(<Slot />)}
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
