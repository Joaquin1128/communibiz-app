import { useState } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import DireccionInput from "../components/DireccionInput";
import { DatosRegistroModal } from "../components/DatosRegistroModal";

import "bootstrap/dist/css/bootstrap.min.css";

const formasDePago = [
  "Efectivo",
  "Tarjeta de crédito",
  "Tarjeta de débito",
  "Transferencia bancaria",
];
const rubros = [
  "Tecnología",
  "Gastronomía",
  "Moda",
  "Salud y bienestar",
  "Educación",
  "Arte y diseño",
  "Deportes",
  "Medio ambiente",
  "Finanzas",
  "Transporte",
];

const initialState = {
  colaborador: {
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
    coordenadas: null,
    direccionVisible: false,
  },
  emprendimiento: {
    nombre: "",
    descripcion: "",
    rubro: "",
    formaDePago: "",
    local: {
      nombre: "",
      direccion: "",
      horario: "",
      coordenadas: null,
    },
  },
};

export const Registro = ({ history }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    const [section, field, subfield] = name.split(".");

    if (subfield) {
      setFormData((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [field]: {
            ...prevState[section][field],
            [subfield]: newValue,
          },
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [field]: newValue,
        },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const submitForm = () => {
    setShowModal(false);
    Swal.fire(
      "¡Registro exitoso!",
      "Tu información ha sido enviada correctamente.",
      "success"
    );
    setFormData(initialState);
    navigate("/");
  };

  const isFormValid = () => {
    // Verifica si todos los campos obligatorios están llenos
    const { colaborador, emprendimiento } = formData;
    return (
      colaborador.nombre &&
      colaborador.telefono &&
      colaborador.email &&
      emprendimiento.nombre &&
      emprendimiento.descripcion &&
      emprendimiento.rubro &&
      emprendimiento.formaDePago
    );
  };

  return (
    <Row className="justify-content-center">
      <Col>
        <Form onSubmit={handleSubmit}>
          <h2 className="text-center my-4">Ingrese sus datos personales</h2>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              autoComplete="off"
              type="text"
              name="colaborador.nombre"
              value={formData.colaborador.nombre}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formTelefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              autoComplete="off"
              type="tel"
              name="colaborador.telefono"
              value={formData.colaborador.telefono}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              autoComplete="off"
              type="email"
              name="colaborador.email"
              value={formData.colaborador.email}
              onChange={handleChange}
            />
          </Form.Group>
          <DireccionInput
            label="Dirección Particular"
            name="colaborador.direccion"
            autoComplete="off"
            value={formData.colaborador.direccion}
            coords={formData.colaborador.coordenadas}
            onChange={handleChange}
            setCoordenadas={(coords) =>
              setFormData((prevState) => ({
                ...prevState,
                colaborador: {
                  ...prevState.colaborador,
                  coordenadas: coords,
                },
              }))
            }
          />
          <Form.Check
            type="checkbox"
            label="Mostrar dirección y mapa"
            name="colaborador.direccionVisible"
            checked={formData.colaborador.direccionVisible}
            onChange={handleChange}
          />
          <hr className="my-4" />
          <h2 className="text-center my-4">Datos del emprendimiento</h2>
          <Form.Group controlId="formNombreEmprendimiento">
            <Form.Label>Nombre del emprendimiento</Form.Label>
            <Form.Control
              autoComplete="off"
              type="text"
              name="emprendimiento.nombre"
              value={formData.emprendimiento.nombre}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formDescripcionEmprendimiento">
            <Form.Label>Descripción del emprendimiento</Form.Label>
            <Form.Control
              autoComplete="off"
              as="textarea"
              rows={3}
              name="emprendimiento.descripcion"
              value={formData.emprendimiento.descripcion}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formRubroEmprendimiento">
            <Form.Label>Rubro del emprendimiento</Form.Label>
            <Form.Select
              name="emprendimiento.rubro"
              value={formData.emprendimiento.rubro}
              onChange={handleChange}
            >
              <option value="">Selecciona un rubro</option>
              {rubros.map((rubro, index) => (
                <option key={index} value={rubro}>
                  {rubro}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="formFormaPago">
            <Form.Label>Forma de pago</Form.Label>
            <Form.Select
              name="emprendimiento.formaDePago"
              value={formData.emprendimiento.formaDePago}
              onChange={handleChange}
            >
              <option value="">Selecciona una forma de pago</option>
              {formasDePago.map((pago, index) => (
                <option key={index} value={pago}>
                  {pago}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <DireccionInput
            autoComplete="off"
            label="Dirección del Emprendimiento"
            name="emprendimiento.local.direccion"
            value={formData.emprendimiento.local.direccion}
            coords={formData.emprendimiento.local.coordenadas}
            onChange={handleChange}
            setCoordenadas={(coords) =>
              setFormData((prevState) => ({
                ...prevState,
                emprendimiento: {
                  ...prevState.emprendimiento,
                  local: {
                    ...prevState.emprendimiento.local,
                    coordenadas: coords,
                  },
                },
              }))
            }
          />
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Subir logo</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>
            {image && (
              <div style={{ marginLeft: "20px" }}>
                <Image src={image} alt="Vista previa" thumbnail width="150" />
              </div>
            )}
          </div>
          <hr className="my-4" />
          <h2 className="text-center my-4">Datos del taller</h2>
          <Form.Group controlId="formNombreTaller">
            <Form.Label>Nombre del taller</Form.Label>
            <Form.Control
              autoComplete="off"
              type="text"
              name="emprendimiento.local.nombre"
              value={formData.emprendimiento.local.nombre}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formHorarioTaller">
            <Form.Label>Horario del taller</Form.Label>
            <Form.Control
              autoComplete="off"
              type="text"
              name="emprendimiento.local.horario"
              pattern="^(0[0-9]|1[0-9]|2[0-3])\s?-\s?(0[0-9]|1[0-9]|2[0-3])$"
              value={formData.emprendimiento.local.horario}
              onChange={handleChange}
            />
            <span style={{ color: "gray", fontSize: "12px" }}>
              Formato: HH - HH (horas en formato militar, ej: 08 - 18)
            </span>
          </Form.Group>
          <div className="d-grid gap-2 mb-4">
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "20px" }}
              disabled={!isFormValid()} // Deshabilita el botón si el formulario no es válido
            >
              Enviar
            </Button>
          </div>
        </Form>
      </Col>
      {showModal && (
        <DatosRegistroModal
          formData={formData}
          showModal={showModal}
          handleModalClose={handleModalClose}
          submit={submitForm}
          logo={image}
        />
      )}
    </Row>
  );
};
