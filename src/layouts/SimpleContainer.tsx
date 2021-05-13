import styled from "styled-components";

type props = {
  gap?: string;
};

const SimpleContainer = styled.div`
  display: flex;
  & > button {
    margin: ${({ gap }: props) => gap};
  }
`;

export default SimpleContainer;
