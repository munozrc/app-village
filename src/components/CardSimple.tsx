import { useHistory } from "react-router";
import styled from "styled-components";

type CardSimpleProps = {
  icon: string;
  title: string;
  category: string;
};

export default function CardSimple({ icon, title, category }: CardSimpleProps) {
  const history = useHistory();
  const handleClick = (): void => {
    history.push({ pathname: `/${category.toLowerCase()}/` });
  };

  return (
    <Card onClick={handleClick}>
      <BoxIcon>
        <Icon src={icon} />
      </BoxIcon>
      <Title>{title}</Title>
    </Card>
  );
}

const Card = styled.button`
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 2px transparent;
  border-radius: 4px;
  padding: 15px 10px;
  background: ${({ theme }) => theme.background};
  transition: border 0.3s ease;
  cursor: pointer;

  &:hover {
    border: solid 2px ${({ theme }) => theme.text};
  }
`;

const BoxIcon = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const Title = styled.h4`
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`;

const Icon = styled.img`
  max-width: 90px;
  /* filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.2)); */
  border-radius: 4px;
`;
