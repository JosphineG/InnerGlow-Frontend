import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../../hooks/useLanguageContext"; // Import LanguageProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InnerGlow",
  description: "Mental health and wellbeing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap the entire app with LanguageProvider to provide language context */}
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
