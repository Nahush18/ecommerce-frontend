import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0GRhgHWSkyLlDfiy_ty8s_WdcivBKb9dVblbmseq9g&s") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({width:"75%"})}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center child elements horizontally */
  justify-content: center; /* Center child elements vertically */
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          SIGN IN
        </Title>
        <Form>
          <Input placeholder="Username"/>
          <Input placeholder="Password"/>
          <Button>LOGIN</Button>
          <StyledLink to="/forgot-password">Forgot Password?</StyledLink>
          {/* Link to Forgot Password Page */}
          <StyledLink to="/register">Create an account</StyledLink>
          {/* Link to Register Page */}
        </Form>
        <StyledLink to="/">Back to Home</StyledLink>
        {/* Link to Home Page */}
      </Wrapper>
    </Container>
  )
}

export default Login;
