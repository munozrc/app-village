import styled from "styled-components";

type CardSimpleProps = {
  icon: string;
  title: string;
  category: string;
};

export default function CardSimple({ icon, title, category }: CardSimpleProps) {
  return (
    <Card>
      <BoxIcon>
        <Icon src={icon} />
      </BoxIcon>
      <TextGroup>
        <Title>{title}</Title>
        <Category>{category}</Category>
      </TextGroup>
    </Card>
  );
}

const Card = styled.button`
  width: 340px;
  height: 106px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.background};
  cursor: pointer;
`;

const BoxIcon = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.text};
  border-radius: 4px;
`;

const TextGroup = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.h4`
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 2px;
`;

const Category = styled.span`
  width: fit-content;
  font-weight: 300;
  font-size: 1.1em;
`;

const Icon = styled.img`
  max-width: 40px;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.2));
`;
