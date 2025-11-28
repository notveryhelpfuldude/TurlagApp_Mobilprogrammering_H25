import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Tour } from "src/data/tours";

type WishlistContextValue = {
  items: Tour[];
  addToWishlist: (tour: Tour) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
};

const WishlistContext = createContext<WishlistContextValue | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Tour[]>([]);

  const addToWishlist = (tour: Tour) => {
    setItems((prev) => {
      // Ikke legg inn samme tur flere ganger
      if (prev.some((t) => t.$id === tour.$id)) {
        return prev;
      }
      return [...prev, tour];
    });
  };

  const removeFromWishlist = (id: string) => {
    setItems((prev) => prev.filter((t) => t.$id !== id));
  };

  const clearWishlist = () => setItems([]);

  return (
    <WishlistContext.Provider
      value={{ items, addToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlist must be used inside a WishlistProvider");
  }
  return ctx;
}
