import { ReactNode } from 'react';

import './globals.css';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';


export const metadata = {
  title: "Graphics India Online",
  description: "Scalable Web and Mobile App Development Services",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

