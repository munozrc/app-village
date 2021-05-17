import styled from "styled-components";
import { SECONDARY_COLOR, WHITE_COLOR } from "../styles/colors";

const ButtonSquare = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background: ${SECONDARY_COLOR};
  }

  & svg {
    fill: ${SECONDARY_COLOR};
    stroke: ${SECONDARY_COLOR};
  }

  &:hover svg {
    fill: ${WHITE_COLOR};
    stroke: ${WHITE_COLOR};
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px ${WHITE_COLOR};
  }
`;

export default ButtonSquare;
