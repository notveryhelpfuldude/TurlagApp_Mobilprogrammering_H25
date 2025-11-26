import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '../../Appwrite/providers/auth';
import  LoginForm  from '../components/LoginForm';

export default function SignIn() {
  return (
    <View style={{ flex: 1 }}>
      <LoginForm/>
    </View>
  )
/*
  return (
    <View style={{ flex: 1, justifyContent: 'center', gap: 12, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 8 }}>Logg inn</Text>

      <Button title="Turist"
        onPress={() => { signIn({ token: 'demo', role: 'tourist', displayName: 'Luka' }); router.replace('/(tourist)/'); }} />
      <Button title="Guide"
        onPress={() => { signIn({ token: 'demo', role: 'guide', displayName: 'Luka' }); router.replace('/(guide)/tours'); }} />
      <Button title="Admin"
        onPress={() => { signIn({ token: 'demo', role: 'admin', displayName: 'Luka' }); router.replace('/(admin)/dashboard'); }} />
    </View>
  );
*/
}

