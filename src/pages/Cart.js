import React from 'react';
import styled from 'styled-components';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      Cart
      <Footer />
    </Container>
  );
};

export default Cart;
