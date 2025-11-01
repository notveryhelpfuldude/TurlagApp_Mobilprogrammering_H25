import { router } from "expo-router";
import SignIn from "../../app/(auth)/sign-in"

const ROLES = {
  ADMIN: "ADMIN",
  GUIDE: "GUIDE",
  USER: "USER",
} as const;

export function useAuth() {
    const token = "test"
    const role = "test"
    //midlertidig signin funksjon, må gjøres async med database etc...
    const signIn = async ({token, role, displayName}) => {
    try {
    } catch (err) {
      console.error('Error, you failed:', err);
    }
  };
  const signOut = () => {
    //tilbake til sign in screen
    router.replace('/(auth)/sign-in')
  }
    return {token, role, signIn, signOut}
}