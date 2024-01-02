import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Common";

export default function MainPage() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/auth/login");
  };

  return (
    <Button color="#71CACC" onClick={goToLogin}>
      시작하기
    </Button>
  );
}
