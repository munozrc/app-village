// Components
import SimpleContainer from "../SimpleContainer";
import {
  ButtonLink,
  Container,
  Logo,
  ContainerCenter,
} from "./NavigationElements";

// Assets
import ProgramIcon from "../../assets/ProgramIcon";
import FileIcon from "../../assets/FileIcon";
import GameIcon from "../../assets/GameIcon";

import { useHistory } from "react-router";

export default function Navigation() {
  const history = useHistory();
  const handleHome = (): void => {
    history.push({ pathname: "/" });
  };

  return (
    <Container>
      <ContainerCenter>
        <Logo onClick={handleHome}>SOFTLINK</Logo>
        <SimpleContainer gap="12px">
          <ButtonLink to="/programs"><ProgramIcon /> Programas</ButtonLink>
          <ButtonLink to="/files"><FileIcon /> Archivos</ButtonLink>
          <ButtonLink to="/games"><GameIcon /> Juegos</ButtonLink>
        </SimpleContainer>
      </ContainerCenter>
    </Container>
  );
}
