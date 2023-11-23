/* eslint-disable react/prop-types */
import { Card, Col, Badge } from "react-bootstrap";

const Event = ({ event }) => {
  return (
    <>
      <Col xl={4} lg={6} md={4} className="my-2" key={event._id}>
        <Card style={{minHeight: "220px"}}>
            {event.photo && (
          <img className="postImg" src={event.photo} alt={event.title} />

            )}
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>{event.description}</Card.Text>
            <Badge pill bg="light" text="dark">
              <div className="text-secondary text-lg">
                Start Date: {event.startDate}
              </div>
            </Badge>
            <Badge pill bg="light" text="dark">
              <div className="text-secondary text-sm">
                End Date: {event.endDate}
              </div>
            </Badge>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Event;
