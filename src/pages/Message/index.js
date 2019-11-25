import React, { useState } from 'react';

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
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // messages list
  const [messages, setMessages] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    // create route in api to get room id
    const id = 7;

    // msg to store
    const { data: msg } = await api.post(`/rooms/${id}`, {
      name,
      message,
    });

    setMessages({ messages: [...messages, msg], message: '' });
  }

  return (
    <Container className="App">
      <Form className="form" onSubmit={handleSubmit}>
        <Col>
          <FormGroup>
            <Label>Nome</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="seu nome"
              onChange={e => setName(e.target.value)}
              value={name}
            />
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
              onChange={e => setMessage(e.target.value)}
              value={message}
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
