import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Patients = () => {
  return (
    <div className="patients-list--wrapper px-6 py-6">
      <div className="font-semibold flex flex-col gap-4 border border-secondary-0 p-4 rounded-lg mb-6">
        <h1 className="text-custom-blue text-xl">Patient List</h1>
        <div>
          <h2 className="text-base text-secondary-80">Welcome Doc</h2>
          <p className="text-sm text-secondary-70">
            Manage your patients and their health status
          </p>
        </div>
      </div>
      <div className="border border-secondary-0 p-4 rounded-lg">
        <div>
          <div className="flex gap-3 mb-6">
            <div className=" relative w-full  text-gray-600">
              <input
                className="w-full border border-secondary-50 h-10 px-5 pl-10 rounded-lg text-sm focus:outline-none placeholder-secondary-50"
                type="search"
                name="search"
                placeholder="Search"
              />
              <div class="absolute left-0 -top-2 mt-4 ml-4">
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

          <table className="w-11/12">
            <tr className="grid grid-cols-5 gap-4 w-full text-left font-semibold text-custom-blue">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>UHS Number</th>
              <th>Category</th>
            </tr>
            <tr className="grid grid-cols-5 gap-4 w-full">
              <td>Samuel</td>
              <td>Eberendu</td>
              <td>Male</td>
              <td>542/16</td>
              <td>Checked</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patients;
