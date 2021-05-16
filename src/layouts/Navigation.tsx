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

export default function Navigation({ toggleTheme }: HeaderProps) {
  return (
    <Container>
      <Wrapper>
        <Logo>SOFTLINK</Logo>
        <SimpleContainer>
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
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  background: #ffc93c;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

const Logo = styled.h1`
  font-size: 25px;
  font-weight: 700;
  border-bottom: 4px solid #23272a;
  color: #23272a;
`;

const ButtonLink = styled.button`
  background: transparent;
  height: 41px;
  padding: 10px 20px;
  border: none;
  color: #23272a;
  font-size: 1em;
  font-weight: normal;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background: #23272a;
    color: #fafafa;
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px #fafafa;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;
