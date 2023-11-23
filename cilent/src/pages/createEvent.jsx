import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateEvent = () => {
  const [eventInfo, setEventInfo] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventInfo({ ...eventInfo, [name]: value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    // validation of input field
    if (eventInfo.title === "") {
      toast.warning("Event title is required", {
        position: "top-center",
      });
    } else if (eventInfo.description === "") {
      toast.error("Description is required", {
        position: "top-center",
      });
    } else if (eventInfo.startDate === "") {
      toast.warning("Choose start date", {
        position: "top-center",
      });
    } else if (eventInfo.endDate === "") {
      toast.error("Choose end date", {
        position: "top-center",
      });
    } else if (eventInfo.location === "") {
      toast.error("Write your actual location", {
        position: "top-center",
      });
    } else {
      // api call
      console.log(eventInfo);
    }
  };

  return (
    <>
      <Container className="mb-5">
        <h3 className="text-center my-3">Create An Event</h3>
        <Row>
          <Col xl={6} lg={6} md={6} className="mx-auto">
            <Form>
              <Form.Group className="mb-3" controlId="eventTitle">
                <Form.Label>Event Title :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Write event title"
                  name="title"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="eventDesc">
                <Form.Label>Description Of Event</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="d-flex items-center justify-content-between w-75">
                <Form.Group className="mb-3" controlId="startDate">
                  <Form.Label>Start Date :</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="endDate">
                  <Form.Label>End Date :</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <Form.Group className="mb-3" controlId="location">
                <Form.Label>Location :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Location"
                  name="location"
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="gap-2">
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={registerUser}
                >
                  Create Event
                </Button>
              </div>
            </Form>

            {/* react toastify */}
            <ToastContainer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateEvent;
