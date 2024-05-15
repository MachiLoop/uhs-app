import Login from "./pages/Login";
import Navbar from "./components/Navigation";
import Patients from "./pages/Patients";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Patient from "./pages/Patient";
import Drugs from "./pages/Drugs";
import { ToastContainer } from "react-toastify";

export const MyContext = createContext();

// import { useLocation } from "react-router-dom";

// Function to retrieve values from local storage with a default value if not set
const getInitialValue = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

function App() {
  const localStorageRoleKey = "roleKey"; // Key for the first state
  const localStorageNameKey = "nameKey"; // Key for the second state

  // Initialize the state with values from local storage or default values
  const [staffRole, setStaffRole] = useState(
    getInitialValue(localStorageRoleKey, "")
  );
  const [staffName, setStaffName] = useState(
    getInitialValue(localStorageNameKey, "")
  );

  const [diagnosisVisibility, setDiagnosisVisibility] = useState(false);
  const [prescriptionVisibility, setPrescriptionVisibility] = useState(false);
  const [prescriptions, setPrescriptions] = useState([]);
  const [diagnosis, setDiagnosis] = useState([]);
  const [docId, setDocId] = useState("");

  // Update local storage whenever state1 changes
  useEffect(() => {
    localStorage.setItem(localStorageRoleKey, JSON.stringify(staffRole));
  }, [staffRole]);

  // Update local storage whenever state2 changes
  useEffect(() => {
    localStorage.setItem(localStorageNameKey, JSON.stringify(staffName));
  }, [staffName]);

  // const [staffRole, setStaffRole] = useState("Doc");
  // const [staffName, setStaffName] = useState("");

  return (
    <MyContext.Provider
      value={{
        staffRole,
        setStaffRole,
        staffName,
        setStaffName,
        diagnosisVisibility,
        setDiagnosisVisibility,
        prescriptionVisibility,
        setPrescriptionVisibility,
        prescriptions,
        setPrescriptions,
        diagnosis,
        setDiagnosis,
        docId,
        setDocId,
      }}
    >
      <BrowserRouter>
        <div className="font-urbanist flex">
          <Navbar />
          {/* <div>Appointment List</div> */}
          {/* <Patients /> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/patients/:patiendId" element={<Patient />} />{" "}
            <Route path="/drugs" element={<Drugs />} />
            {/* Dynamic route with userId parameter */}
          </Routes>
          {/* <Login /> */}
          <ToastContainer />
        </div>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
