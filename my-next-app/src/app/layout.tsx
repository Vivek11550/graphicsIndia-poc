import { ReactNode } from 'react';

import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Footer/>
        <div>{children}</div>
        
        </body>
    </html>
  );
}
