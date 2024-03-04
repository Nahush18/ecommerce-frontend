import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url(https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&w=940&h=650&dpr=1)
      center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: '75%' })}
  display: flex;
  flex-direction: column; /* Ensure child elements stack vertically */
  align-items: center; /* Center child elements horizontally */
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin: 0 auto; /* Center-align the button */
`;

const AlreadyHaveAccount = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
          <Agreement>
            By creating account, I consent to the processing of my personal data in accordance with the{' '}
            <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE ACCOUNT</Button>
        </Form>
        <AlreadyHaveAccount>
          Already have an account? <Link to="/login">Login</Link>
        </AlreadyHaveAccount>
        <AlreadyHaveAccount>
          <Link to="/">Back to Home</Link>
        </AlreadyHaveAccount>
      </Wrapper>
    </Container>
  );
};

export default Register;
