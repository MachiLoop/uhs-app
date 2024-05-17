import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import { useContext } from "react";
import { MyContext } from "../App";
import {
  FieldValue,
  collection,
  doc,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";

const ListPopup = ({ items, category, docId }) => {
  const { patiendId } = useParams();
  const { prescriptions, setPrescriptions, diagnosis, setDiagnosis } =
    useContext(MyContext);

  const uhsNum = `${patiendId.slice(0, 3)}/${patiendId[3]}${patiendId[4]}`;
  console.log(uhsNum);

  const patient = data.patients.find((p) => p.uhsNumber === uhsNum);
  console.log(patient);

  const docRef = doc(db, "patients", docId);
  // const patientsDoc = query(
  //   patientsRef,
  //   where("uhsNumber", "==", patient.uhsNumber)
  // );

  const addPatientStatus = (item) => {
    if (category == "diagnosis") {
      if (!diagnosis.includes(item.toLowerCase())) {
        updateDoc(docRef, {
          diagnosis: [...diagnosis, item.toLowerCase()],
          // diagnosis: firebase.firestore.FieldValue.arrayUnion(item),
        }).then(() => {
          setDiagnosis([...diagnosis, item.toLowerCase()]);
        });
      }
    } else if (category == "prescriptions") {
      if (!prescriptions.includes(item.toLowerCase())) {
        updateDoc(docRef, {
          prescriptions: [...prescriptions, item.toLowerCase()],
        }).then(() => {
          setPrescriptions([...prescriptions, item.toLowerCase()]);
        });
      }
    }
  };

  return (
    <div className="capitalize list-popup px-4 py-4 absolute right-2 mt-2 rounded-lg bg-white box-shadow w-72 z-50 flex flex-col gap-5 max-h-60 overflow-auto font-medium text-secondary-80">
      {items.map((item, index) => (
        <li
          className="flex justify-between items-center text-sm mb-2"
          key={item + index}
        >
          <span>{item}</span>
          <FontAwesomeIcon
            icon={faPlus}
            size="2xs"
            color={
              prescriptions.includes(item.toLowerCase()) ||
              diagnosis.includes(item.toLowerCase())
                ? "blue"
                : "black"
            }
            // style={{ border: "2px black solid" }}
            onClick={() => addPatientStatus(item)}
            className={`${
              prescriptions.includes(item.toLowerCase()) ||
              diagnosis.includes(item.toLowerCase())
                ? "border-blue-700"
                : "border-black"
            } cursor-pointer border-2 `}
          />
        </li>
      ))}
    </div>
  );
};

export default ListPopup;
