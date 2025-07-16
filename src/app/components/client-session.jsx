// app/ClientSession.jsx
'use client';

import { SessionProvider } from "next-auth/react";

export default function ClientSession({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
