import { useEffect, useState } from "react";
import {  Container, Row } from "react-bootstrap";
import EventList from "../components/EventList";
import axios from 'axios'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() =>{
    const fetchEvents = async() =>{
      const res = await axios.get('http://localhost:4000/api/events')
      setEvents(res.data)
    }
    fetchEvents()
  },[])
  return (
    <>
    <h2>Search here: </h2>
      <section className="my-3 py-5 w-full">
        <Container className="mx-auto">
          <Row>
            <EventList events={events} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Events;
