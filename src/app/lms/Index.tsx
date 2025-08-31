import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from "next/router";
import { useEffect } from 'react';

const Index = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      
      // Redirect based on user role
      switch (user.role) {
        case 'super_admin':
          router.replace('/admin/dashboard');
          break;
        case 'admin':
          router.replace('/admin/college-dashboard');
          break;
        case 'teacher':
          router.replace('/class/dashboard');
          break;
        case 'student':
          router.replace('/student/dashboard');
          break;
      }
    } else {
      // If no user, redirect to login
      router.replace('/login');
    }
  }, [user, router]);

  return null; // Don't render anything while redirecting
};

export default Index;
