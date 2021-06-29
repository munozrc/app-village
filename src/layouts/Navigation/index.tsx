// Components
import SimpleContainer from "../SimpleContainer";
import { Container, Logo, ContainerCenter } from "./NavigationElements";

// Assets
import ProgramIcon from "../../assets/ProgramIcon";
import FileIcon from "../../assets/FileIcon";
import GameIcon from "../../assets/GameIcon";
import ButtonLink from "../../components/ButtonLink";

export default function Navigation() {
  return (
    <Container>
      <ContainerCenter>
        <Logo to="/">SOFTLINK</Logo>
        <SimpleContainer gap="12px">
          <ButtonLink
            to="/programs"
            icon={<ProgramIcon />}
            content="Programas"
          />
          <ButtonLink to="/files" icon={<FileIcon />} content="Archivos" />
          <ButtonLink to="/games" icon={<GameIcon />} content="Juegos" />
        </SimpleContainer>
      </ContainerCenter>
    </Container>
  );
}
