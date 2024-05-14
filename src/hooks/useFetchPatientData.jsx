import { useContext, useEffect } from "react";
import { MyContext } from "../App";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

const useFetchPatientData = (uhsNumber) => {
  const { setPrescriptions, setDiagnosis, setDocId } = useContext(MyContext);

  const patientsRef = collection(db, "patients");
  const patientsDoc = query(patientsRef, where("uhsNumber", "==", uhsNumber));

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
};

export default useFetchPatientData;
