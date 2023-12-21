'use client'
import "@/styles/global.css";
import { Providers } from "./providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;