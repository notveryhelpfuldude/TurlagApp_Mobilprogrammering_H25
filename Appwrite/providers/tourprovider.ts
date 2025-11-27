import { Query, TablesDB } from "react-native-appwrite";
import { APPWRITE_KEYS } from "../constants/keys";
import { client } from "./index";
import { Tour } from "@/src/data/tours";

const database = new TablesDB(client);
const databaseId = APPWRITE_KEYS.DATABASE_ID || "";
const tourTableId = APPWRITE_KEYS.TOURS_TABLE_ID || "";

export async function listAllTours() {
  if (!databaseId || !tourTableId) {
    throw new Error("Missing EXPO_PUBLIC_DATABASE_ID or EXPO_PUBLIC_TOURS_TABLE_ID");
  }

  const res = await database.listRows({
    databaseId,
    tableId: tourTableId,
    queries: [],
  });

  return (res as any)?.rows ?? [];
}
