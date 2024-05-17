import { useState } from "react";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App"; // The context created above
import { useContext } from "react";
import useNotification from "../hooks/useNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let isSignedIn = false;
  const navigate = useNavigate();
  const { notify } = useNotification();
  const { setStaffRole, setStaffName } = useContext(MyContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  // console.log(staffRole);

  const handleSubmitHandler = () => {
    // e.preventDefault();
    console.log("hello");
    console.log(username, password);

    data.staffs.forEach((staff) => {
      if (username == staff.username && password == staff.password) {
        setStaffRole(staff.role);
        setStaffName(staff.name);
        isSignedIn = true;
        notify("Login successfull", { type: "success" });
        navigate("/patients");
      }
    });

    !isSignedIn
      ? notify("Wrong username or password", { type: "error" })
      : null;
  };

  return (
    <div className="grid grid-cols-2 h-screen max-md:grid-cols-1 w-screen">
      <div className="logo-side text-center flex flex-col items-center justify-center max-md:hidden">
        <img src="/images/UI logo 2.png" alt="" />
        <p className="font-bold mt-4 font-alata text-2xl">
          The <br /> University Health Service <br /> Login
        </p>
      </div>
      <div className="form-side flex items-center justify-center max-md:flex-col max-md:gap-4">
        <img
          src="/images/UI logo 2.png"
          alt=""
          className="hidden max-md:block mb-2"
        />
        <div className="flex gap-6 flex-col">
          <div>
            <h1 className="text-custom-blue text-2xl capitalize font-semibold">
              Welcome Back
            </h1>
            <p className="text-secondary-70">
              Enter your details below to get Started
            </p>
          </div>
          <form action="POST" className="flex flex-col gap-6">
            <div className="flex flex-col ">
              <label htmlFor="username" className="text-secondary-80">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="w-72 text-secondary-50 border border-secondary-50 border-solid rounded-md h-9 py-2 px-3 placeholder-secondary-50"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-72 text-secondary-50 border border-secondary-50 border-solid rounded-md h-9 py-2 px-3 placeholder-secondary-50"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FontAwesomeIcon
                  icon={passwordVisible ? faEyeSlash : faEye}
                  className="absolute right-2 translate-y-1/2"
                  style={{ color: "#99A5BD" }}
                  onClick={() => setPasswordVisible(!passwordVisible)}
                />
              </div>
              <p className="font-medium text-secondary-80">
                Forgot your password?
              </p>
            </div>
            <input
              type="submit"
              value="Log In"
              className="bg-secondary-50 py-2 text-white rounded-md"
              onClick={(e) => {
                e.preventDefault();
                handleSubmitHandler();
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
