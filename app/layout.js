import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider.jsx";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "AI Career Coach",
  description: "AI Career Coach is a platform that helps you find the best AI jobs and prepare for AI interviews.",
};
const inter = Inter({subsets:["latin"]});
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          <main className="min-h-screen">
          {children}
          </main>
          <footer className="bg-muted/50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with 💗 by chholekulche_</p>
              </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
