import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { MyContext } from "../App";
import data from "../data/data.json";

const Patients = () => {
  const { staffRole, setStaffRole } = useContext(MyContext);
  const [filteredPatients, setFilteredPatients] = useState(data.patients);

  return (
    <div className="patients-list--wrapper px-6 py-6">
      <div className="font-semibold flex flex-col gap-4 border border-secondary-0 p-4 rounded-lg mb-6">
        <h1 className="text-custom-blue text-xl">Patient List</h1>
        <div>
          <h2 className="text-base text-secondary-80">Welcome {staffRole}!</h2>
          <p className="text-sm text-secondary-70">
            Manage your patients and their health status
          </p>
        </div>
      </div>
      <div className="border border-secondary-0 p-4 rounded-lg overflow-x-auto">
        <div>
          <div className="flex gap-3 mb-6">
            <div className=" relative w-full  text-gray-600">
              <input
                className="w-full border border-secondary-50 h-10 px-5 pl-10 rounded-lg text-sm focus:outline-none placeholder-secondary-50"
                type="search"
                name="search"
                placeholder="Search"
              />
              <div className="absolute left-0 -top-2 mt-4 ml-4">
                <FontAwesomeIcon icon={faMagnifyingGlass} color="#96A397" />
              </div>
            </div>
            <div className="py-2 px-5 pr-3 border border-secondary-50 rounded-lg text-gray-600 flex items-center justify-center gap-2">
              <p className="text-custom-blue">Filters</p>
              <div className="">
                <img src="/images/Vector.png" alt="" className="w-5 h-2" />
              </div>
            </div>
          </div>

          <table className="w-11/12 text-sm max-sm:text-xs">
            <thead>
              <tr className="grid grid-cols-5 gap-4 w-full text-left font-semibold text-custom-blue mb-3">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>UHS Number</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody className="capitalize text-secondary-70 font-medium ">
              {filteredPatients.map((filteredPatient) => (
                <tr
                  className="grid grid-cols-5 gap-4 w-full py-3"
                  key={filteredPatient.uhsNumber}
                >
                  <td>{filteredPatient.firstname}</td>
                  <td>{filteredPatient.lastname}</td>
                  <td>{filteredPatient.gender}</td>
                  <td>{filteredPatient.uhsNumber}</td>
                  {staffRole == "Doc" ? (
                    <td
                      className={`${
                        filteredPatient.docCategory == "checked"
                          ? "bg-green-success text-green-50"
                          : "bg-red-warning text-red-50"
                      } w-min py-1 px-2 rounded-md `}
                    >
                      {filteredPatient.docCategory}
                    </td>
                  ) : staffRole == "Pharm" ? (
                    <td
                      className={`${
                        filteredPatient.pharmCategory == "checked"
                          ? "bg-green-success text-green-50"
                          : "bg-red-warning text-red-50"
                      } w-min py-1 px-2 rounded-md `}
                    >
                      {filteredPatient.pharmCategory}
                    </td>
                  ) : (
                    <td
                      className={`${
                        filteredPatient.accountantCategory == "checked"
                          ? "bg-green-success text-green-50"
                          : "bg-red-warning text-red-50"
                      } w-min py-1 px-2 rounded-md `}
                    >
                      {filteredPatient.accountantCategory}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patients;
