import DropdownBar from "./DropdownBar";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import data from "../data/data.json";
import ListPopup from "./ListPopup";
import { useContext, useState } from "react";
import useArraySearch from "../hooks/useArraySearch";
import { MyContext } from "../App";

const HealthStatus = () => {
  console.log(data.diagnosisList);

  // BEGIN - FOR SEARCH HOOK
  const [diagnosisTermFromChild, setDiagnosisTermFromChild] = useState("");
  const [prescTermFromChild, setPrescTermFromChild] = useState("");
  const { diagnosisVisibility, prescriptionVisibility } = useContext(MyContext);

  const handleDiagnosisDataFromChild = (data) => {
    setDiagnosisTermFromChild(data);
  };

  const handlePrescDataFromChild = (data) => {
    setPrescTermFromChild(data);
  };

  const filteredDiagnosisList = useArraySearch(
    data.diagnosisList,
    diagnosisTermFromChild
  );
  const filteredPrescriptionsList = useArraySearch(
    data.prescriptionsList,
    prescTermFromChild
  );
  // END - FOR SEARCH HOOK

  return (
    <div className="px-5 flex flex-col grow shrink basis-auto justify-between">
      <div className="flex flex-col gap-16">
        <div>
          <p className="font-alata text-black mb-2">Diagnosis</p>
          <div className="flex gap-4">
            <SearchBar sendDataToParent={handleDiagnosisDataFromChild} />
            <DropdownBar dropdownFor="diagnosis" />
          </div>
          <div className={`${diagnosisVisibility ? "block" : "hidden"}`}>
            <ListPopup items={filteredDiagnosisList} />
          </div>
        </div>
        <div>
          <p className="font-alata text-black mb-2">Prescriptions</p>
          <div className="flex gap-4">
            <SearchBar sendDataToParent={handlePrescDataFromChild} />
            <DropdownBar dropdownFor="prescription" />
          </div>
          <div className={`${prescriptionVisibility ? "block" : "hidden"}`}>
            <ListPopup items={filteredPrescriptionsList} />
          </div>
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
