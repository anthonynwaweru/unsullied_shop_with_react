import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background-color: ${props => props.color};
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>unsullied</Logo>
        <Desc>
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#4267B2">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#F22953">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#c8232c">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="##00acee">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men</ListItem>
          <ListItem>Women</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>My Account</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> 32 Rue Chasseur, Paris, 75024
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +33-(0)781-23-45-67
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: '10px' }} /> info@unsullied.com
        </ContactItem>
        <ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
