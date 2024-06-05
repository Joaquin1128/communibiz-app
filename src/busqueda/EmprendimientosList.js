import React, { useState, useEffect } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import emprendimientosData from "../db/emprendimientos.json";
import { EmprendimientoModal } from "./EmprendimientoModal";
import { BarraBusqueda } from "./BarraBusqueda";
import { FaStar } from "react-icons/fa";

export const EmprendimientosList = () => {
  const [emprendimientos, setEmprendimientos] = useState([]);
  const [selectedEmprendimiento, setSelectedEmprendimiento] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTermColaborador, setSearchTermColaborador] = useState("");
  const [searchTermEmprendimiento, setSearchTermEmprendimiento] = useState("");
  const [searchTermRubro, setSearchTermRubro] = useState("");

  useEffect(() => {
    const sortedData = emprendimientosData.sort((a, b) => b.emprendimiento.esDestacado - a.emprendimiento.esDestacado);
    setEmprendimientos(sortedData);
  }, []);

  const handleShowModal = (emprendimiento) => {
    setSelectedEmprendimiento(emprendimiento);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEmprendimiento(null);
  };

  const handleSearchColaborador = (event) => {
    setSearchTermColaborador(event.target.value);
  };

  const handleSearchEmprendimiento = (event) => {
    setSearchTermEmprendimiento(event.target.value);
  };

  const handleSearchRubro = (event) => {
    setSearchTermRubro(event.target.value);
  };

  const filteredEmprendimientos = emprendimientos.filter((emprendimiento) =>
    emprendimiento.colaborador.toLowerCase().includes(searchTermColaborador.toLowerCase()) &&
    emprendimiento.emprendimiento.nombre.toLowerCase().includes(searchTermEmprendimiento.toLowerCase()) &&
    emprendimiento.emprendimiento.rubro.toLowerCase().includes(searchTermRubro.toLowerCase())
  );

  const displayedEmprendimientos = (searchTermColaborador || searchTermEmprendimiento || searchTermRubro)
    ? filteredEmprendimientos.slice(0, 5)
    : emprendimientos.slice(0, 10);

  return (
    <Row className="justify-content-md-center">
      <Col>
        <h2 className="text-center my-4">Listado de Emprendimientos</h2>
        <BarraBusqueda
          searchTermColaborador={searchTermColaborador}
          handleSearchColaborador={handleSearchColaborador}
          searchTermEmprendimiento={searchTermEmprendimiento}
          handleSearchEmprendimiento={handleSearchEmprendimiento}
          searchTermRubro={searchTermRubro}
          handleSearchRubro={handleSearchRubro}
        />
        <ListGroup>
          {displayedEmprendimientos.map((emprendimiento, index) => (
            <ListGroup.Item
              className="mb-4 rounded border d-flex justify-content-between align-items-center shadow"
              key={index}
              action
              onClick={() => handleShowModal(emprendimiento)}
            >
              <Row className="flex-grow-1">
                <Col xs={4}>
                  <div>
                    <strong>Colaborador: {emprendimiento.colaborador}</strong>
                  </div>
                  <div className="text-muted">
                    Rubro: {emprendimiento.emprendimiento.rubro}
                  </div>
                </Col>
                <Col xs={4} className="text-center">
                  <div>
                    <strong>{emprendimiento.emprendimiento.nombre}</strong>
                  </div>
                  <div className="text-muted">{emprendimiento.emprendimiento.contacto.correoEmprendimiento}</div>
                </Col>
                <Col xs={4} className="text-end">
                  {emprendimiento.emprendimiento.esDestacado && (
                    <Badge bg="warning">
                      <FaStar />
                    </Badge>
                  )}
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <EmprendimientoModal
          show={showModal}
          handleClose={handleCloseModal}
          emprendimiento={selectedEmprendimiento}
        />
      </Col>
    </Row>
  );
};
