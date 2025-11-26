import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { router } from 'expo-router';
import { useAuth, ROLES, type Role } from '../../Appwrite/providers/auth'; 



export default function SignUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<Role>(ROLES.USER);
    const { register, isLoading } = useAuth();


    const HandleSignUp = () => {
        const register = async (email: string, password: string, role: Role) => {

        };
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        </View>
    );
}