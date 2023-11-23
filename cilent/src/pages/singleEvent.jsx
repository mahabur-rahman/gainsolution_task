import { useState } from "react";
import { Card, Col, Badge, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaTrashCan } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";

const SingleEvent = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getSingleEvent = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/events/${id}`);
        setEvent(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getSingleEvent();
  }, [id]);

  const {
    title,
    description,
    startDate,
    endDate,
    username,
    location,
    categories,
    createdAt,
    photo,
  } = event;

  return (
    <>
      <Container>
        <Row>
          <Col xl={12} lg={10} md={7} className="my-2 mx-auto">
            <Card>
              {photo && (
                <img
                  style={{ maxHeight: "250px" }}
                  className="postImg object-fit-cover"
                  src={photo}
                  alt={title}
                />
              )}
              <div className="d-flex align-items-center justify-content-between p-3 text-info">
                <div>Author: {username}</div>
                <div>
                  {/* actions */}
                  <div className="text-danger mb-3">
                    <span className="text-warning mx-3">
                      <MdOutlineEdit style={{ fontSize: "1.5rem", cursor:'pointer' }} />
                    </span>
                    <span>
                      <FaTrashCan style={{ fontSize: "1.2rem", cursor:'pointer'  }} />
                    </span>
                  </div>
                  {new Date(createdAt).toDateString()}
                </div>
              </div>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>
                  Location: <span className="text-success">{location}</span>
                </Card.Text>
              </Card.Body>
              <div className="text-end py-2">
                <Badge pill bg="light" text="dark">
                  <div className="text-secondary text-lg">
                    Start Date: {startDate}
                  </div>
                </Badge>
                <Badge pill bg="light" text="dark">
                  <div className="text-secondary text-sm">
                    End Date: {endDate}
                  </div>
                </Badge>
              </div>
              <div className="text-end text-bg-secondary cursor-pointer py-1">
                {categories?.map((cat) => (
                  <span className="mx-1" key={cat._id}>
                    Event category : {cat}
                  </span>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleEvent;
