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
    background: ${({ theme }) => theme.text};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.background};
    stroke: ${({ theme }) => theme.background};
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.outlineColor};
  }
`;

export default ButtonSquare;
