import React from "react";
import { Modal, Button } from "react-bootstrap";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Mapa from "../components/Mapa";

export const EmprendimientoModal = ({ show, handleClose, emprendimiento }) => {
  if (!emprendimiento) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{emprendimiento.emprendimiento.nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Rubro:</strong> {emprendimiento.emprendimiento.rubro}
        </p>
        <p>
          <strong>Descripción:</strong>{" "}
          {emprendimiento.emprendimiento.descripcion}
        </p>
        <p>
          <strong>Horarios:</strong>{" "}
          {emprendimiento.emprendimiento.local.horarios}
        </p>
        <p>
          <strong>Ubicación:</strong>{" "}
          {emprendimiento.emprendimiento.local.ubicacion.dirEmprendimiento}
        </p>
        <p>
          <strong>Contacto:</strong>
        </p>
        <p>
          <>
            <IoMdMail style={{ fontSize: "1.8em", marginRight: "0.5em" }} />
            {emprendimiento.emprendimiento.contacto.correoEmprendimiento}
          </>
        </p>
        <p>
          {emprendimiento.emprendimiento.contacto.telEmprendimiento && (
            <>
              <FaWhatsapp style={{ fontSize: "1.8em", marginRight: "0.5em" }} />
              {emprendimiento.emprendimiento.contacto.telEmprendimiento}
            </>
          )}
        </p>
        <p>
          {emprendimiento.emprendimiento.contacto.facebook && (
            <>
              <TiSocialFacebook
                style={{ fontSize: "1.8em", marginRight: "0.5em" }}
              />
              {emprendimiento.emprendimiento.contacto.facebook}
            </>
          )}
        </p>
        <p>
          {emprendimiento.emprendimiento.contacto.instagram && (
            <>
              <TiSocialInstagram
                style={{ fontSize: "1.8em", marginRight: "0.5em" }}
              />
              {emprendimiento.emprendimiento.contacto.instagram}
            </>
          )}
        </p>
        {emprendimiento.emprendimiento.local.ubicacion.ubicacionVisible && (
          <>
            <h5>Veni a Conocernos!!!</h5>
            <Mapa
              x={emprendimiento.emprendimiento.local.ubicacion.corX}
              y={emprendimiento.emprendimiento.local.ubicacion.corY}
              direccion={emprendimiento.emprendimiento.nombre}
            />
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
