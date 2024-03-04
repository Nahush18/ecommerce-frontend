import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 70px;
  background-color: #ffffff;
  border-bottom: 2px solid black;
  ${mobile({ height: "50px" })}
  background-color: #131362;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: #555;
  margin-right: 10px;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 8px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: white;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  height: 50px;
  ${mobile({ height: "40px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  position: relative;

  &:last-child {
    margin-left: 0;
  }

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Button = styled.button`
  border: none;
  height: 40px;
  padding: 10px 20px;
  margin-right: 20px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  &:hover {
    background-color: #0d8e82;
  }

  ${mobile({ padding: "8px 16px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search..." />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo src="data:image/png;base64,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" alt="Logo" />
          </Link>
        </Center>
        <Right>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <MenuItem>
              <Button>REGISTER</Button>
            </MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem>
              <Button>SIGN IN</Button>
            </MenuItem>
          </Link>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <ShoppingCartOutlined />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
