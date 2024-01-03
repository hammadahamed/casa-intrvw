import { useRef, useState } from "react";
import "./Results.scss";
import SearchComponent from "./Search";

interface ResultsComponentProps {
  results: string[] | null;
  searchCallBack: (q: string) => void;
}

const ResultsComponent = (props: ResultsComponentProps) => {
  const { results, searchCallBack } = props;

  const [selectedOptions, setSelectedOptions] = useState({} as any);
  const [showDropDown, setShowDropDown] = useState(false);
  const [isSelectedAll, setIsSelectedAll] = useState(false);

  const handleClick = (option: string) => {
    if (selectedOptions[option]) delete selectedOptions[option];
    else selectedOptions[option] = option;

    setShowDropDown(true);
    setSelectedOptions({ ...selectedOptions });
  };

  const optionsContainerRef = useRef<HTMLDivElement | null>(null);

  const selectAll = () => {
    if (isSelectedAll) {
      setSelectedOptions({});
      setIsSelectedAll(false);
    } else {
      const selecteds = results?.reduce((acc, opt) => {
        acc[opt] = true;
        return acc;
      }, {} as Record<string, boolean>);
      setSelectedOptions(selecteds);
      setIsSelectedAll(true);
    }
  };

  const handleOptionsClick = () => {
    setShowDropDown(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      console.log(document.activeElement);
      if (!optionsContainerRef?.current?.contains(document.activeElement)) {
        setShowDropDown(false);
      }
    }, 0);
  };

  return (
    <>
      <div className="results-component-w">
        <SearchComponent
          searchCallback={searchCallBack}
          showDropDown={setShowDropDown}
          onblur={handleInputBlur}
        />
        <br />
        <br />

        {!results?.length ? (
          <></>
        ) : showDropDown ? (
          <div
            className="container"
            ref={optionsContainerRef}
            onClick={handleOptionsClick}
            tabIndex={1}
            onBlur={handleInputBlur}
          >
            <div className="app-btn" onClick={selectAll}>
              {isSelectedAll ? "De-Select All" : "Select All"}
            </div>

            {results?.map((res, index) => (
              <div
                className={`res-w ${selectedOptions[res] ? "selected" : ""}`}
                key={index}
                onClick={() => handleClick(res)}
              >
                <p>{res}</p>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ResultsComponent;
