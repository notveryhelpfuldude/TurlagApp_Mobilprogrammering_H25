import { Slot } from "expo-router";
import AuthProvider, {useAuth} from '../Appwrite/providers/auth';
import { useEffect } from "react";
import "./tailwind.css";
import { router } from "expo-router";
import { WishlistProvider } from "@/src/context/WishlistContext";
import { BookingProvider } from "../src/context/BookingContext"; 


export default function RootLayout() {
  
  return (
    
    <AuthProvider>
      <WishlistProvider>
        <BookingProvider>
          <AuthGateway />
        </BookingProvider>
      </WishlistProvider>
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