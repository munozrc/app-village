import { HeaderContainer } from "./ParentContainer";
import styled from "styled-components";

type HeaderProps = {
  toggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Header({ toggleTheme }: HeaderProps) {
  return (
    <HeaderContainer>
      <ContainerLogo>
        <Logo>SoftLink</Logo>
      </ContainerLogo>
      <button onClick={toggleTheme}>Theme</button>
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

const Logo = styled.h1`
  font-size: 1.6em;
  background: ${({ theme }) => theme.background};
  color: white;
  border-radius: 4px;
  padding: 5px 20px 7px 20px;
`;
