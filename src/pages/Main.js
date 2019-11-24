import React, { useEffect, useState } from 'react';
import api from '../services/api';

import { Title, Container, Message } from './styles';

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
    <Container>
      <header>
        <h2>Single Room Chat with adonis websocket api and React</h2>
      </header>
      <ul>
        {messages.map(msg => (
          <div key={msg.id}>
            <Title>{msg.name}</Title>
            <Message defaultValue={msg.message} />
          </div>
        ))}
      </ul>
    </Container>
  );
}
