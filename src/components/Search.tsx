import { useState } from "react";
import "./Search.scss";

interface SearchComponentProps {
  searchCallback: (q: string) => void;
}

const SearchComponent = (props: SearchComponentProps) => {
  const { searchCallback } = props;

  const [input, setInput] = useState("");

  const handleInputchange = (query: string) => {
    setInput(query);
    searchCallback(query);
  };

  return (
    <>
      <div className="">
        <input
          className="app-search"
          type="text"
          placeholder="Type something"
          value={input}
          onChange={(e) => handleInputchange(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchComponent;
