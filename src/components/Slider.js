import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import photo1 from '../images/julia-rekamie-Z72YujnOrlY-unsplash.jpg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #001514;
  position: relative;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;
const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src={photo1} />
          </ImgContainer>
          <InfoContainer></InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
