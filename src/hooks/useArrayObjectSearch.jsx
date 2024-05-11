import { useState, useEffect } from "react";

const useArrayObjectSearch = (dataArray, searchTerm) => {
  const [filteredPatients, setFilteredPatients] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredPatients(dataArray);
      return;
    }

    const filteredResults = dataArray.filter((item) => {
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
    });

    setFilteredPatients(filteredResults);
  }, [dataArray, searchTerm]);

  return filteredPatients;
};

export default useArrayObjectSearch;
