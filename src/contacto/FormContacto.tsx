import { Button, Form, InputGroup, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import * as formik from "formik";
const { Formik } = formik;
import * as yup from "yup";

const schema = yup.object().shape({
  nombre: yup.string().required("Por favor ingrese el nombre"),
  asunto: yup.string().required("Por favor ingrese el asunto"),
  email: yup
    .string()
    .email("Email inválido")
    .required("Por favor ingrese el email"),
  mensaje: yup.string().required("Por favor ingrese el mensaje"),
});

interface DatosEmail {
  nombre: string;
  asunto: string;
  email: string;
  mensaje: string;
}

type ServerState = {
  ok: boolean;
  msg: string;
};
export default function FormContacto() {
  const [serverState, setServerState] = useState<ServerState>();
  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({ ok, msg });
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnSubmit = (values: DatosEmail, actions: any) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/mbjvlrzd",
      data: values,
    })
      .then(() => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(
          true,
          "Hemos enviado su formulario, lo revisaremos a la brevedad."
        );
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleOnSubmit}
      initialValues={{
        nombre: "",
        asunto: "",
        email: "",
        mensaje: "",
      }}
    >
      {({
        isSubmitting,
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} method="POST">
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
                isValid={touched.nombre && !errors.nombre}
                isInvalid={!!errors.nombre}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.nombre}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Asunto</Form.Label>
              <Form.Control
                type="text"
                name="asunto"
                value={values.asunto}
                onChange={handleChange}
                isValid={touched.asunto && !errors.asunto}
                isInvalid={!!errors.asunto}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {errors.asunto}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row style={{ marginBottom: "1.5em" }}>
            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={7}
                type="text"
                placeholder=""
                name="mensaje"
                value={values.mensaje}
                onChange={handleChange}
                isInvalid={!!errors.mensaje}
              />

              <Form.Control.Feedback type="invalid">
                {errors.mensaje}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button disabled={isSubmitting} type="submit">
            Enviar formulario
          </Button>
          {serverState && (
            <p
              style={{
                margin: "1em 0",
                color: serverState.ok ? "auto" : "red",
              }}
            >
              {serverState.msg}
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
}
