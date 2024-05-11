const PatientInfoCard = ({ patient }) => {
  return (
    <div className="font-semibold  border-y border-secondary-0  rounded-lg mb-6 ">
      <div className="grid grid-cols-3 justify-between gap-12 w-11/12 max-md:w-full max-md:gap-4 capitalize">
        <div className="border-x border-secondary-0 rounded-md flex flex-col gap-6 py-4 pl-4">
          <p className="text-secondary-50 capitalize">Gender</p>
          <p className="text-2xl text-secondary-80 max-md:text-sm">
            {patient.gender}
          </p>
        </div>
        <div className="border-x border-secondary-0 rounded-md flex flex-col gap-6  py-4 pl-4">
          <p className="text-secondary-50">Phone Number</p>
          <p className="text-2xl text-secondary-80 max-md:text-sm">
            {patient.phoneNumber}
          </p>
        </div>
        <div className="border-x border-secondary-0 rounded-md flex flex-col gap-6  py-4 pl-4">
          <p className="text-secondary-50">UHS Number</p>
          <p className="text-2xl text-secondary-80 max-md:text-sm">
            {patient.uhsNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientInfoCard;
