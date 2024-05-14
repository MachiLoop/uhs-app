import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useContext } from "react";
import { MyContext } from "../App";

const CancelIcon = ({ item, category, docId }) => {
  const { prescriptions, setPrescriptions, diagnosis, setDiagnosis } =
    useContext(MyContext);

  const docRef = doc(db, "patients", docId);

  // const array = [1, 2, 3];

  const deletePatientStatus = (item) => {
    if (category == "diagnosis") {
      updateDoc(docRef, {
        diagnosis: diagnosis.filter((e) => e !== item.toLowerCase()),
      }).then(() => {
        setDiagnosis(diagnosis.filter((e) => e !== item.toLowerCase()));
      });
    } else if (category == "prescriptions") {
      updateDoc(docRef, {
        prescriptions: prescriptions.filter((e) => e !== item.toLowerCase()),
      }).then(() => {
        setPrescriptions(prescriptions.filter((e) => e !== item));
      });
    }
  };

  return (
    <div className="bg-secondary-5 px-2">
      <FontAwesomeIcon
        icon={faXmark}
        className="cursor-pointer"
        onClick={() => deletePatientStatus(item)}
      />
    </div>
  );
};

export default CancelIcon;

// const patientsDoc = query(
//   patientsRef,
//   where("uhsNumber", "==", patient.uhsNumber)
// );
