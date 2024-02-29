import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  // STATE TO MANAGE MOBILE MENU VISIBILITY
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center w-11/12 mt-6 mx-auto">
        {/* HAMBURGER */}

        <FontAwesomeIcon
          icon={mobileMenuVisible ? faClose : faBars}
          className="scale-x-150 cursor-pointer lg:hidden"
          size={mobileMenuVisible ? "2xl" : "xl"}
          onClick={() => {
            setMobileMenuVisible(!mobileMenuVisible);
            console.log(mobileMenuVisible);
          }}
        />

        <h1 className="font-bold text-2xl">Crispy Kitchen</h1>
        {/* DESKTOP MENU NAVIGATION */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-8 text-lg text-gray-600">
            <li className="hover:text-red-500">Home</li>
            <li className="hover:text-red-500">Story</li>
            <li className="hover:text-red-500">Menu</li>
            <li className="hover:text-red-500">Our Updates</li>
            <li className="hover:text-red-500">Contact</li>
          </ul>
        </nav>
        <button className="text-white bg-red-600 rounded-md px-10 py-3">
          Reservation
        </button>
      </div>

      {/* MOBILE MENU NAVIGATION */}
      <nav
        className={`${
          mobileMenuVisible ? "block" : "hidden"
        } lg:hidden font-montserrat`}
      >
        <ul className="flex flex-col mt-3 gap-4 w-11/12 ml-auto text-lg text-gray-600">
          <li className="hover:text-red-500">Home</li>
          <li className="hover:text-red-500">Story</li>
          <li className="hover:text-red-500">Menu</li>
          <li className="hover:text-red-500">Our Updates</li>
          <li className="hover:text-red-500">Contact</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
