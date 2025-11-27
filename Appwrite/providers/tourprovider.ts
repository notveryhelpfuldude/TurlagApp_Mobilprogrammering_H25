import { Query, TablesDB } from "react-native-appwrite";
import { APPWRITE_KEYS } from "../constants/keys";
import { client } from "./index";
import { Tour } from "@/src/data/tours";

const database = new TablesDB(client);
const dataBaseId = APPWRITE_KEYS.DATABASE_ID || "";
const tourTableId = APPWRITE_KEYS.TOURS_TABLE_ID || "";



export const listAllTours = database.listRows({
    databaseId: "2",
    tableId: "2",
    queries: []
});