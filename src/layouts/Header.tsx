import styled from "styled-components";

type HeaderProps = {
  toggleTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Header({ toggleTheme }: HeaderProps) {
  return (
    <Container>
      <Logo onClick={toggleTheme}>SOFTLINK</Logo>
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
