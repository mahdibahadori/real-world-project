import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

export function Contact() {
  const location = useLocation();
  const contact = location.state.contact;
  console.log(contact);

  return (
    <Row
      style={{ display: "flex", justifyContent: "center", margin: "50px auto" }}
    >
      <Col xs={10} sm={10} md={8} lg={6} style={{ textAlign: "center" }}>
        <Container
          style={{
            width: "100%",
            padding: "20px",
            marginBottom: "20px",
            backgroundColor: "lightgray",
            boxShadow: "2px 3px 7px gray",
            borderRadius: "20px",
            textAlign: "start",
          }}
        >
          <h3 style={{ color: "crimson", marginBottom: "20px" }}>
            {contact.name}
          </h3>
          <hr />
          <p>
            Email:<span style={{ color: "green" }}> {contact.email}</span>{" "}
          </p>
          <p>
            Contact:<span style={{ color: "green" }}> {contact.phone}</span>
          </p>
          <p>
            Address:
            <span style={{ color: "green" }}>
              {`${contact.address.city}, 
                 ${contact.address.street}, 
                 ${contact.address.suite},
                 ${contact.address.zipcode}`}
            </span>
          </p>
          <p>
            Company:
            <span style={{ color: "green" }}> {contact.company.name}</span>
          </p>
        </Container>
        <Link to={"/"} style={{fontFamily:'cursive'}}>back to contacts</Link>
      </Col>
    </Row>
  );
}
