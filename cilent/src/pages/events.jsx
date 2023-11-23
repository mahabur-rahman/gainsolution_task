import { useEffect, useState } from "react";
import {  Container, Row } from "react-bootstrap";
import EventList from "../components/EventList";
import axios from 'axios'
import { useLocation } from "react-router";

const Events = () => {
  const [events, setEvents] = useState([])
  const {search} = useLocation();

  useEffect(() =>{
    const fetchEvents = async() =>{
      const res = await axios.get('http://localhost:4000/api/events'+search)
      setEvents(res.data)
    }
    fetchEvents()
  },[search])
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
