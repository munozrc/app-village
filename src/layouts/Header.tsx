import { HeaderContainer } from "./ParentContainer";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <ContainerLogo>
        <Logo>SoftLink</Logo>
      </ContainerLogo>
      <div>Search</div>
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
  background: #181818;
  color: white;
  border-radius: 4px;
  padding: 5px 20px;
`;
