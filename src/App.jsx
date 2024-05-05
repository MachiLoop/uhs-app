import Login from "./pages/Login";
import Navbar from "./components/Navigation";
import Patients from "./pages/Patients";

function App() {
  return (
    <div className="font-urbanist flex">
      <Navbar />
      {/* <div>Appointment List</div> */}
      <Patients />
      {/* <Login /> */}
    </div>
  );
}

export default App;
