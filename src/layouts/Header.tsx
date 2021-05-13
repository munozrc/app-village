import styled from "styled-components";

// Components
import SimpleContainer from "./SimpleContainer";
import ButtonSquare from "../components/ButtonSquare";

// Assets
import { IoSearch, IoInvertMode } from "react-icons/io5";

type HeaderProps = {
  toggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Header({ toggleTheme }: HeaderProps) {
  return (
    <Container>
      <Logo>SOFTLINK</Logo>
      <SimpleContainer gap={"5px"}>
        <ButtonSquare>
          <IoSearch size={"1.5em"} />
        </ButtonSquare>
        <ButtonSquare onClick={toggleTheme}>
          <IoInvertMode size={"1.5em"} />
        </ButtonSquare>
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
