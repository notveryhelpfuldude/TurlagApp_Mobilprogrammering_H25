import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type Booking = {
  id: string;
  activityId?: string | null;
  title: string;
  price: number;
  customerName: string;
  customerEmail: string;
  phoneNumber: string;       
  createdAt: string;         
};

type BookingContextValue = {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  getBookingById: (id: string) => Booking | undefined;
};

const BookingContext = createContext<BookingContextValue | undefined>(
  undefined
);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (booking: Booking) => {
    setBookings((prev) => [...prev, booking]);
  };

  const getBookingById = (id: string) =>
    bookings.find((b) => b.id === id);

  return (
    <BookingContext.Provider
      value={{ bookings, addBooking, getBookingById }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBookings = () => {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBookings must be used within a BookingProvider");
  }
  return ctx;
};
