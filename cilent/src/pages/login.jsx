import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // loginUser
  const loginUser = async (e) => {
    e.preventDefault();

    if (userData.email === "") {
      toast.error("Email is required!", {
        position: "top-center",
      });
    } else if (!userData.email.includes("@")) {
      toast.warning("Includes @ in your email", {
        position: "top-center",
      });
    } else if (userData.password === "") {
      toast.error("Password is required", {
        position: "top-center",
      });
    } else {
      // API CALL
      console.log(userData);
    }
  };

  return (
    <>
      <Container className="mb-5">
      <h3 className="text-center mt-3">User Login</h3>
        <Row>
          <Col xl={6} lg={6} md={6} className="mx-auto mt-2 pt-2">
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="fw-semibold">Email address :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formGroupPassword"
              >
                <Form.Label className="fw-semibold">Password :</Form.Label>
                <Form.Control
                  type={!toggle ? "password" : "text"}
                  placeholder="******"
                  name="password"
                  onChange={handleChange}
                />
                <div className="text-end" onClick={() => setToggle(!toggle)}>
                  {!toggle ? "Show" : "Hide"}
                </div>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={loginUser}
                >
                  Login
                </Button>
              </div>
              <p className="text-center my-1">
                Don't have an account? Please
                <Link to={`/register`} className="mx-1">
                  Register Now
                </Link>
              </p>
            </Form>

            {/* react toastify */}
            <ToastContainer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
