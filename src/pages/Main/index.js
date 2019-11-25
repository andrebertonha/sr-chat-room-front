import React, { useEffect, useState } from 'react';
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import api from '../../services/api';

export default function Main() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadMessages() {
      const response = await api.get('messages');
      const { data } = response;
      setMessages(data);
    }
    loadMessages();
  }, []);

  return (
    <Container className="App">
      <Form className="form">
        {messages.map(msg => (
          <div key={msg.id}>
            <Col>
              <FormGroup>
                <Label>{msg.name}</Label>
                <Input
                  defaultValue={msg.message}
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="sua mensagem"
                />
              </FormGroup>
            </Col>
          </div>
        ))}
      </Form>
    </Container>
  );
}
