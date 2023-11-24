import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import EventList from "../components/EventList";
import axios from "axios";
import { useLocation } from "react-router";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const { search } = useLocation();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/events" + search
        );
        setEvents(res.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, [search]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearDate = () => {
    setSelectedDate("");
  };

  const filteredEventsByQuery = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredEventsByDate = selectedDate
    ? filteredEventsByQuery.filter((event) => {
        const eventStartDate = new Date(event.startDate);
        const eventEndDate = new Date(event.endDate);
        const selectedDateFormat = new Date(selectedDate);

        return (
          selectedDateFormat >= eventStartDate &&
          selectedDateFormat <= eventEndDate
        );
      })
    : filteredEventsByQuery;

  return (
    <>
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <div className="mt-3">
            <label htmlFor="search" className="fw-semibold mb-2">
              Search Event:
            </label>
            <input
              type="text"
              placeholder="Title or description or location..."
              style={{width: '300px'}}
              className="form-control"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="search" className="fw-semibold mb-2">
              Search Event By Date:
            </label>
            <div className="d-flex align-items-center">
              <input
                type="date"
                placeholder="Search.."
                className="form-control me-2"
                style={{ width: "200px" }}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              {selectedDate && (
                <button
                  className="btn btn-link text-danger"
                  onClick={handleClearDate}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
      <section className="my-3 py-5 w-full">
        <Container className="mx-auto">
          <Row>
            <EventList events={filteredEventsByDate} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Events;
