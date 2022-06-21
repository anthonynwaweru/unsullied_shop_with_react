import React from 'react';
import styled from 'styled-components';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``;
const ProductList = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
