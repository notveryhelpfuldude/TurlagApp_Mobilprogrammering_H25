import React from 'react';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export function AppTabs({ children }: Props) {
    const theme = useColorScheme();
    return (
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme === "dark" ? "#ffffff" : "#111827",
            tabBarInactiveTintColor: "#9CA3AF",
            tabBarStyle: {
            backgroundColor: theme === "dark" ? "#0B1220" : "#ffffff",
            borderTopColor: "#E5E7EB",
            height: 100,
            paddingTop: 6,
            },
            tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
        }}
        >
        {children}
        </Tabs>
    );
}
