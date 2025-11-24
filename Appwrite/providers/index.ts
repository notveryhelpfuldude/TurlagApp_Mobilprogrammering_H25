import { Client, Account } from "react-native-appwrite";
import { APPWRITE_KEYS } from "Appwrite/constants/keys";

export const ClientAppwrite = new Client();
ClientAppwrite
    .setEndpoint(APPWRITE_KEYS.API_URL as string)
    .setProject(APPWRITE_KEYS.PROJECT_ID as string);
export const AccountAppwrite = new Account(ClientAppwrite);