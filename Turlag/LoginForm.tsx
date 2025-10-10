import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';

const ROLES = ['turist', 'guide', 'admin'];

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('turist'); 

    const handleLogin = () => {
         if (!email || !password) {
            Alert.alert('Feil', 'Vennligst skriv inn både e-post og passord.');
            return;
        }

        // TODO: erstatt med ekte autentisering og navigasjon
        // Eksempel på valg:
        // if (role === 'turist') navigation.navigate('TouristHome');
        // else if (role === 'guide') navigation.navigate('GuideHome');
        // else navigation.navigate('AdminHome');
        Alert.alert('Innlogging vellykket', `Velkommen, ${email}! (rolle: ${role})`);
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
                <Checkbox label="Turist" checked={role === 'turist'} onPress={() => setRole('turist')} />
                <Checkbox label="Guide"  checked={role === 'guide'}  onPress={() => setRole('guide')} />
                <Checkbox label="Admin"  checked={role === 'admin'}  onPress={() => setRole('admin')} />
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