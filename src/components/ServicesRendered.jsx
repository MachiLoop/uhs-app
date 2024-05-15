const ServicesRendered = ({ patient }) => {
  return (
    <div className="pl-6 grow shrink basis-auto flex flex-col">
      <p className="font-alata text-black mb-4">Services Rendered</p>
      <div className="pt-3 flex flex-col px-4 border-t border-l rounded-tl-lg  grow shrink basis-auto justify-between">
        <table className="w-full text-sm max-sm:text-xs ">
          <thead className="px-2">
            <tr className="grid grid-cols-5 gap-4 w-full text-left font-semibold text-custom-blue mb-3">
              <th>Service</th>
              <th>Staff</th>
              <th>Type</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody className="capitalize text-secondary-70 font-medium flex flex-col gap-2 max-h-64 overflow-auto">
            {patient.servicesRendered.map((serviceRendered) => (
              <tr
                className="grid grid-cols-5 gap-4 w-full py-3 hover:pl-2 items-center"
                key={serviceRendered.service}
              >
                <td>{serviceRendered.service}</td>
                <td>{serviceRendered.staff}</td>
                <td>{serviceRendered.type}</td>
                <td>{serviceRendered.price}</td>
                <td
                  className={`${
                    serviceRendered.category.toLowerCase() == "checked"
                      ? "bg-green-success text-green-50"
                      : "bg-red-warning text-red-50"
                  } w-min py-1 px-2 rounded-md `}
                >
                  {serviceRendered.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="bg-custom-blue py-2 px-7 text-white rounded-lg font-medium text-sm self-end mt-8 mb-6">
          Payment Verified
        </button>
      </div>
    </div>
  );
};

export default ServicesRendered;
