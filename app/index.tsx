import { Redirect } from 'expo-router';
import { useAuth } from '../src/state/auth';

export default function Index() {
  const context = useAuth();
  if (context.user == null) return <Redirect href="/(auth)/sign-in" />;

  switch (context.user.role) {
    case "USER":    return <Redirect href="/(tourist)/" />;
    case "GUIDE":   return <Redirect href="/(guide)/tours" />;
    case "ADMIN":   return <Redirect href="/(admin)/dashboard" />;
    default:        return <Redirect href="/(auth)/sign-in" />;
  }
}
