"use client";

import styles from "./page.module.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className={styles.main}>
      <QueryClientProvider client={queryClient}>
        <h1>Hello</h1>
        {/*<SearchResults />*/}
      </QueryClientProvider>
    </main>
  );
}
