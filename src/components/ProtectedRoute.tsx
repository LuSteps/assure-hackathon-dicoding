import React from 'react';
import { useAuth } from '@/store/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useAuth();

  if (!user) {
    return <></>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;