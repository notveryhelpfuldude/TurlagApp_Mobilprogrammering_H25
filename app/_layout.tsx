import { Slot } from "expo-router";
import { View } from "react-native";
import { Stack } from 'expo-router';
import AuthProvider, {useAuth} from '../Appwrite/providers/auth';
import { Children, useEffect } from "react";
import { account, testConnection } from "Appwrite/providers";
import "./tailwind.css"
import { promise } from "../Appwrite/providers/tourprovider";


export  function RootLayout() {
    useEffect(() => {
    (async () => {
      promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
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
