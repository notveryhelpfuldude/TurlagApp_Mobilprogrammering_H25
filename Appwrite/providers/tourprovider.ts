import { Query, TablesDB } from "react-native-appwrite";
import { APPWRITE_KEYS } from "../constants/keys";
import { client } from "./index";

export type Tour = {
  id: number;
  title: string;
  location: string;
  description: string;
  distanceKm: number;
  durationHours: number;
  difficulty: 'lett' | 'middels' | 'krevende';
  priceNok: number;
  maxParticipants: number;
  spotsLeft: number;
  date: string; // ISO string eller bare "12.01.2026"
  imageUrl?: string;
  nextStart?: string;
};

const database = new TablesDB(client);

export const promise = database.listRows({
    databaseId: "692880520033178ae184",
    tableId: "tours",
    queries: [
        Query.equal('difficulty', 'lett'),
        Query.limit(10)

    ]
});
