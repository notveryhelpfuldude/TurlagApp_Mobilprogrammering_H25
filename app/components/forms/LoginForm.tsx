import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { router } from 'expo-router';
import { useAuth, ROLES, type Role } from '../../../Appwrite/providers/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role>(ROLES.USER);
  const { login, isLoading } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Feil', 'Vennligst skriv inn både e-post og passord.');
      return;
    }
    try {
      await login(email, password, role);
      switch (role) {
        case ROLES.USER:
          router.replace('/(tourist)/');
          break;
        case ROLES.GUIDE:
          router.replace('/(guide)/');
          break;
        case ROLES.ADMIN:
          router.replace('/(admin)/dashboard');
          break;
        default:
          Alert.alert('Feil', 'Ugyldig rolle valgt.');
      }
    } catch (err) {
      Alert.alert('Feil', 'Innlogging feilet.');
    }
  };

 return (
    <View className="flex-1 justify-center px-6 bg-gray-50">
      <Text className="text-2xl font-bold text-center mb-6">Logg inn</Text>

      <Text className="text-sm font-semibold mb-2">E-post</Text>
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4 bg-white"
        placeholder="Skriv inn e-post"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text className="text-sm font-semibold mb-2">Passord</Text>
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4 bg-white"
        placeholder="Skriv inn passord"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text className="text-sm font-semibold mb-3">Velg rolle</Text>
      <View className="flex-row items-center justify-start mb-6 space-x-3">
        <Pressable
          onPress={() => setRole(ROLES.USER)}
          className={`px-3 py-2 rounded-full border ${
            role === ROLES.USER ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'
          }`}
        >
          <Text className={`${role === ROLES.USER ? 'text-white' : 'text-gray-700'}`}>Turist</Text>
        </Pressable>

        <Pressable
          onPress={() => setRole(ROLES.GUIDE)}
          className={`px-3 py-2 rounded-full border ${
            role === ROLES.GUIDE ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'
          }`}
        >
          <Text className={`${role === ROLES.GUIDE ? 'text-white' : 'text-gray-700'}`}>Guide</Text>
        </Pressable>

        <Pressable
          onPress={() => setRole(ROLES.ADMIN)}
          className={`px-3 py-2 rounded-full border ${
            role === ROLES.ADMIN ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'
          }`}
        >
          <Text className={`${role === ROLES.ADMIN ? 'text-white' : 'text-gray-700'}`}>Admin</Text>
        </Pressable>
      </View>

      <Pressable
        onPress={handleLogin}
        disabled={isLoading}
        className={`rounded-lg py-3 items-center mb-4 ${
          isLoading ? 'bg-blue-300' : 'bg-blue-600'
        }`}
      >
        <Text className="text-white font-semibold">{isLoading ? 'Logger inn...' : 'Logg inn'}</Text>
      </Pressable>

      <Text className="text-center text-sm text-gray-600 mb-3">Ny bruker?</Text>
      <Pressable
        onPress={() => router.push('/(auth)/sign-up')}
        className="rounded-lg py-3 items-center border border-gray-300 bg-white"
      >
        <Text className="text-gray-700 font-medium">Gå til registrering</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;
