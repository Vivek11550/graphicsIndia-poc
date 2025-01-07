import { ReactNode } from 'react';

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <div>{children}</div>
        
        </body>
    </html>
  );
}