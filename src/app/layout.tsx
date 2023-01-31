import Link from "next/link";
import "./globals.css";

// pages/_app.js
import { Inter } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <header>
          <Link href="/">
            <h1>MinifigDex</h1>
          </Link>
        </header>
        <nav>
          <ol className="menu">
            <li>
              <a>Collection</a>
            </li>
            <li>
              <a>Lists</a>
            </li>
            <li>
              <Link href="/search">Search</Link>
            </li>
          </ol>
        </nav>
        {children}
      </body>
    </html>
  );
}
