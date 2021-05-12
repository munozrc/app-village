import { HeaderContainer } from "./ParentContainer";
import styled from "styled-components";
import { VscSearch } from "react-icons/vsc";

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
        <WrapperInput>
          <SearchInput
            type={"text"}
            placeholder={"Buscar programas o archivos..."}
          />
          <SearchButton>
            <VscSearch size={"1.2em"} />
          </SearchButton>
        </WrapperInput>
        <ThemeButton onClick={toggleTheme}>Tema</ThemeButton>
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
  justify-content: flex-end;
  align-items: center;
  padding: 0px 20px;
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

const WrapperInput = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
`;

const SearchInput = styled.input`
  min-width: 300px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  padding-left: 10px;
  margin-right: 5px;
  background: ${({ theme }) => theme.background};
  font-size: 1em;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #666;
  }

  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

const SearchButton = styled.button`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #666;
  }

  & svg {
    fill: ${({ theme }) => theme.background};
  }

  &:hover {
    background: ${({ theme }) => theme.background};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.text};
  }
`;

const ThemeButton = styled.button`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  padding: 0px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 5px;
  color: ${({ theme }) => theme.background};
  font-size: 1em;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #666;
  }

  & svg {
    fill: ${({ theme }) => theme.background};
  }

  &:hover {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.text};
  }
`;
