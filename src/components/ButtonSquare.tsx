import styled from "styled-components";

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
    background: #23272a;
  }

  & svg {
    fill: #23272a;
    stroke: #23272a;
  }

  &:hover svg {
    fill: #fafafa;
    stroke: #fafafa;
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px #fafafa;
  }
`;

export default ButtonSquare;
