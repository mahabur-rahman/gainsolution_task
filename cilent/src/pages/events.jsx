import { Card, Container, Row, Col } from "react-bootstrap";

const Events = () => {
  return (
    <>
      <section className="my-5 py-5 w-full">
        <Container className="mx-auto">
          <Row>
            <Col xl={4} lg={6} md={4} className="my-2">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={4} lg={6} md={4} className="my-2">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={4} lg={6} md={4} className="my-2">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4} lg={6} md={4} className="my-2">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={4} lg={6} md={4} className="my-2">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Events;
