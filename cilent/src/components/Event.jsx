/* eslint-disable react/prop-types */
import { Card, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
  return (
    <>
      <Col xl={4} lg={6} md={4} className="my-2" key={event._id}>
        <Card style={{ minHeight: "220px" }}>
          {event.photo && (
            <img className="postImg" src={event.photo} alt={event.title} />
          )}
          <Link to={`/event/${event._id}`} style={{ color: "inherit" }}>
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>{event.description}</Card.Text>
              <Card.Text>
                Location: <span className="text-success">{event.location}</span>
              </Card.Text>
            </Card.Body>
          </Link>
          <div className="text-end py-2">
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
          </div>
          <div className="text-end text-bg-secondary cursor-pointer py-1">
            {event.categories.map((cat) => (
              <span className="mx-1" key={cat._id}>
                {cat}
              </span>
            ))}
          </div>
        </Card>
      </Col>
    </>
  );
};

export default Event;
