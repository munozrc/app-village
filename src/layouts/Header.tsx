import { HeaderContainer } from "./ParentContainer";
import styled from "styled-components";

type HeaderProps = {
  toggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Header({ toggleTheme }: HeaderProps) {
  return (
    <HeaderContainer>
      <ContainerLogo>
        <RectangleLogo>
          <Logo>SOFTLINK</Logo>
        </RectangleLogo>
      </ContainerLogo>
      <ContainerTools>
        <button onClick={toggleTheme}>Theme</button>
      </ContainerTools>
    </HeaderContainer>
  );
}

const ContainerLogo = styled.div`
  grid-area: logo;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(68, 68, 68, 0.2);
`;

const ContainerTools = styled.div`
  grid-area: tools;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(68, 68, 68, 0.2);
`;

const RectangleLogo = styled.div`
  background: ${({ theme }) => theme.text};
  border-radius: 4px;
  padding: 10px 30px;
`;

const Logo = styled.h1`
  font-size: 1.5em;
  font-weight: 800;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.background};
`;
