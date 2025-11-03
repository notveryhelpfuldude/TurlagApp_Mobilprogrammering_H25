import { router } from "expo-router";
import SignIn from "../../app/(auth)/sign-in"
import { createContext, use, useCallback, useEffect, useState } from "react";

const ROLES = {
  ADMIN: "Admin",
  GUIDE: "Guide",
  USER: "Tourist",
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
  login: async (email: string, password: string) => {},
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
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      setUser({displayName: "Test User", email, id: "1", role: ROLES.USER});
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register: async () => {}, logout: async () => {} }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
    const context = use(AuthContext);
    return context
}