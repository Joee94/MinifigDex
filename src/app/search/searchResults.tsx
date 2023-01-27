"use client";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

interface Props {
  searchTerm: string;
}

export default function SearchResults({ searchTerm }: Props) {
  const { isLoading, error, data } = useQuery(["search", searchTerm], () =>
    fetch(`/api/search?term=${searchTerm}`).then((res) => res.json())
  );

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  console.log(data);

  return <ul>{JSON.stringify(data)}</ul>;
}
