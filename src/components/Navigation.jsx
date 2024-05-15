import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faUserGroup,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location);

  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const { staffName } = useContext(MyContext);

  console.log(staffName);

  if (location.pathname == "/") return;

  return (
    <div className="z-50 max-md:h-screen min-h-screen">
      <div
        className={`${
          mobileMenuVisible ? "block" : "hidden"
        } md:block nav-wrapper px-3 py-4 border-r border-secondary-0 h-full max-md:fixed top-0 bg-white`}
      >
        <div className="flex justify-between flex-col h-full">
          <div className="flex flex-col gap-4">
            <div className="flex bg-custom-grey py-2 px-4 rounded-md items-center gap-2">
              <img src="/images/camera.png" alt="" />
              <p className="text-white font-semibold">
                University Health Services
              </p>
            </div>
            <nav className="text-secondary-80 flex flex-col gap-1">
              <Link
                to="/patients"
                className="pl-4 py-3 hover:bg-secondary-0 hover:rounded-md"
              >
                <FontAwesomeIcon
                  icon={faUserGroup}
                  color="#96A397"
                  className="mr-2"
                />
                Patients
              </Link>
              <Link
                to="/drugs"
                className="pl-4 py-3 hover:bg-secondary-0 hover:rounded-md"
              >
                <FontAwesomeIcon
                  icon={faUserGroup}
                  color="#96A397"
                  className="mr-2"
                />
                Drugs
              </Link>
              <li className="pl-4 py-3 hover:bg-secondary-0 hover:rounded-md">
                <FontAwesomeIcon
                  icon={faUserGroup}
                  color="#96A397"
                  className="mr-2"
                />
                patients
              </li>
            </nav>
          </div>
          <div className="flex gap-2 items-center border border-secondary-5 rounded-md mb-1  px-2 py-2 text-secondary-80">
            <img src="/images/Avatar.png" alt="" />
            <div>
              <p className="font-semibold">{staffName}</p>
              <p className="font-medium text-xs">University Health Services</p>
            </div>
            <FontAwesomeIcon
              icon={faChevronDown}
              color="#5C715E"
              width={11}
              height={6}
            />
          </div>
        </div>
      </div>
      <div
        className="cursor-pointer lg:hidden absolute right-4 top-2"
        onClick={() => {
          setMobileMenuVisible(!mobileMenuVisible);
          console.log(mobileMenuVisible);
        }}
      >
        <FontAwesomeIcon
          icon={mobileMenuVisible ? faClose : faBars}
          size={mobileMenuVisible ? "xl" : "xl"}
          color="#99A5BD"
        />
      </div>
    </div>
  );
};

export default Navbar;
