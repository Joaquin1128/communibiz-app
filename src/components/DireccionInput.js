import React, { useState } from "react";
import { Form, Button, ListGroup, Row, Col } from "react-bootstrap";
import axios from "axios";
import Mapa from "./Mapa";

const DireccionInput = ({ label, name, value, coords, onChange, setCoordenadas }) => {
  const [direccionValida, setDireccionValida] = useState(null);
  const [sugerencias, setSugerencias] = useState([]);
  const [mensajeError, setMensajeError] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");

  const handleChange = (e) => {
    onChange(e);
    setSugerencias([]);
    setDireccionValida(null);
    setMensajeError("");
    setMensajeExito("");
    setCoordenadas(null);
  };

  const verificarDireccion = async () => {
    try {
      const response = await axios.get(
        "http://servicios.usig.buenosaires.gob.ar/normalizar/",
        {
          params: { direccion: value },
        }
      );
      const direcciones = response.data.direccionesNormalizadas;

      if (direcciones.length === 1 && direcciones[0].tipo === "calle_altura") {
        onChange({ target: { name, value: direcciones[0].direccion } });
        setDireccionValida(true);
        setSugerencias([]);
        setMensajeError("");
        setMensajeExito("Dirección correcta.");
        setCoordenadas(direcciones[0].coordenadas);
      } else if (
        direcciones.length > 1 &&
        direcciones.every((d) => d.tipo === "calle_altura")
      ) {
        setDireccionValida(null);
        setSugerencias(direcciones.slice(0, 5));
        setMensajeError("");
        setMensajeExito("");
        setCoordenadas(null);
      } else {
        setDireccionValida(false);
        setSugerencias([]);
        setMensajeError(
          "Dirección inválida. Por favor, verifica e ingresa una dirección correcta con formato calle y altura."
        );
        setMensajeExito("");
        setCoordenadas(null);
      }
    } catch (error) {
      setDireccionValida(false);
      setSugerencias([]);
      setMensajeError(
        "Error al verificar la dirección. Por favor, intenta nuevamente."
      );
      setMensajeExito("");
      setCoordenadas(null);
    }
  };

  // const handleSuggestionClick = async (e, direccion) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.get(
  //       "http://servicios.usig.buenosaires.gob.ar/normalizar/",
  //       {
  //         params: { direccion },
  //       }
  //     );
  //     const coords = response.data.direccionesNormalizadas[0].coordenadas;
  //     onChange({ target: { name, value: direccion } });
  //     setSugerencias([]);
  //     setDireccionValida(true);
  //     setMensajeError("");
  //     setMensajeExito("Dirección correcta.");
  //     setCoordenadas(coords);
  //   } catch (error) {
  //     setDireccionValida(false);
  //     setSugerencias([]);
  //     setMensajeError(
  //       "Error al obtener las coordenadas de la dirección. Por favor, intenta nuevamente."
  //     );
  //     setMensajeExito("");
  //     setCoordenadas(null);
  //   }
  // };

  return (
    <Form.Group controlId={`form${name}`}>
      <Form.Label>{label}</Form.Label>
      <Row>
        <Col>
          <Form.Control
            type="text"
            name={name}
            value={value}
            onChange={handleChange}
            style={{
              borderColor:
                direccionValida === true
                  ? "green"
                  : direccionValida === false
                  ? "red"
                  : "",
            }}
          />
        </Col>
        <Col xs="auto">
          <Button onClick={verificarDireccion} style={{ marginLeft: "10px" }}>
            Verificar
          </Button>
        </Col>
      </Row>
      {direccionValida === false && (
        <small className="text-danger">{mensajeError}</small>
      )}
      {direccionValida === true && (
        <small className="text-success">{mensajeExito}</small>
      )}
      {sugerencias.length > 0 && (
        <ListGroup>
          {sugerencias.map((sug, index) => (
            <ListGroup.Item
              key={index}
            >
              {sug.direccion}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {direccionValida === true && value && (
        <Mapa x={coords.y} y={coords.x} direccion={value} />
      )}
    </Form.Group>
  );
};

export default DireccionInput;
