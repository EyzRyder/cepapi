"use client";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./service/queryClient";

export default function Providers({children,}: {children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
