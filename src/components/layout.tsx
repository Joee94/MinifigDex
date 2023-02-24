import Head from "next/head";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Minifigdex</title>
      </Head>
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
    </>
  );
}
