import SignIn from "../../app/(auth)/sign-in"

export function useAuth() {
    const token = "test"
    const role = "test"
    //midlertidig signin funksjon, må gjøres async med database etc...
    const signIn = async (newToken: string, newRole: string) => {
    try {
    } catch (err) {
      console.error('Error, you failed:', err);
    }
  };
    return {token, role, signIn}
}