import React from 'react';
import styled from 'styled-components';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BottomButton = styled.button``;
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Top</TopButton>
        </Top>
        <Bottom>
          <BottomButton>Bottom</BottomButton>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
