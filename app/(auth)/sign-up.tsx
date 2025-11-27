import { View, Text } from 'react-native';
import SignUpForm from '../componentsTemp/forms/SignUpForm';

export default function SignUp() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <SignUpForm />
        </View>
    );
}
