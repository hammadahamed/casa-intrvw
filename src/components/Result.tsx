import { useState } from "react";
import "./Results.scss";
import SearchComponent from "./Search";

interface ResultsComponentProps {
  results: string[] | null;
  searchCallBack: (q: string) => void;
}

const ResultsComponent = (props: ResultsComponentProps) => {
  const { results, searchCallBack } = props;

  const [selectedOptions, setSelectedOptions] = useState([] as string[]);

  const handleClick = (option: string) => {
    console.log(selectedOptions);
    console.log(option);

    if (selectedOptions.includes(option)) {
      const filtered = selectedOptions.filter((res) => res != option);
      setSelectedOptions([...filtered]);
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const selectAll = () => {
    se;
  };

  return (
    <>
      <div className="results-component-w">
        <SearchComponent searchCallback={searchCallBack} />
        <br />
        <br />

        {!results?.length ? (
          <></>
        ) : (
          <div className="container">
            {results?.map((res, index) => (
              <div
                className={`res-w ${
                  selectedOptions.includes(res) ? "selected" : ""
                }`}
                key={index}
                onClick={() => handleClick(res)}
              >
                <p>{res}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ResultsComponent;
