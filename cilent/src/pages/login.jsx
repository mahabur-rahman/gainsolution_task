import { useState } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import axios from "axios";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      dispatch(loginStart());
      try {
        const res = await axios.post("http://localhost:4000/api/auth/login", {
          email: userData.email,
          password: userData.password,
        });
        dispatch(loginSuccess(res.data));
        navigate("/");
      } catch (err) {
        dispatch(loginFailure());
        setError("");
      }
    }

    setValidated(true);
  };

  return (
    <>
      <Container className="mb-5">
        <h3 className="text-center mt-3">User Login</h3>
        <Row>
          <Col xl={6} lg={6} md={6} className="mx-auto mt-2 pt-2">
            <Form noValidate validated={validated}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="fw-semibold">Email address :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className="fw-semibold">Password :</Form.Label>
                <Form.Control
                  type={!toggle ? "password" : "text"}
                  placeholder="******"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
                <div className="text-end" onClick={() => setToggle(!toggle)}>
                  {!toggle ? "Show" : "Hide"}
                </div>
              </Form.Group>

              {error && <Alert variant="danger">{error}</Alert>}

              <div className="d-grid gap-2">
                <Button variant="secondary" type="submit" onClick={handleLogin}>
                  Login
                </Button>
              </div>
              <p className="text-center my-1">
                Do not have an account? Please
                <Link to={`/register`} className="mx-1">
                  Register Now
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
