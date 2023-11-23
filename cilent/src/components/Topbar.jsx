import { Container, Navbar, Dropdown } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import logo from "../images/mainLogo.webp";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

const Topbar = () => {
  const {currentUser} = useSelector(state => state.user)
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Link to="/" className="text-black">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text >
              <Link to={`/`} className=" mx-4">
                Events
              </Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to={`/register`}>
                Register
              </Link>
            </Navbar.Text>
            <Navbar.Text className="mx-3">
              <Link to={`/login`} >
                Login
              </Link>
            </Navbar.Text>

            {currentUser && (
              <Navbar.Text>
                <Link to={`/create-event`} >
                  Create Event
                </Link>
              </Navbar.Text>
            )}

            {currentUser && (
              <Navbar.Text className="mx-3">
                <Dropdown>
                  <Dropdown.Toggle variant="light">
                    <FaUserAlt />
                    <span className="mx-2 text-capitalize"> {currentUser.username} </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <div className="logout_btn bg-transparent border-0 text-danger">Logout</div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
