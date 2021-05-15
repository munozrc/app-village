import styled from "styled-components";

export default function CardSimple() {
  return (
    <Card>
      <BoxIcon>
        <Icon
          src={
            "https://drive.google.com/uc?export=download&id=1jZRhWs7y65eu_xszTJe4P_Yf3Mn3_X_3"
          }
        />
      </BoxIcon>
      <TextGroup>
        <Title>Microsoft Office 2016</Title>
        <Category>Programa</Category>
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
  padding: 10px;
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
  max-width: 80%;
  /* filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.6)); */
`;
