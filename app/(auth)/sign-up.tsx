import { View, Text } from 'react-native';
import SignUpForm from '../components/SignUpForm';


export default function SignUp() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <SignUpForm />
        </View>
    );
}
