import { ReactNode } from 'react';

import './globals.css';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import WhatsappBadge from '@/components/layout/whatsappbadge';

export const metadata = {
  title: "Web & Mobile App Development Services in Pune",
  description: "We offer web and app development,Wordpress sites, UI/ux design and digital marketing solutions tailored to grow your business online. ",
  alternates: {
    canonical: "https://graphicsindiaonline.com/web-app-mobile-development-pune/",
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
        <WhatsappBadge/>
        <Footer />
      </body>
    </html>
  );
}

