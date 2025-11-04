import { Slot } from "expo-router";
import { View } from "react-native";
import { Stack } from 'expo-router';
import AuthProvider, {useAuth} from '../src/state/auth';
import React from "react";
import { Text, Pressable } from "react-native";
import { Link } from "expo-router";

export  function RootLayout() {
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

export default function Home() {
  const { signOut } = useAuth();

  return (
    <View>
      <View>
        <Text>Home</Text>
      </View>
      <View>
        <Pressable
          onPress={() => signOut()}
        >
          <Text>Sign out</Text>
        </Pressable>
      </View>
    </View>
  );
}
