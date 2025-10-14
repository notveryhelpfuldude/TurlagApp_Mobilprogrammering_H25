import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';
import { router } from 'expo-router';

const ROLES = ['turist', 'guide', 'admin'];

const LoginForm = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('turist'); // 'turist' | 'guide' | 'admin'

    const handleLogin = () => {
         if (!email || !password) {
            Alert.alert('Feil', 'Vennligst skriv inn både e-post og passord.');
            return;
        }
        // TODO: Erstatt med ekte autentisering 

        // Enkel ruting basert på rolle ;
        /*
        Alert.alert('Innlogging vellykket', `Velkommen, ${email}! (rolle: ${role})`);
        */
        if (role === 'turist') router.replace('/(tourist)/');
        else if (role === 'guide') router.replace('/(guide)/tours');
        else router.replace('/(admin)/dashboard');
    
        
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Logg inn</Text>

            <Text style={styles.label}>E-post</Text>
            <TextInput
                style={styles.input}
                placeholder="Skriv inn e-post"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.label}>Passord</Text>
            <TextInput
                style={styles.input}
                placeholder="Skriv inn passord"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Text style={[styles.label, { marginTop: 8 }]}>Velg rolle</Text>
            <View style={styles.roleGroup}>
                <Checkbox
                    value={role === 'turist'}
                    onValueChange={() => setRole('turist')}
                    style={styles.checkbox}
                />
                <Text style={styles.roleLabel}>Turist</Text>
                <Checkbox
                    value={role === 'guide'}
                    onValueChange={() => setRole('guide')}
                    style={styles.checkbox}
                />
                <Text style={styles.roleLabel}>Guide</Text>
                <Checkbox
                    value={role === 'admin'}
                    onValueChange={() => setRole('admin')}
                    style={styles.checkbox}
                />
                <Text style={styles.roleLabel}>Admin</Text>
            </View>

            <Button title="Logg inn" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#f9fafb',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    label: {
        marginBottom: 6,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    roleGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 16,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
    },
    roleLabel: {
        marginLeft: 8,
        fontSize: 16,
    },
});

export default LoginForm;