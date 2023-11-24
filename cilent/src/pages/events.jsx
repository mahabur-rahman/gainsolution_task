import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventList from "../components/EventList";
import axios from "axios";
import { useLocation } from "react-router";

const Events = () => {
  const [events, setEvents] = useState([]);
   const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const { search } = useLocation();

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get("http://localhost:4000/api/events" + search);
      setEvents(res.data);
    };
    fetchEvents();
  }, [search]);

   // Function to handle search input change
   const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

   // Filter events based on title or description matching the search query
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Container>
        <Row>
          <Col xl={5} md={5} lg={5} sm={5} className="me-auto mt-3">
            <label htmlFor="search" className="fw-semibold mb-2">Search Event : </label>
            <input type="text" placeholder="Search.." className="form-control" value={searchQuery}
              onChange={handleSearchChange} />
          </Col>
        </Row>
      </Container>
      <section className="my-3 py-5 w-full">
        <Container className="mx-auto">
          <Row>
            <EventList events={filteredEvents} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Events;
