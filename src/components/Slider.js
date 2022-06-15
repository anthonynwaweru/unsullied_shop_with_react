import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import styled from 'styled-components';
import photo1 from '../images/julia-rekamie-Z72YujnOrlY-unsplash.jpg';
import photo2 from '../images/pexels-алекке-блажин-7700181.jpg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  // background-color: #001514;
  position: relative;
  // overflow: hidden;
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
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${props => props.slide * -100}vw);
`;
const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: ${props => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  object-fit: contain;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  text-align: Justified;
`;
const Title = styled.h1`
  color: white;
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  color: white;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: white;
  border: 1px solid;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slide={slideIndex}>
        <Slide bg="#001514">
          <ImgContainer>
            <Image src={photo1} />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>Don't compromise on your gym style this summer</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="#A3320B">
          <ImgContainer>
            <Image src={photo2} />
          </ImgContainer>
          <InfoContainer>
            <Title>Spring SALE</Title>
            <Desc>Don't compromise on your gym style this spring</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
