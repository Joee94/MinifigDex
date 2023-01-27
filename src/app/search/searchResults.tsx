"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

interface Props {
  searchTerm: string;
}
interface Result {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
}

interface Response {
  count: number;
  results: Result[];
}

export default function SearchResults({ searchTerm }: Props) {
  const { isLoading, error, data } = useQuery<Response>(
    ["search", searchTerm],
    () => fetch(`/api/search?term=${searchTerm}`).then((res) => res.json()),
    { refetchOnWindowFocus: false }
  );

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  console.log(data);

  return (
    <ul className={styles.searchList}>
      {data.results.map((item) => {
        return (
          <li key={`${item.name}${item.set_num}`}>
            <button>
              <div>
                <h3>
                  {item.name} - {item.set_num}
                </h3>
                {item.set_img_url ? (
                  <Image
                    src={item.set_img_url}
                    width={200}
                    height={200}
                    alt={item.name}
                  />
                ) : (
                  <Image
                    src="https://rebrickable.com/static/img/nil_mf.jpg"
                    width={200}
                    height={200}
                    alt={item.name}
                  />
                )}
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
