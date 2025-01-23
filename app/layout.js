import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/commons/header/Header";
import Footer from "@/components/commons/footer/Footer";
import ReduxLayout from "@/layouts/ReduxLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fiore Store",
  description: "Fiore Store - Your one-stop shop for all things flowers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxLayout>
          <Header />
          {children}
          <Footer />
        </ReduxLayout>
      </body>
    </html>
  );
}
