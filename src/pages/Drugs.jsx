import { useContext } from "react";
import { MyContext } from "../App";
import PageIntro from "../components/PageIntro";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import data from "../data/data.json";

const Drugs = () => {
  const { staffRole, setStaffRole } = useContext(MyContext);

  return (
    <div className="drugs-list--wrapper pt-2 flex flex-col">
      <PageIntro
        heading="Drugs List"
        message1={`Welcome ${staffRole}!`}
        message2="Manage your patients and their health status"
      />

      <div className="pt-3 flex flex-col px-4 border-t border-l rounded-tl-lg  grow shrink basis-auto">
        <div className="flex gap-3 mb-6">
          <SearchBar />
          <FilterBar />
        </div>
        <table className="w-full text-sm max-sm:text-xs ">
          <thead className="px-2">
            <tr className="grid grid-cols-3 gap-4 w-full text-left font-semibold text-custom-blue mb-3">
              <th>Drug Name</th>
              <th>Drug Family</th>
              <th>Stack Amount</th>
            </tr>
          </thead>
          <tbody className="capitalize text-secondary-70 font-medium flex flex-col gap-2 max-h-64 overflow-auto">
            {data.drugsInfo.map((drugInfo) => (
              <tr
                className="grid grid-cols-3 gap-4 w-full py-3 hover:pl-2 items-center"
                key={drugInfo.name + drugInfo.family}
              >
                <td>{drugInfo.name}</td>
                <td>{drugInfo.family}</td>
                <td>{drugInfo.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Drugs;
