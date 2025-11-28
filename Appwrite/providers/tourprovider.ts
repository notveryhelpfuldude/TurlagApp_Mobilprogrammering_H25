import { Query, TablesDB, ID } from "react-native-appwrite";
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

export async function addTour(tourData: Omit<Tour, "$id" | "$collectionId" | "$databaseId" | "$createdAt" | "$updatedAt" | "$permissions">): Promise<Tour> {
    if (!databaseId || !tourTableId) {
        throw new Error("Missing EXPO_PUBLIC_DATABASE_ID or EXPO_PUBLIC_TOURS_TABLE_ID");
    }
    const rowData = {
        title: tourData.title,
        location: tourData.location,
        tourDescription: tourData.tourDescription,
        startDate: tourData.startDate,
        endDate: tourData.endDate,
        priceNOK: tourData.priceNOK,
        maxParticipants: tourData.maxParticipants,
        distanceKM: tourData.distanceKM,
        difficulty: tourData.difficulty,
        spotsLeft: tourData.spotsLeft,
        imageURL: tourData.imageURL,
    };
    const rowId = ID.unique();
    const res = await database.createRow({
        databaseId,
        tableId: tourTableId,
        rowId,
        data: rowData,
    });
    return res as unknown as Tour;
}
