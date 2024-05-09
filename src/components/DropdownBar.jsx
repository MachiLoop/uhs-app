import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const DropdownBar = () => {
  return (
    <div className="border border-custom-blue rounded-lg text-gray-600 flex items-center px-5">
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
};

export default DropdownBar;
