import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  // password show/hide state
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    // validation of input field
    if (userInfo.name === "") {
      toast.warning("Name is required", {
        position: "top-center",
      });
    } else if (userInfo.email === "") {
      toast.error("Email is required", {
        position: "top-center",
      });
    } else if (!userInfo.email.includes("@")) {
      toast.warning("Includes @ in your email", {
        position: "top-center",
      });
    } else if (userInfo.password === "") {
      toast.error("Password is required", {
        position: "top-center",
      });
    } else {
      // api call
      console.log(userInfo)
    }
  };

  return (
    <>
      <Container className="mb-5">
        <h3 className="text-center mt-3">User Registration</h3>
        <Row>
          <Col xl={6} lg={6} md={6} className="mx-auto mt-2 pt-2">
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="fw-semibold">Name :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your name"
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="fw-semibold">Email :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label className="fw-semibold">Password :</Form.Label>
                <Form.Control
                  type={!toggle ? "password" : "text"}
                  placeholder="******"
                  name="password"
                  onChange={handleChange}
                />
                <div
                  className="text-end cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                >
                  {!toggle ? "Show" : "Hide"}
                </div>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={registerUser}
                >
                  Register User
                </Button>
              </div>

              <p className="text-center my-1">
                You have already an account? Please
                <Link to={`/login`} className="mx-1">
                  Login
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

export default Register;
