import React from "react";
import { useAuth } from "@/store/hooks/useAuth";
import { auth } from "@/apis/firebaseConfig";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (auth.currentUser == null) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
