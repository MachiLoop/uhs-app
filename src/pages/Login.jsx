const Login = () => {
  return (
    <div className="grid grid-cols-2 h-screen max-md:grid-cols-1">
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
          <form action="" className="flex flex-col gap-6">
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
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-72 text-secondary-50 border border-secondary-50 border-solid rounded-md h-9 py-2 px-3 placeholder-secondary-50"
              />
              <p className="font-medium text-secondary-80">
                Forgot your password?
              </p>
            </div>
            <input
              type="submit"
              value="Log In"
              className="bg-secondary-50 py-2 text-white rounded-md"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
