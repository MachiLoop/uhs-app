import DropdownBar from "./DropdownBar";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import data from "../data/data.json";
import ListPopup from "./ListPopup";
import { useContext, useEffect, useState } from "react";
import useArraySearch from "../hooks/useArraySearch";
import { MyContext } from "../App";
import { useParams } from "react-router-dom";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

const HealthStatus = () => {
  const { patiendId } = useParams();
  const uhsNum = `${patiendId.slice(0, 3)}/${patiendId[3]}${patiendId[4]}`;
  const patient = data.patients.find((p) => p.uhsNumber === uhsNum);
  console.log(patient);

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

  console.log(patient.uhsNumber);
  const { prescriptions, setPrescriptions } = useContext(MyContext);
  const { diagnosis, setDiagnosis } = useContext(MyContext);
  const [docId, setDocId] = useState("");

  const patientsRef = collection(db, "patients");
  const patientsDoc = query(
    patientsRef,
    where("uhsNumber", "==", patient.uhsNumber)
  );

  console.log(patientsDoc);

  const getPatient = async () => {
    const data = await getDocs(patientsDoc);
    let prescriptionArray, diagnosisArray;
    let id = data.docs[0].id;

    data.docs.map((doc) => {
      console.log(doc.data().prescriptions);
      console.log(doc.data().diagnosis);
      prescriptionArray = doc.data().prescriptions;
      diagnosisArray = doc.data().diagnosis;
    });

    setPrescriptions([...prescriptionArray]);
    setDiagnosis([...diagnosisArray]);
    setDocId(id);
  };

  // console.log(patientsDoc);
  useEffect(() => {
    getPatient();
  }, []);

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
            {docId && (
              <ListPopup
                items={filteredDiagnosisList}
                category="diagnosis"
                docId={docId}
              />
            )}
          </div>
          {diagnosis.length >= 1 ? (
            <div>
              {diagnosis.map((diag) => (
                <p key={diag + Math.round(Math.random() + 5)}>{diag}</p>
              ))}
            </div>
          ) : null}
        </div>
        <div>
          <p className="font-alata text-black mb-2">Prescriptions</p>
          <div className="flex gap-4">
            <SearchBar sendDataToParent={handlePrescDataFromChild} />
            <DropdownBar dropdownFor="prescription" />
          </div>
          <div className={`${prescriptionVisibility ? "block" : "hidden"}`}>
            {docId && (
              <ListPopup
                items={filteredPrescriptionsList}
                category="prescriptions"
                docId={docId}
              />
            )}
          </div>
          {prescriptions.length >= 1 ? (
            <div>
              {prescriptions.map((presc) => (
                <p key={presc + Math.round(Math.random() + 5)}>{presc}</p>
              ))}
            </div>
          ) : null}
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
