import DropdownBar from "./DropdownBar";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import data from "../data/data.json";

import ListPopup from "./ListPopup";

const HealthStatus = () => {
  return (
    <div className="px-5 flex flex-col grow shrink basis-auto justify-between">
      <div className="flex flex-col gap-16">
        <div>
          <p className="font-alata text-black mb-2">Diagnosis</p>
          <div className="flex gap-4">
            <SearchBar />
            <DropdownBar />
          </div>
          <ListPopup items={data.diagnosisList} />
        </div>
        <div>
          <p className="font-alata text-black mb-2">Prescriptions</p>
          <div className="flex gap-4">
            <SearchBar />
            <DropdownBar />
          </div>
          <ListPopup items={data.prescriptionsList} />
        </div>
      </div>
      <button className="bg-custom-blue py-3 px-7 text-white rounded-lg font-medium text-sm  mb-6 w-72 self-center flex items-center gap-2 justify-center">
        <span>Save</span>
        <FontAwesomeIcon icon={faFloppyDisk} />
      </button>
    </div>
  );
};

export default HealthStatus;
