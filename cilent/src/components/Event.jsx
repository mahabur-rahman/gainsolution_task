/* eslint-disable react/prop-types */
import { Card, Col } from "react-bootstrap";

const Event = ({event}) => {
  return (
    <>
      <Col xl={4} lg={6} md={4} className="my-2" key={event._id}>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>{event.description}</Card.Text>
            <div className="text-secondary text-lg">Start Date: {event.startDate}</div>
            <div className="text-secondary text-sm">End Date: {event.endDate}</div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Event;
