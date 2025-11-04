import { Redirect } from 'expo-router';
import { useAuth } from '../src/state/auth';

export default function Index() {
  const context = useAuth();
  if (context.user == null) return <Redirect href="/(auth)/sign-in" />;

  switch (context.user.role) {
    case "Tourist":    return <Redirect href="/(tourist)/" />;
    case "Guide":   return <Redirect href="/(guide)/tours" />;
    case "Admin":   return <Redirect href="/(admin)/dashboard" />;
    default:        return <Redirect href="/(auth)/sign-in" />;
  }
}
