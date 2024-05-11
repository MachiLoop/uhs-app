import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import data from "../data/data.json";
import PageIntro from "../components/PageIntro";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import useArraySearch from "../hooks/useArraySearch";
// import useArrayObjectSearch from "../hooks/useArraySearch";

const Patients = () => {
  const { staffRole, setStaffRole } = useContext(MyContext);
  // const [filteredPatients, setFilteredPatients] = useState(data.patients);

  const [searchTermFromChild, setSearchTermFromChild] = useState("");

  const handleDataFromChild = (data) => {
    setSearchTermFromChild(data);
  };

  const filteredPatients = useArraySearch(data.patients, searchTermFromChild);

  const navigate = useNavigate();
  const handleTableClick = (filteredPatient) => {
    navigate(`/patients/${filteredPatient.uhsNumber.replace("/", "")}`);
  };

  return (
    <div className="patients-list--wrapper pl-6 pr-2 py-6">
      <PageIntro
        heading="Patient List"
        message1={`Welcome ${staffRole}!`}
        message2="Manage your patients and their health status"
      />

      <div className="border border-secondary-0 p-4 rounded-lg overflow-x-auto">
        <div>
          <div className="flex gap-3 mb-6">
            <SearchBar sendDataToParent={handleDataFromChild} />
            <FilterBar />
          </div>

          <table className="w-11/12 text-sm max-sm:text-xs">
            <thead className="px-2">
              <tr className="grid grid-cols-5 gap-4 w-full text-left font-semibold text-custom-blue mb-3">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>UHS Number</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody className="capitalize text-secondary-70 font-medium flex flex-col gap-2">
              {filteredPatients.map((filteredPatient) => (
                <tr
                  className="grid grid-cols-5 gap-4 w-full py-3 hover:pl-2 items-center"
                  key={filteredPatient.uhsNumber}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTableClick(filteredPatient);
                  }}
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
