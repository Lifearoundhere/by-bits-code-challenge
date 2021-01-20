import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { useAppContext } from "../libs/contextLib";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios"

export default function Login() {
  const { userHasAuthenticated } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      axios({
        method: 'post',
        url: 'https://api.bybits.co.uk/auth/token',
        headers: {
          'environment': 'mock',
          'Content-type': 'application/json'
        },
        data: {
          "username": email,
          "password": password,
          "type": "USER_PASSWORD_AUTH"
        }
      }).then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      });
      userHasAuthenticated(true);
      history.push("/policy");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}