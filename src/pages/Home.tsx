import styled from "styled-components";

export default function Home() {
  return (
    <CategoryContainer>
      <Category>C1</Category>
      <Category>C2</Category>
      <Category>C3</Category>
      <Category>C4</Category>
      <Category>C5</Category>
      <Category>C6</Category>
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row: auto;
  grid-gap: 10px;
`;

const Category = styled.button`
  height: 230px;
  border: 2px solid ${({ theme }) => theme.text};
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
