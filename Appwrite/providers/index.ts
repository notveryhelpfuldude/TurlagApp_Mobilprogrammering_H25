import { Client, Account } from "react-native-appwrite";
import { APPWRITE_KEYS } from "Appwrite/constants/keys";

export const ClientAppwrite = new Client();
ClientAppwrite
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID || '69249441001d031c58af');
export const AccountAppwrite = new Account(ClientAppwrite);