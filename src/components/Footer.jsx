import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Ranking from "../assets/ranking.png";
import Main from "../assets/peoples.png";
import danger from "../assets/Error.png";

const Footer = () => {
  const location = useLocation();

  return (
    <Navwrapper>
      <NavLink
        to='/'
        className={location.pathname.startsWith === `/main` ? "active" : ""}
      >
        <IconWrapper
          src={Main}
          alt='main'
        />
      </NavLink>
      <NavLink
        to='/Danger'
        className={location.pathname.startsWith === `/Danger/*` ? "active" : ""}
      >
        <IconWrapper
          src={danger}
          alt='danger'
        />
      </NavLink>
      <NavLink
        to='/Ranking'
        className={
          location.pathname.startsWith === `/Ranking/*` ? "active" : ""
        }
      >
        <IconWrapper
          src={Ranking}
          alt='ranking'
        />
      </NavLink>
    </Navwrapper>
  );
};

export default Footer;

const Navwrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 30px;
  left: 30px;
  max-width: 530px;
  left: 0;
  background: #fff;
`;

const IconWrapper = styled.img`
  display: flex;
  margin: 20px 60px 0px 30px;
  text-decoration: none;
  color: #666666;
  width: 50px;
  height: 50px;

  &.active {
    color: #8bdfdc;
  }
`;
