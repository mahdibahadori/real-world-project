import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";

export function Contacts() {
  const [contacts, setContacts] = useState([]);

  function fetchedContacts() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }

  useEffect(() => {
    fetchedContacts();
  });

  return (
    <div>
    <h2 style={{textAlign:'center', color:'burlywood'}}>List of Contacts</h2>
    <Row
      style={{
        width: "80%",
        margin: "50px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {contacts.map((contact) => {
        return (
          <Col xs={9} sm={8} md={6} lg={4}>
            <Link to={{ pathname: `/users/${contact.id}`, state: { contact } }}>
              <Card
                style={{
                  marginBottom: "20px",
                  backgroundColor: "lightgray",
                  border: "1px solid cornflowerblue",
                  boxShadow: "2px 3px 7px  gray"
                }}
              >
                <Card.Body>
                  <Card.Title style={{ opacity: "70%", color:"blue" }}>
                    {contact.name}
                  </Card.Title>
                  <hr/>
                  <Card.Text style={{ color: "cornflowerblue" }}>
                    email: {contact.email}
                  </Card.Text>
                  <Card.Text style={{ fontSize: "12px" }}>
                    Contact No: {contact.phone}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      })}
    </Row>
    </div>
  );  
}
