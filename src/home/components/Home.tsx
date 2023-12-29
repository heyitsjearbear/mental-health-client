import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../authentication/context/authContext";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
  
    const handleLogout = () => {
      logout();
      navigate('/auth'); // Update this to your actual authentication route
    };
  
    return (
      <div>
        Home
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  
  export default Home;