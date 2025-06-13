"use client"; // Ensures this component runs only on the client side

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// A wrapper around next-themes' ThemeProvider to enable theme switching (light/dark/system)
export function ThemeProvider({ children, ...props }) {
  return (
    // Pass down all props (like defaultTheme, attribute, enableSystem, etc.)
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}
