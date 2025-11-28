import { Tabs, Redirect } from 'expo-router';
import { useAuth } from '../../Appwrite/providers/auth';
import { AppTabs } from '../components/AppTabs';
import { Ionicons } from '@expo/vector-icons';

export default function AdminTabs() {
 // if (!token || role !== 'admin') return <Redirect href="/(auth)/sign-in" />;

  return (
    <AppTabs>
      <Tabs.Screen 
        name="dashboard" 
        options={{ 
          title: 'Oversikt',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="speedometer-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="tours"     
        options={{ 
          title: 'Turer',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="users"     
        options={{ 
          title: 'Brukere',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="profile"   
        options={{ 
          title: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }} 
      />
    </AppTabs>
  );
}
