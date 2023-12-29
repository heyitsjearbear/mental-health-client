import React, { useState, useContext } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "./styles.css";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useContext(AuthContext);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLogin) {
      //TODO Handle login logic here
      
    } else {
      // Handle registration logic here
      console.log("registering...");
      try {
        const response = await fetch("http://localhost:3000/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        
        const data = await response.json();

        if (!response.ok) {
          // Handle error
          console.log(data);
        } else {
          // Registration was successful
          // console.log(data);
          login(data.token);
          navigate("/home");
        }
      } catch (error) {
        // Handle network error
        console.error("Network error:", error);
      }
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="panel" style={{ width: "400px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">
            {isLogin ? "Welcome" : "Register"}
          </Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              {isLogin ? "Login" : "Register"}
            </Button>
            <Button
              variant="secondary"
              className="w-100 mt-3"
              onClick={() => setIsLogin(!isLogin)} // Switch between login and register
            >
              {isLogin ? "Not a user?" : "Already a user?"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Welcome;
