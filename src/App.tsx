import { useEffect, useState } from "react";
import "./App.css";
import ResultsComponent from "./components/Result";
import SearchResults from "./model/searchResults";

function App() {
  const [searchResults, setSearchResults] = useState(null as string[] | null);

  const data = Array.from({ length: 1000 }, (_, index) => {
    return "hello " + index;
  });

  const search = async (query?: string) => {
    let url = "https://jsonplaceholder.typicode.com/todos";
    if (query) {
      url += `?q=${query}`;
    }
    const response = await fetch(url);
    const parsedResult = await response.json();
    setSearchResults(
      parsedResult.map((pr: SearchResults) => ({ [pr.title]: 0 }))
    );
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <ResultsComponent results={data} searchCallBack={search} />
      <ResultsComponent results={data} searchCallBack={search} />
    </>
  );
}

export default App;
