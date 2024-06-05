import React from "react";
import { InputGroup, FormControl, Row, Col, Form } from "react-bootstrap";

export const BarraBusqueda = ({
  searchTermColaborador,
  handleSearchColaborador,
  searchTermEmprendimiento,
  handleSearchEmprendimiento,
  searchTermRubro,
  handleSearchRubro
}) => {
  return (
    <Form>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Buscar por colaborador..."
              value={searchTermColaborador}
              onChange={handleSearchColaborador}
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Buscar por emprendimiento..."      
              value={searchTermEmprendimiento}
              onChange={handleSearchEmprendimiento}
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Buscar por rubro..."
              value={searchTermRubro}
              onChange={handleSearchRubro}
            />
          </InputGroup>
        </Col>
      </Row>
    </Form>
  );
};
