import { useParams } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import data from "../data/data.json";
import { MyContext } from "../App";
import { useContext, useState } from "react";
import Prescriptions from "../components/Prescriptions";

const Patient = () => {
  const { patiendId } = useParams();
  console.log(patiendId);

  // const { staffRole, setStaffRole } = useContext(MyContext);

  const uhsNum = `${patiendId.slice(0, 3)}/${patiendId[3]}${patiendId[4]}`;
  console.log(uhsNum);

  const patient = data.patients.find((p) => p.uhsNumber === uhsNum);
  console.log(patient);

  return (
    <div className="patient-details--wrapper py-6">
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
      {/* <div className="pl-6 pr-4 prescribed-drugs flex flex-col">
        <p className="font-alata text-black mb-4">Prescribed Drugs</p>
        <div className="box-shadow rounded-lg p-4 flex flex-col gap-2 max-h-64 overflow-auto font-medium text-secondary-80">
          {patient.prescriptions.map((prescription) => (
            <div className="flex gap-2 items-center mb-3">
              <input type="checkbox" name={prescription} id={prescription} />
              <label htmlFor={prescription}>{prescription}</label>
            </div>
          ))}
        </div>
        <button className="bg-custom-blue py-2 px-7 text-white rounded-lg font-medium text-sm self-end mt-8">
          Dispense
        </button>
      </div> */}
      <Prescriptions patient={patient} />
    </div>
  );
};

export default Patient;
