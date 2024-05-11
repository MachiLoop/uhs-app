import { useParams } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import data from "../data/data.json";
import { MyContext } from "../App";
import { useContext, useState } from "react";
import Prescriptions from "../components/Prescriptions";
import ServicesRendered from "../components/ServicesRendered";
import HealthStatus from "../components/HealthStatus";
import PatientInfoCard from "../components/PatientInfoCard";

const Patient = () => {
  const { patiendId } = useParams();
  console.log(patiendId);

  const { staffRole, setStaffRole } = useContext(MyContext);

  const uhsNum = `${patiendId.slice(0, 3)}/${patiendId[3]}${patiendId[4]}`;
  console.log(uhsNum);

  const patient = data.patients.find((p) => p.uhsNumber === uhsNum);
  console.log(patient);

  return (
    <div className="patient-details--wrapper pt-6 flex flex-col ">
      <div className="pr-2">
        {staffRole == "Doc" ? (
          <PageIntro
            heading={`${patient.firstname} ${patient.lastname}`}
            message2="Manage your patients and their health status"
            message3="Complaints"
            message4="Diagnois"
            message5="Prescription"
            className="pr-2"
          />
        ) : staffRole == "Pharm" ? (
          <PageIntro
            heading={`${patient.firstname} ${patient.lastname}`}
            message2="Serve those Medications!"
            className="pr-2"
          />
        ) : (
          <PageIntro
            heading={`${patient.firstname} ${patient.lastname}`}
            message2="Any Discounts on these bills?"
            className="pr-2"
          />
        )}
      </div>

      {/* middle card */}
      <PatientInfoCard patient={patient} />

      {/* end card */}
      {staffRole == "Doc" ? (
        <HealthStatus />
      ) : staffRole == "Pharm" ? (
        <Prescriptions patient={patient} />
      ) : (
        <ServicesRendered patient={patient} />
      )}
    </div>
  );
};

export default Patient;
