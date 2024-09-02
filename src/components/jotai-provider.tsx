"use client";

import { Provider } from "jotai";

interface JotaiProviderProps {
  children: React.ReactNode;
}

export const JotaiProvider = ({ children }: JotaiProviderProps) => {
  return <Provider>{children}</Provider>;
};
