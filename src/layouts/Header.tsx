import styled from "styled-components";

// Components
import SimpleContainer from "./SimpleContainer";
import ButtonSquare from "../components/ButtonSquare";

// Assets
import { IoSearch } from "react-icons/io5";
import { ImSun } from "react-icons/im";

type HeaderProps = {
  toggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Header({ toggleTheme }: HeaderProps) {
  return (
    <Container>
      <Logo>SOFTLINK</Logo>
      <SimpleContainer gap={"20px"}>
        <ButtonLink>Programas</ButtonLink>
        <ButtonLink>Archivos</ButtonLink>
        <ButtonLink>Juegos</ButtonLink>
      </SimpleContainer>
      <SimpleContainer gap={"5px"}>
        <ButtonSquare>
          <IoSearch size={"22px"} />
        </ButtonSquare>
        <ButtonSquare onClick={toggleTheme}>
          <ImSun size={"22px"} />
        </ButtonSquare>
      </SimpleContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.h1`
  font-size: 25px;
  font-weight: 700;
  border-bottom: 4px solid ${({ theme }) => theme.text};
`;

const ButtonLink = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  font-weight: normal;

  @media (max-width: 600px) {
    display: none;
  }
`;
