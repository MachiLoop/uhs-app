import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { MyContext } from "../App";

const DropdownBar = ({ dropdownFor }) => {
  const {
    diagnosisVisibility,
    setDiagnosisVisibility,
    prescriptionVisibility,
    setPrescriptionVisibility,
  } = useContext(MyContext);

  const handleDropdownClick = (e) => {
    e.preventDefault();
    if (dropdownFor == "diagnosis") {
      setDiagnosisVisibility((prev) => !prev);
      console.log(diagnosisVisibility);
      setPrescriptionVisibility(false);
    } else {
      console.log(prescriptionVisibility);
      setPrescriptionVisibility(!prescriptionVisibility);
      setDiagnosisVisibility(false);
    }
  };

  useEffect(() => {
    console.log(diagnosisVisibility);
  }, [diagnosisVisibility]);

  return (
    <div
      className="border border-custom-blue rounded-lg text-gray-600 flex items-center px-5"
      onClick={handleDropdownClick}
    >
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
};

export default DropdownBar;
