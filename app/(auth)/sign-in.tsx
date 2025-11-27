import { View, Text, Button } from 'react-native';
import  LoginForm  from '../components/forms/LoginForm';

export default function SignIn() {
  return (
    <View style={{ flex: 1 }}>
      <LoginForm/>
    </View>
  )
}

