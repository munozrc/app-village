import styled from "styled-components";

export default function Menu() {
  return (
    <Nav>
      <NavItem>Programas</NavItem>
      <NavItem>Archivos</NavItem>
      <NavItem>Juegos</NavItem>
    </Nav>
  );
}

const Nav = styled.nav`
  background: ${({ theme }) => theme.background};
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    margin: 0 5px;
  }
`;

const NavItem = styled.button`
  border: 2.5px solid ${({ theme }) => theme.background};
  border-radius: 4px;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  font-weight: 600;
  font-size: 1em;
  transition: all 0.3s ease;
  cursor: pointer;

  & svg {
    margin-right: 6px;
  }

  &:hover {
    border: 2.5px solid ${({ theme }) => theme.text};
  }
`;
