import { Client, TablesDB, Account } from "react-native-appwrite";
import { APPWRITE_KEYS } from "Appwrite/constants/keys";

export const client = new Client();
client
    .setEndpoint(APPWRITE_KEYS.API_URL)
    .setProject(APPWRITE_KEYS.PROJECT_ID)
    .setPlatform(APPWRITE_KEYS.PLATFORM_ID);
export const account = new Account(client);
export const database = new TablesDB(client);