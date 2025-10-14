import SignIn from "../../app/(auth)/sign-in"

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
    SignIn()
  }
    return {token, role, signIn, signOut}
}