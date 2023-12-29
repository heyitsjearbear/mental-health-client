import "./App.css";
import Welcome from "./authentication/components/Welcome";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Welcome />} />
        <Route path="/" element={<Navigate to="/auth" />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
