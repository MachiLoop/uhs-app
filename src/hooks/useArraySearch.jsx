import { useState, useEffect } from "react";

const useArraySearch = (dataArray, searchTerm) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(dataArray);
      return;
    }

    const filteredResults = dataArray.filter((item) => {
      if (typeof item === "string") {
        return item.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (typeof item === "object") {
        // Assuming the objects have string values to search
        for (const key in item) {
          if (key == "gender") {
            if (
              searchTerm.toLowerCase() == "male" &&
              item[key].toString().toLowerCase() == searchTerm.toLowerCase()
            ) {
              return true;
            } else if (
              searchTerm.toLowerCase() != "male" &&
              item[key]
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return true;
            }
          } else {
            if (
              item[key]
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return true;
            }
          }
        }
        return false;
      }
      return false;
    });

    setFilteredData(filteredResults);
  }, [dataArray, searchTerm]);

  return filteredData;
};

export default useArraySearch;
