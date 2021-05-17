import { DefaultTheme } from "styled-components";
import {
  DARK_BG_COLOR,
  LIGHT_BG_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "./colors";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    background: string;
    body: string;
  }
}

export const lightTheme: DefaultTheme = {
  text: SECONDARY_COLOR,
  background: WHITE_COLOR,
  body: LIGHT_BG_COLOR,
};

export const darkTheme: DefaultTheme = {
  text: WHITE_COLOR,
  background: SECONDARY_COLOR,
  body: DARK_BG_COLOR,
};
