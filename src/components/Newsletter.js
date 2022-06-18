import { Send } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60vh;
  background-color: #001514;
  color: #ffffff;
`;
const Title = styled.h1`
  font-size: 70px;

  margin-bottom: 20px;
`;
const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: 1px solid lightgray;
`;
const Button = styled.button`
  cursor: pointer;
  flex: 1;
  border: none;
  background-color: lightgray;
  color: #001514;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Receive timely updates from some of your favorite products</Desc>
      <InputContainer>
        <Input placeholder="your email address" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
