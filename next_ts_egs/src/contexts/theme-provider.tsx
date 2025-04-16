"use client";

import React, { createContext, useContext, useState } from "react";

interface ThemeColors {
  primary: string;
  secondary: string;
}

type ThemeContextType = {
  colors: ThemeColors;
  setTheme: (colors: ThemeColors) => void;
};

// Create context with undefined initial value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Manage colors state
  const [colors, setColors] = useState<ThemeColors>({
    primary: "#007bff",   // default primary color
    secondary: "#6c757d", // default secondary color
  });

  // setTheme updates the colors state
  const setTheme = (newColors: ThemeColors) => {
    setColors(newColors);
  };

  return (
    <ThemeContext value={{ colors, setTheme }}>
      {children}
    </ThemeContext>
  );
};

// Custom hook for consuming the context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
