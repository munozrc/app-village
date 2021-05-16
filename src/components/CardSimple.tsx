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
      <Title>{title}</Title>
    </Card>
  );
}

const Card = styled.button`
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 4px;
  padding: 15px 10px;
  background: ${({ theme }) => theme.body};
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.text};
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
  font-size: 14px;
  font-weight: 500;
  margin-top: 6px;
`;

const Icon = styled.img`
  max-width: 80px;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.2));
`;
