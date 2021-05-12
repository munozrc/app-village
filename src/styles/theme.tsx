import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    background: string;
  }
}

export const lightTheme: DefaultTheme = {
  text: "#181818",
  background: "#fff",
};

export const darkTheme: DefaultTheme = {
  text: "#fff",
  background: "#181818",
};
