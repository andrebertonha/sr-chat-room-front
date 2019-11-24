import styled from 'styled-components';

export const Container = styled.div`
  max-width: 660px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      font-family: 'Roboto', sans-serif;
      color: #fff;
      font-size: 20px;
      font-weight: normal;
    }
  }

  img {
    width: 660px;
    height: 220px;
    margin-top: 50px;
  }

  span {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    margin-top: 5px;
  }
`;

export const Title = styled.h3`
  font-size: 16;
  color: #999;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Message = styled.textarea`
  border: 0;
  overflow: auto;
  outline: none;
`;
