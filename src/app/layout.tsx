import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <h1>MinifigDex</h1>
        </header>
        <nav>
          <ol>
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
