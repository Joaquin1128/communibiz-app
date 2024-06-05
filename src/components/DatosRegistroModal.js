import { Modal, Button, Image } from "react-bootstrap";

export const DatosRegistroModal = ({
  formData,
  showModal,
  submit,
  handleModalClose,
  logo,
}) => {
  return (
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles del Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Datos personales</h5>
        <p>Nombre: {formData.colaborador.nombre}</p>
        <p>Teléfono: {formData.colaborador.telefono}</p>
        <p>Correo Electrónico: {formData.colaborador.email}</p>
        {formData.colaborador.direccionVisible && (
          <>
            <p>Dirección Particular: {formData.colaborador.direccion}</p>
          </>
        )}

        <hr className="my-4" />

        <h5>Datos del emprendimiento</h5>
        <p>Nombre: {formData.emprendimiento.nombre}</p>
        <p>Descripción: {formData.emprendimiento.descripcion}</p>
        <p>Rubro: {formData.emprendimiento.rubro}</p>
        <p>Forma de pago: {formData.emprendimiento.formaDePago}</p>

        <hr className="my-4" />

        {formData.emprendimiento.local.direccion &&
          formData.emprendimiento.local.nombre &&
          formData.emprendimiento.local.horario && (
            <>
              <h5>Datos del local</h5>
              <p>Dirección: {formData.emprendimiento.local.direccion}</p>
              <p>Nombre del taller: {formData.emprendimiento.local.nombre}</p>
              <p>Horario del taller: {formData.emprendimiento.local.horario}</p>
            </>
          )}
        {logo && (
          <div style={{ marginLeft: "20px" }}>
            <Image src={logo} alt="Vista previa" thumbnail width="150" />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={submit}>
          Enviar Registro
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
