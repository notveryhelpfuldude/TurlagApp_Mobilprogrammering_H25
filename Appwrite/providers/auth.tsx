import { createContext, useContext, useCallback, useEffect, useState } from "react";
import users from "src/data/users";
import { account } from "Appwrite/providers";
import { ID } from "react-native-appwrite";

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


const getUser = async (fail = false) =>
  new Promise<{ data: User | null }>((resolve, reject) => {
    setTimeout(() => {
      if (fail) reject("Failed to fetch user");
      else resolve({ data: null });
    }, 400);
  });

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
      const foundUser = users.find(
        (u) => u.email === email && u.password === password && u.role.toLowerCase() === role.toLowerCase()
      );
      if (!foundUser) {
        throw new Error("Invalid credentials");
      }
      setUser({
        id: foundUser.id,
        displayName: foundUser.name,
        email: foundUser.email,
        role: foundUser.role as Role,
      });
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  const logout = async () => {
    setIsLoading(true);
    try {
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
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