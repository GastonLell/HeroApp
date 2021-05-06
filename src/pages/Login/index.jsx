//HOOKS
import { useHistory } from "react-router-dom";
import { useState } from "react";

//API AUTH
import auth from "../../service/auth/auth";

//COMPONENTES BOOTSTRAP
import { Container, Form, Button, Alert } from "react-bootstrap";

const Login = () => {
  let history = useHistory();

  const [alert, setAlert] = useState({
    message: "",
    color: "",
  });

  function handleChangueForm(event) {
    event.preventDefault();

    const data = {
      email: event.currentTarget.email.value.trim(),
      password: event.currentTarget.password.value.trim(),
    };

    if (!data.email || !data.password) {
      setAlert({
        message: "Disculpe, se necesita completar ambos campos",
        color: "danger",
      });
      return
    }

    auth
      .signUp(data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);

        history.push("/");
      })
      .catch((err) => {
        setAlert({
          message: "El usuario ingresado no esta registrado",
          color: "danger"
        });
      });
  }

  return (
    <Container>
      <h1 className="my-3 ">Bienvenido a Hero App!!</h1>

      <Form onSubmit={handleChangueForm} className="w-75 my-5 mx-auto">

        <Form.Group>

          <Form.Control
            name="email"
            type="email"
            placeholder="Ingrese su email"
          />

        </Form.Group>

        <Form.Group>

          <Form.Control
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
          />

        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
      {!!alert.message && <Alert className="w-50 mx-auto" variant={alert.color}>{alert.message}</Alert>}
    </Container>
  );
};
export default Login;
