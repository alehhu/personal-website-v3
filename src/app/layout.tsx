import { Inter } from "next/font/google";
import "./globals.css";
import ProgressBar from './components/progressBar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ale",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
