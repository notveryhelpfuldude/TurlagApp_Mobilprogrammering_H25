import { createContext, useContext, useCallback, useEffect, useState } from "react";
import users from "src/data/users";
import { account } from "Appwrite/providers";
import { ID } from "react-native-appwrite";
import { Alert } from "react-native";

export const ROLES = {
  ADMIN: "admin",
  GUIDE: "guide",
  USER: "tourist",
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];

type User = {
  id: string;
  displayName: string;
  email: string;
  phoeneNumber?: string;
  password?: string;
  role: Role;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string, role: Role) => Promise<void>;
  register: (email: string, password: string, role: Role) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
});

//Simulert funksjon for å hente brukerdata
const getUser = async (fail = false) =>
  new Promise<{ data: User | null }>((resolve, reject) => {
    setTimeout(() => {
      if (fail) reject("Failed to fetch user");
      else resolve({ data: null });
    }, 400);
  });


//Multipurpose AuthProvider component
export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const {data } = await getUser();
        setUser(data);
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const login = async (email: string, password: string, role: Role) => {
    setIsLoading(true);
    try {
      //Opprett session med Appwrite
      await account.createEmailPasswordSession({
        email,
        password,
      });
      const userData = await account.get();
      //Oppdater bruker state
      setUser({
        id: userData.$id,
        displayName: userData.name || "",
        email: userData.email,
        role: role,
      });
    } catch (error) {
      //Feilhåndtering
      const err: any = error;
      const message = err?.message || err?.response?.message || JSON.stringify(err);
      const code = err?.code ?? err?.response?.code;
      const type = err?.type ?? err?.response?.type;

      //Sjekk om en session allerede eksisterer
      const sessionExists =
        typeof message === "string" && message.toLowerCase().includes("session") ||
        type === "user_session_already_exists" ||
        code === 401;

      //Hvis session eksisterer, hent brukerdata
      if (sessionExists) {
        try {
          const userData = await account.get();
          setUser({
            id: userData.$id,
            displayName: userData.name || "",
            email: userData.email,
            role: role,
          });
          return;
        } catch (getErr) {
          console.warn("Failed to read existing session user:", getErr);
        }
      }
      Alert.alert("Innlogging feilet", message.toString());
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  //Enkel logout funksjon
  const logout = async () => {
    setIsLoading(true);
    try {
      await account.deleteSession({ sessionId: "current" });
      setUser(null);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  
  //Enkel register funksjon
  const register = async (email: string, password: string, role: Role) => {
    setIsLoading(true);
    try {
      await account.create({
        userId: ID.unique(),
        email, 
        password, 
      });
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }   
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
    );
  }
export const useAuth = () => useContext(AuthContext);