import { Slot } from "expo-router";
import { View } from "react-native";
import { Stack } from 'expo-router';
import AuthProvider, {useAuth} from '../src/state/auth';
import { Children, useEffect } from "react";
import { account, testConnection } from "Appwrite/providers";

export  function RootLayout() {
    useEffect(() => {
    (async () => {
      try {
        testConnection();
        
        console.log('Appwrite Success!');
      } catch (e) {
        console.warn('Appwrite Failed!', e);
      }
    })();
  }, []);
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
