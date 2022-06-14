import { useNavigate } from "react-router-dom";
import ModalInput from "./container/mainPage";

function App() {
  let navigate = useNavigate();
  const goSeatingPage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    navigate("/seatingallotment");
  };
  return (
    <div className="App">
      <h1 className="mb-70">Airplane Seating Allotment System</h1>
      <ModalInput goSeatingPage={(data) => goSeatingPage(data)} />
    </div>
  );
}

export default App;
