"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface LoadingContextProps {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined,
);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    // 에러 대신 기본값 반환하여 웹뷰 크래시 방지
    console.warn(
      "useLoading must be used within a LoadingProvider, returning default values",
    );
    return { isLoading: false, setIsLoading: () => {} };
  }
  return context;
};
