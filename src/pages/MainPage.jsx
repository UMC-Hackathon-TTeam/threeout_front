import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../styles/Common";

export default function MainPage() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/auth/login");
  };

  return (
    <Button
      color='white'
      backgroun
      onClick={goToLogin}
    >
      시작하기
    </Button>
  );
}
