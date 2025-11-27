import { Slot } from "expo-router";
import { View } from "react-native";
import { Stack } from 'expo-router';
import AuthProvider, {useAuth} from '../Appwrite/providers/auth';
import { Children, useEffect } from "react";
import { account, testConnection } from "Appwrite/providers";
import "./tailwind.css";
import { router } from "expo-router";


export default function RootLayout() {
  
  return (
    <AuthProvider>
      <AuthGateway />
    </AuthProvider>
  );
}
function AuthGateway() {
  const { user, isLoading } = useAuth();
  useEffect(() => {
    console.log("AuthGateway - user:", user, "isLoading:", isLoading);
    if (isLoading) return;
    if (user) {
      switch (user.role) {
        case "admin":
          router.replace("/(admin)/profile");
          break;
        case "guide":
          router.replace("/(guide)/");
          break;
        case "tourist":
          router.replace("/(tourist)/");
          break;
        default:
          router.replace("/(auth)/sign-in");
      }
    }
  }, [user, isLoading]);

   return <Slot />;
}