import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <h1>Communibizapp</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <h2>¿Buscas un emprendimiento para tus necesidades?</h2>
          <Button as={Link} to="/busqueda" variant="primary">
            Buscar Emprendimiento
          </Button>
        </Col>
        <Col className="text-center">
          <h2>Únete a la máxima comunidad de emprendimientos</h2>
          <Button as={Link} to="/registro" variant="primary">
            Registrarse
          </Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <hr />
        </Col>
      </Row>
    </Container>
  );
};
