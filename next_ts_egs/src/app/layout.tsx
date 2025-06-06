import { MantineProvider } from '@mantine/core';
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import { ErrorWrapper } from './error-wrapper';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '@mantine/core/styles.css';
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import { UserProviderWrapper } from '@/contexts/UserContext';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next js concepts",
  description: "Have concepts of next.js I have learned!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <UserProviderWrapper> {/* Context provider user details - global state management */}
          <ThemeProvider>{/* Context provider app theme - global state management */}
            <MantineProvider>
              <i>ROOT layout</i>
              <Header />
              <ErrorWrapper>
                {children}
              </ErrorWrapper>
              <Footer />
            </MantineProvider>
          </ThemeProvider>
        </UserProviderWrapper>
      </body>

    </html>
  );
}
