import "./App.css";
import Welcome from "./authentication/components/Welcome";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./authentication/context/authContext";
import Home from "./home/components/Home";
import { JournalProvider } from "./home/context/journalContext";

function App() {
  return (
    <AuthProvider>
      <JournalProvider>
        <Router>
          <Routes>
            <Route path="/auth" element={<Welcome />} />
            <Route path="/" element={<Navigate to="/auth" />} />
            {/* Add more routes as needed */}
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </JournalProvider>
    </AuthProvider>
  );
}

export default App;
