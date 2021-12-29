import { Link, navigate } from "gatsby";
import React, { FC, useEffect, useState } from "react";
import SearchForm from "../components/Molecules/SearchForm";
import Page from "../components/Templates/Page";

export interface ISearchResultsProps {
  query: string;
  results: Array<{
    title: string;
    url: string;
    date: string;
    description: string;
  }>;
}

const SearchResults: FC<ISearchResultsProps> = ({ results }) => (
  <section>
    <h2>Search results: </h2>
    {!!results.length && (
      <ul style={{ listStyle: "none", paddingLeft: "0" }}>
        {results.map(({ title, url, description }) => (
          <li key={title}>
            <h3>
              <a href={url}>{title}</a>
            </h3>
          </li>
        ))}
      </ul>
    )}
  </section>
);

export interface ISearchProps extends Window {}

const Search: FC<ISearchProps> = ({ location }) => {
  const [results, setResults] = useState([]);
  let searchQuery = "";
  const { search } = location;

    searchQuery = new URLSearchParams(search).get("keywords") || "";
    
  useEffect(() => {
    if (typeof window !== "undefined") {
      // LUNR type definitions do not yet include its extension on the window object
      /* tslint:disable */
      const { __LUNR__ }: any = window;
      if (__LUNR__) {
        __LUNR__.__loaded.then((lunr: any) => {
          const refs: Array<{ ref: any }> = lunr.en.index.search(searchQuery);
          const posts: any = refs.map(({ ref }) => lunr.en.store[ref]);
          setResults(posts);
        });
      }
    }
    /* tslint:enable */
  }, []);

  return (
    <Page pageTitle="Search this site" pageDescription="Search results">
      <h1>Search</h1>
      {typeof window !== 'undefined' ? (
        <>
          <SearchForm />
          {searchQuery.length > 0 && (
            <SearchResults query={searchQuery} results={results} />
          )}
        </>
      ) : (
        <p>Sorry, search is only available on the JS version of this site.</p>
      )}
    </Page>
  );
};
export default Search;
