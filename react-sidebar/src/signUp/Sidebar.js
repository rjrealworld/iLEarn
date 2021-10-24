import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Input from "./Input";

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          i<span>LE</span>arn
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
        <Input placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confrim Password" />
        <button>Sign Up</button>
      </Form>
      <div>
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </div>
    </Container>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #09090c;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #09090c;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }

  h3 {
    color: #09090c;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #fff;
    font-weight: 400;
    font-size: 21px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: #09090c78;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #fff;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #a4b2bc;
      cursor: pointer;
    }

    span:hover {
      color: #FFF3D2;
      font-weight: 600;
      text-decoration: underline;
    }
  }
`;

export default Sidebar;
