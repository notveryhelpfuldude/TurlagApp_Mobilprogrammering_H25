import { Redirect } from 'expo-router';
import { useAuth } from '../src/state/auth';

export default function Index() {
  const { token, role } = useAuth();
  if (!token) return <Redirect href="/(auth)/sign-in" />;

  switch (role) {
    case 'tourist': return <Redirect href="/(tourist)/" />;
    case 'guide':   return <Redirect href="/(guide)/tours" />;
    case 'admin':   return <Redirect href="/(admin)/dashboard" />;
    default:        return <Redirect href="/(auth)/sign-in" />;
  }
}
