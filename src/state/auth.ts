import { router } from "expo-router";
import SignIn from "../../app/(auth)/sign-in"
import { createContext, use, useCallback, useEffect, useState } from "react";

const ROLES = {
  ADMIN: "ADMIN",
  GUIDE: "GUIDE",
  USER: "USER",
} as const;

type Role = typeof ROLES[keyof typeof ROLES];

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
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
});

const getUser = async (fail   = false) => {
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject("Failed to fetch user");
      } else {
        resolve({
          id: "1",
          displayName: "Test User",
          email: "123",
          role: ROLES.USER,
        });
      }
    }, 1000);
  });
}


export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
}

export const useAuth = () => {
    const context = use(AuthContext);
    return {context}
}