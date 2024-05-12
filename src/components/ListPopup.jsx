import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPlus } from "@fortawesome/free-solid-svg-icons";

const ListPopup = ({ items }) => {
  return (
    <div className="list-popup px-4 py-4 absolute right-2 mt-2 rounded-lg bg-white box-shadow w-72 z-50 flex flex-col gap-5 max-h-60 overflow-auto font-medium text-secondary-80">
      {items.map((item) => (
        <li
          className="flex justify-between items-center text-sm mb-2"
          key={item + Math.round(Math.random(0, 1) + 5)}
        >
          <span>{item}</span>
          <FontAwesomeIcon
            icon={faPlus}
            size="2xs"
            style={{ border: "2px black solid" }}
          />
        </li>
      ))}
    </div>
  );
};

export default ListPopup;
