import { Client, TablesDB, Account, Locale, Query } from "react-native-appwrite";
import { APPWRITE_KEYS } from "Appwrite/constants/keys";

const endpoint = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID;
const platformId = process.env.EXPO_PUBLIC_APPWRITE_PLATFORM_ID;

if (!endpoint || !projectId) {
  throw new Error('Missing Appwrite env vars: EXPO_PUBLIC_APPWRITE_ENDPOINT or EXPO_PUBLIC_APPWRITE_PROJECT_ID');
}

export const client = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId)
  .setPlatform(platformId);

export const account = new Account(client);



export const locale = new Locale(client)
export async function testConnection() {
  try {
    const res = await locale.get();
    console.log("✅ Connection OK:", res);
  } catch (err) {
    console.error("❌ Connection FAILED:", err);
  }
}
