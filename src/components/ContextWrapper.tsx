"use client";
import React from "react";

export default function ContextWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
