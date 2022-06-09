import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: #a3320b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: white;
`;

const Announcements = () => {
  return <Container>Free Shipping on Orders Above $100</Container>;
};

export default Announcements;
