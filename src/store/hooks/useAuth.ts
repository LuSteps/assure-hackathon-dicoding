import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '../store';
import { auth } from '@/apis/firebaseConfig';

export const useAuth = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    // console.log(user)
    console.log(auth)

    if (auth.currentUser == null) {
      router.push('/login');
    }
  }, [router]);

  return user;
};