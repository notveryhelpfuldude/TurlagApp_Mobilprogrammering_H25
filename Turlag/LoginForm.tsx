import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
         if (!email || !password) {
            Alert.alert('Feil', 'Vennligst skriv inn både e-post og passord.');
            return;
        }

        // Her legges ekte autentisering inn senere
        Alert.alert('Innlogging vellykket', `Velkommen, ${email}!`);
    };

    return (
        <View style={styles.container}>
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
});

export default LoginForm;