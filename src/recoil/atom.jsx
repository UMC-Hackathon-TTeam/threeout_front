import { atom } from "recoil";

export const emotionState = atom({
  key: "emotion",
  default: null,
});

export const emailState = atom({
  key: "email",
  default: null,
});

export const passwordState = atom({
  key: "password",
  default: null,
});
