import { useParams } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import data from "../data/data.json";
import { MyContext } from "../App";
import { useContext, useState } from "react";
import Prescriptions from "../components/Prescriptions";
import ServicesRendered from "../components/ServicesRendered";
import HealthStatus from "../components/HealthStatus";

const Patient = () => {
  const { patiendId } = useParams();
  console.log(patiendId);

  // const { staffRole, setStaffRole } = useContext(MyContext);

  const uhsNum = `${patiendId.slice(0, 3)}/${patiendId[3]}${patiendId[4]}`;
  console.log(uhsNum);

  const patient = data.patients.find((p) => p.uhsNumber === uhsNum);
  console.log(patient);

  return (
    <div className="patient-details--wrapper pt-6 flex flex-col ">
      <div className="pr-2">
        <PageIntro
          heading={`${patient.firstname} ${patient.lastname}`}
          message2="Serve those Medications!"
          className="pr-2"
        />
      </div>

      {/* middle card */}
      <div className="font-semibold  border-y border-secondary-0  rounded-lg mb-6 ">
        <div className="grid grid-cols-3 justify-between gap-12 w-11/12 max-md:w-full max-md:gap-4 ">
          <div className="border-x border-secondary-0 rounded-md flex flex-col gap-6 py-4 pl-4">
            <p className="text-secondary-50">Gender</p>
            <p className="text-2xl text-secondary-80 max-md:text-sm">Male</p>
          </div>
          <div className="border-x border-secondary-0 rounded-md flex flex-col gap-6  py-4 pl-4">
            <p className="text-secondary-50">Phone Number</p>
            <p className="text-2xl text-secondary-80 max-md:text-sm">
              08105472889
            </p>
          </div>
          <div className="border-x border-secondary-0 rounded-md flex flex-col gap-6  py-4 pl-4">
            <p className="text-secondary-50">UHS Number</p>
            <p className="text-2xl text-secondary-80 max-md:text-sm">542/16</p>
          </div>
        </div>
      </div>

      {/* end card */}
      {/* <Prescriptions patient={patient} /> */}
      {/* <ServicesRendered patient={patient} /> */}
      <HealthStatus />
    </div>
  );
};

export default Patient;
