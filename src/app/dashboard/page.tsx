"use client";
import React from "react";
import { useAuthListener } from "@/store/hooks/useAuthListener";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  useAuthListener();

  return (
    <ProtectedRoute>
      <div>DashboardPage</div>
    </ProtectedRoute>
  );
}
