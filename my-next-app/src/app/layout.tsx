import { ReactNode } from 'react';

import './globals.css';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';




export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header/> 
        <div>{children}</div>
        <Footer/>
        </body>
    </html>
  );
}
