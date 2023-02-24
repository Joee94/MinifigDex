import styles from "./styles/search.module.css";
import { useState } from "react";
import Providers from "../../components/providers";
import SearchResults from "./components/searchResults";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Providers>
      <main>
        <form
          className={styles.searchBar}
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
};
export default Search;
