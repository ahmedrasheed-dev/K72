import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";

function App() {

  return (
    <div className="bg-black text-amber-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
