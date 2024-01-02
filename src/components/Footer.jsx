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
        className={location.pathname.startsWith === "/main" ? "active" : ""}
      >
        <IconWrapper
          src={Main}
          alt='main'
        />
      </NavLink>
      <NavLink
        to='/Danger'
        className={location.pathname.startsWith === "/Danger/" ? "active" : ""}
      >
        <IconWrapper
          src={danger}
          alt='danger'
        />
      </NavLink>
      <NavLink
        to='/Ranking'
        className={location.pathname.startsWith === "/Ranking/" ? "active" : ""}
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
  justify-content: space-between;
  position: fixed;
  bottom: 30px;
  left: 5px;
  max-width: 530px;
  background: #fff;
`;

const IconWrapper = styled.img`
  display: flex;
  margin: 20px 60px 0px 30px;
  text-decoration: none;
  filter: ${({ active }) =>
    active
      ? "invert(84%) sepia(46%) saturate(291%) hue-rotate(121deg) brightness(91%) contrast(94%)"
      : "invert(43%) sepia(1%) saturate(0%) hue-rotate(137deg) brightness(91%) contrast(90%)"};
  width: 50px;
  height: 50px;
`;
