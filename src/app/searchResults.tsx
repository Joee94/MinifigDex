"use client";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SearchResults() {
  const { isLoading, error, data } = useQuery("search", () =>
    fetch("/api/search").then((res) => res.json())
  );

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  console.log(data);

  return <ul>{JSON.stringify(data)}</ul>;
}
