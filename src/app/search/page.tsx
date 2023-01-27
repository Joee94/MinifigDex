"use client";

import { useState } from "react";
import Providers from "../providers";
import SearchResults from "./searchResults";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Providers>
      <main>
        <form
          onSubmit={(e: React.FormEvent) => {
            setSearchTerm(
              (e.target as any).elements["minifig-search"].value || ""
            );
            e.preventDefault();
          }}
        >
          <label htmlFor="minifig-search">Search the site:</label>
          <input type="search" id="minifig-search" name="q" />
          <button type="submit">Search</button>
        </form>
        {searchTerm && <SearchResults searchTerm={searchTerm} />}
      </main>
    </Providers>
  );
}
