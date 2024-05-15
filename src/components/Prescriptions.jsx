import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { MyContext } from "../App";
import useFetchPatientData from "../hooks/useFetchPatientData";
import useNotification from "../hooks/useNotification";

const Prescriptions = ({ patient }) => {
  console.log(patient.uhsNumber);
  const { prescriptions, setPrescriptions } = useContext(MyContext);
  const { docId, setDocId } = useContext(MyContext);
  const { notify } = useNotification();
  console.log(docId);

  // const patientsRef = collection(db, "patients");
  // const patientsDoc = query(
  //   patientsRef,
  //   where("uhsNumber", "==", patient.uhsNumber)
  // );

  // const getPatient = async () => {
  //   const data = await getDocs(patientsDoc);
  //   let dataArray;
  //   // console.log(data);

  //   data.docs.map((doc) => {
  //     console.log(doc.data().prescriptions);
  //     dataArray = doc.data().prescriptions;
  //   });

  //   setPrescriptions([...dataArray]);
  // };

  // // console.log(patientsDoc);
  // useEffect(() => {
  //   getPatient();
  // }, []);

  // const handleDispenseDrugs = () => {
  //   console.log("hello");
  // };

  useFetchPatientData(patient.uhsNumber);

  console.log(prescriptions.length);

  // useEffect(() => console.log(prescriptions?.length), [prescriptions]);
  const [checkedValues, setCheckedValues] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (value) => {
    if (checkedValues.includes(value)) {
      // If value already exists in the array, remove it
      setCheckedValues(checkedValues.filter((item) => item !== value));
    } else {
      // If value doesn't exist in the array, add it
      setCheckedValues([...checkedValues, value]);
    }
  };

  const handleDispenseDrugs = () => {
    const docRefs = doc(db, "patients", docId);
    updateDoc(docRefs, {
      prescriptions: prescriptions.filter(
        (pres) => !checkedValues.includes(pres)
      ),
    })
      .then(() => {
        setPrescriptions(
          prescriptions.filter((pres) => !checkedValues.includes(pres))
        );
      })
      .then(() => {
        notify("Dispensed", { type: "success" });
      });
  };

  useEffect(() => {
    console.log(checkedValues);
  }, [checkedValues]);

  return (
    <div className="pl-6 pr-4 prescribed-drugs flex flex-col">
      <p className="font-alata text-black mb-4">Prescribed Drugs</p>

      {prescriptions?.length >= 1 ? (
        <div className="box-shadow rounded-lg p-4 flex flex-col gap-2 max-h-64 overflow-auto font-medium text-secondary-80">
          {prescriptions.map((prescription, index) => (
            <div className="flex gap-2 items-center mb-3" key={index}>
              <input
                type="checkbox"
                name={prescription}
                id={prescription}
                checked={checkedValues.includes(prescription)}
                onChange={() => handleCheckboxChange(prescription)}
              />
              <label htmlFor={prescription}>{prescription}</label>
            </div>
          ))}
        </div>
      ) : (
        <div>No prescription for this patient</div>
      )}

      <button
        className="bg-custom-blue py-2 px-7 text-white rounded-lg font-medium text-sm self-end mt-8 mb-6"
        onClick={handleDispenseDrugs}
      >
        Dispense
      </button>
    </div>
  );
};

export default Prescriptions;
