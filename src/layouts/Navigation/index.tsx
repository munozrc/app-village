// Components
import SimpleContainer from "../SimpleContainer";
import ButtonSquare from "../../components/ButtonSquare";
import {
  ButtonLink,
  Container,
  Logo,
  ContainerCenter,
} from "./NavigationElements";

// Assets
import { IoSearch } from "react-icons/io5";
import { ImSun } from "react-icons/im";

type HeaderProps = {
  toggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Navigation({ toggleTheme }: HeaderProps) {
  return (
    <Container>
      <ContainerCenter>
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
      </ContainerCenter>
    </Container>
  );
}
