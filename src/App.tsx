import { useEffect, useState } from "react";
import "./App.css";
import ResultsComponent from "./components/Result";
import SearchResults from "./model/searchResults";

function App() {
  const [searchResults, setSearchResults] = useState(null as string[] | null);

  const search = async (query?: string) => {
    let url = "https://jsonplaceholder.typicode.com/todos";
    if (query) {
      url += `?q=${query}`;
    }
    const response = await fetch(url);
    const parsedResult = await response.json();
    setSearchResults(parsedResult.map((pr: SearchResults) => pr.title));
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <div className="wrapper">
        <ResultsComponent results={searchResults} searchCallBack={search} />
        <ResultsComponent results={searchResults} searchCallBack={search} />
      </div>
    </>
  );
}

export default App;
