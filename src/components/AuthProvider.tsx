"use client";
import React from "react";
import ReduxProvider from "./ReduxProvider";

export default function AuthProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
