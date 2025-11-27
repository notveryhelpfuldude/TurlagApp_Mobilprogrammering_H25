import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

type NavButtonProps = {
  title: string;
  route: string;
  color?: string;
  params?: Record<string, any>;
};

export function NavButton({ title, route, color = '#1e40af', params }: NavButtonProps) {
  const router = useRouter();

  const handlePress = () => {
    params ? router.push({ pathname: route as any, params }) : router.push(route as any);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.btn, { backgroundColor: color }]}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}

export function useGuideNav() {
  const router = useRouter();
  return {
    goToDashboard: () => router.push('/(guide)/dashboard'),
    goToProfile: () => router.push('/(guide)/profile'),
    goToNewTour: (id?: string) => id 
      ? router.push({ pathname: '/(guide)/new-tour', params: { id } })
      : router.push('/(guide)/new-tour'),
    goToOrders: () => router.push('/(guide)/orders'),
    goToMessages: (id?: string) => id 
      ? router.push(`/(guide)/messages/${id}`)
      : router.push('/(guide)/messages'),
    goBack: () => router.back(),
  };
}

export function useTouristNav() {
  const router = useRouter();
  return {
    goToHome: () => router.push('/(tourist)/'),
    goToExplore: () => router.push('/(tourist)/explore'),
    goBack: () => router.back(),
  };
}

export function useAdminNav() {
  const router = useRouter();
  return {
    goToDashboard: () => router.push('/(admin)/dashboard'),
    goBack: () => router.back(),
  };
}

export function useAuthNav() {
  const router = useRouter();
  return {
    goToSignIn: () => router.push('/(auth)/sign-in'),
    goToHome: () => router.push('/'),
  };
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
});