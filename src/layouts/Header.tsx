import styled from "styled-components";

type ContainerButtonsProps = {
  gap?: string;
};

type HeaderProps = {
  toggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Header({ toggleTheme }: HeaderProps) {
  return (
    <Container>
      <Logo onClick={toggleTheme}>SOFTLINK</Logo>
      <ContainerButtons gap={"5px"}>
        <Button>Inicio</Button>
        <Button>Programas</Button>
        <Button>Apps</Button>
        <Button>Archivos</Button>
      </ContainerButtons>
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

const ContainerButtons = styled.div`
  display: flex;
  & > button {
    margin: ${({ gap }: ContainerButtonsProps) => gap};
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 1em;
  font-weight: 600;
  padding: 6px 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }
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
`;
