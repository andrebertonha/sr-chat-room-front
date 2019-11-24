import React from 'react';

import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

import api from '../../services/api';

export default function Main() {
  async function handleSubmit(data) {
    const id = 7;

    const response = await api
      .post(`rooms/${id}`, {
        name: data.name,
        message: data.message,
      })
      .then(result => {
        console.log(result.data);
        console.log(response);
      });
  }

  return (
    <Container className="App">
      <Form className="form" onSubmit={handleSubmit}>
        <Col>
          <FormGroup>
            <Label>Nome</Label>
            <Input type="text" name="name" id="name" placeholder="seu nome" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="message">Mensagem</Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              placeholder="sua mensagem"
            />
          </FormGroup>
        </Col>
        <Button type="submit" color="success" className="float-right">
          Enviar mensagem
        </Button>
      </Form>
    </Container>
  );
}
