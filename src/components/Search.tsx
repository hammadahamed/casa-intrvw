import { useState } from "react";
import "./Search.scss";

interface SearchComponentProps {
  searchCallback: (q: string) => void;
  showDropDown: (q: boolean) => void;
  onblur: () => void;
}

const SearchComponent = (props: SearchComponentProps) => {
  const { searchCallback, showDropDown, onblur } = props;

  const [input, setInput] = useState("");

  const handleInputchange = (query: string) => {
    setInput(query);
    searchCallback(query);
  };

  const setShowDropDown = (val: boolean) => {
    showDropDown(val);
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
          onFocus={() => setShowDropDown(true)}
          onBlur={onblur}
        />
      </div>
    </>
  );
};

export default SearchComponent;
