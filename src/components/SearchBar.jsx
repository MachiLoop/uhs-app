import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className=" relative w-full  text-gray-600">
      <input
        className="w-full border border-secondary-50 h-10 px-5 pl-10 rounded-lg text-sm focus:outline-none placeholder-secondary-50"
        type="search"
        name="search"
        placeholder="Search"
      />
      <div className="absolute left-0 -top-2 mt-4 ml-4">
        <FontAwesomeIcon icon={faMagnifyingGlass} color="#96A397" />
      </div>
    </div>
  );
};

export default SearchBar;
