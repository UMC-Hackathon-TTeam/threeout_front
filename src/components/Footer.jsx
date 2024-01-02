import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { IoWarning, IoPerson } from "react-icons/io5";
import { FaRankingStar } from "react-icons/fa6";

const Footer = () => {
  const location = useLocation();

  const isMainPath = /^\/main\b/.test(location.pathname);
  const isDangerPath = /^\/danger\b/.test(location.pathname);
  const isRankingPath = /^\/ranking\b/.test(location.pathname);

  const icons = {
    main: IoPerson,
    danger: IoWarning,
    ranking: FaRankingStar,
  };

  return (
    <NavWrapper>
      <NavLink
        to='/main'
        style={isMainPath ? { color: "#8BDFDC" } : { color: "#666" }}
      >
        <IconWrapper>
          <icons.main style={{ fontSize: "50px" }} />
        </IconWrapper>
      </NavLink>
      <NavLink
        to='/danger'
        style={isDangerPath ? { color: "#8BDFDC" } : { color: "#666" }}
      >
        <IconWrapper>
          <icons.danger style={{ fontSize: "50px" }} />
        </IconWrapper>
      </NavLink>
      <NavLink
        to='/ranking'
        style={isRankingPath ? { color: "#8BDFDC" } : { color: "#666" }}
      >
        <IconWrapper>
          <icons.ranking style={{ fontSize: "50px" }} />
        </IconWrapper>
      </NavLink>
    </NavWrapper>
  );
};

export default Footer;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 530px;
  background: #fff;
  border-top: 0.4px solid #545f71;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 50px;
  height: 50px;
`;
