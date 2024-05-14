import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { MyContext } from "../App";

const Prescriptions = ({ patient }) => {
  console.log(patient.uhsNumber);
  const { prescriptions, setPrescriptions } = useContext(MyContext);

  const patientsRef = collection(db, "patients");
  const patientsDoc = query(
    patientsRef,
    where("uhsNumber", "==", patient.uhsNumber)
  );

  const getPatient = async () => {
    const data = await getDocs(patientsDoc);
    let dataArray;
    // console.log(data);

    data.docs.map((doc) => {
      console.log(doc.data().prescriptions);
      dataArray = doc.data().prescriptions;
    });

    setPrescriptions([...dataArray]);
  };

  // console.log(patientsDoc);
  useEffect(() => {
    getPatient();
  }, []);

  // useEffect(() => console.log(prescriptions?.length), [prescriptions]);

  return (
    <div className="pl-6 pr-4 prescribed-drugs flex flex-col">
      <p className="font-alata text-black mb-4">Prescribed Drugs</p>

      {prescriptions?.length >= 1 ? (
        <div className="box-shadow rounded-lg p-4 flex flex-col gap-2 max-h-64 overflow-auto font-medium text-secondary-80">
          {prescriptions.map((prescription) => (
            <div
              className="flex gap-2 items-center mb-3"
              key={prescription.slice(0, 3) + Math.round(Math.random(0, 1) + 5)}
            >
              <input type="checkbox" name={prescription} id={prescription} />
              <label htmlFor={prescription}>{prescription}</label>
            </div>
          ))}
        </div>
      ) : (
        <div>No prescription for this patient</div>
      )}

      <button className="bg-custom-blue py-2 px-7 text-white rounded-lg font-medium text-sm self-end mt-8 mb-6">
        Dispense
      </button>
    </div>
  );
};

export default Prescriptions;
