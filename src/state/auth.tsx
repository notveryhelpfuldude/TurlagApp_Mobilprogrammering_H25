import { createContext, useContext, useEffect, useState } from "react";

export const ROLES = {
  ADMIN: "admin",
  GUIDE: "guide",
  TOURIST: "tourist",
} as const;
export type Role = typeof ROLES[keyof typeof ROLES];

export type User = {
  id: string;
  displayName: string;
  email: string;
  phoneNumber?: string;
  password?: string; // kun for dummy
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
  // no-ops default
  login: async () => {},
  register: async () => {},
  logout: async () => {},
});

// Dummy fetch av innlogget bruker (returnerer null for nå)
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
        const { data } = await getUser();
        setUser(data);
      } catch {
        setUser(null);
  } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  // === PUBLIC API ===
  const login = async (email: string, password: string, role: Role) => {
    setIsLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 250));
      setUser({
        id: "1",
        displayName: "Test User",
        email,
        role, 
        password,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, role: Role) => {
    return login(email, password, role);
  };

  const logout = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
