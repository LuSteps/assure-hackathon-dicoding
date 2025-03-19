"use client";
import React, { useEffect } from "react";
import { useAuthListener } from "@/store/hooks/useAuthListener";
import ProtectedRoute from "@/components/ProtectedRoute";
import { auth } from "@/apis/firebaseConfig";

export default function DashboardPage() {
  useAuthListener();
  
  return (
    <ProtectedRoute>
      <div>Dash</div>
    </ProtectedRoute>
  );
}
