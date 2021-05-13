import styled from "styled-components";
import { IoSearch, IoInvertMode } from "react-icons/io5";
import SimpleContainer from "./SimpleContainer";

type HeaderProps = {
  toggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Header({ toggleTheme }: HeaderProps) {
  return (
    <Container>
      <Logo>SOFTLINK</Logo>
      <SimpleContainer gap={"5px"}>
        <Button>
          <IoSearch size={"1.5em"} />
        </Button>
        <Button onClick={toggleTheme}>
          <IoInvertMode size={"1.5em"} />
        </Button>
      </SimpleContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  background: ${({ theme }) => theme.background};
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

const Logo = styled.button`
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  font-size: 1.5em;
  font-weight: 700;
  padding: 6px 15px;
  cursor: pointer;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.outlineColor};
  }
`;
