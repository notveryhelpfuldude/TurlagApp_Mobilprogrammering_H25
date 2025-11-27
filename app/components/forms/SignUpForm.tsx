import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { router } from 'expo-router';
import { useAuth, ROLES, type Role } from '../../../Appwrite/providers/auth'; 



export default function SignUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<Role>(ROLES.USER);
    const { register, isLoading } = useAuth();


    const HandleSignUp = () => {
        if (!email || !password) {
            Alert.alert('Feil', 'Vennligst skriv inn både e-post og passord.');
            return;
        }
        if (password.length < 8) {
            Alert.alert('Feil', 'Passord må være minst 8 tegn langt.');
            return;
        }
        register(email, password, role)
            .then(() => {
                Alert.alert('Suksess', 'Registrering vellykket! Du kan nå logge inn.');
                router.replace('/(auth)/sign-in');
            })
            .catch(() => {
                Alert.alert('Feil', 'Registrering feilet. Vennligst prøv igjen.');
            });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                 <Text style={styles.title}>Registrer deg</Text>
           
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
                     value={role === ROLES.USER}
                     onValueChange={() => setRole(ROLES.USER)}
                     style={styles.checkbox}
                   />
                   <Text style={styles.roleLabel}>Turist</Text>
           
                   <Checkbox
                     value={role === ROLES.GUIDE}
                     onValueChange={() => setRole(ROLES.GUIDE)}
                     style={styles.checkbox}
                   />
                   <Text style={styles.roleLabel}>Guide</Text>
           
                   <Checkbox
                     value={role === ROLES.ADMIN}
                     onValueChange={() => setRole(ROLES.ADMIN)}
                     style={styles.checkbox}
                   />
                   <Text style={styles.roleLabel}>Admin</Text>
                 </View>
                 <Button title={isLoading ? "Registrerer..." : "Registrer"} onPress={HandleSignUp} disabled={isLoading} /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        alignSelf: 'flex-start',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    roleGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 8,
        width: 20,
        height: 20,
    },
    roleLabel: {
        marginRight: 16,
    },
});
