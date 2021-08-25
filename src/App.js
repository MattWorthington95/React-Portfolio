import { useState } from "react";
import "./App.css";
import LandingPage from "./LandingPage";

function App() {
  const [NameFin, setNameFin] = useState(false);
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
