import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Results } from "./pages/Results";
import { Finalize } from "./pages/Finalize";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/results/:testId" element={<Results />} />
        <Route path="/finalize/:testId" element={<Finalize />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;
