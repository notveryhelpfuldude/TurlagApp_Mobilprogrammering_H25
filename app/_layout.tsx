import { Slot } from "expo-router";
import { View } from "react-native";
import { Stack } from 'expo-router';
import AuthProvider, {useAuth} from '../Appwrite/providers/auth';
import { Children, useEffect } from "react";
import { account, testConnection } from "Appwrite/providers";
import "./tailwind.css";


export  function RootLayout() {
  return (
    <AuthProvider>
      {Children.only(<Slot />)}
    </AuthProvider>
  );
}