import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Ranking from "../assets/image/ranking.png";
import Main from "../assets/image/peoples.png";
import danger from "../assets/image/Error.png";

const Footer = () => {
  const location = useLocation();

  const isMainPath = /^\/main\b/.test(location.pathname);
  const isDangerPath = /^\/Danger\b/.test(location.pathname);
  const isRankingPath = /^\/ranking\b/.test(location.pathname);

  return (
    <Navwrapper>
      <NavLink
        to='/main'
        style={isMainPath ? { color: "#8BDFDC" } : { color: "#666" }}
      >
        <IconWrapper
          src={Main}
          alt='main'
        />
      </NavLink>
      <NavLink
        to='/Danger'
        style={isDangerPath ? { color: "#8BDFDC" } : { color: "#666" }}
      >
        <IconWrapper
          src={danger}
          alt='danger'
        />
      </NavLink>
      <NavLink
        to='/ranking'
        style={isRankingPath ? { color: "#8BDFDC" } : { color: "#666" }}
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
  position: absolute;
  bottom: 0;
  left: 0px;
  right: 0px;
  max-width: 530px;
  background: #fff;
  border-top: 0.4px solid #545f71;
`;

const IconWrapper = styled.img`
  display: flex;
  margin: 20px 30px 20px 30px;
  text-decoration: none;
  width: 50px;
  height: 50px;
`;
