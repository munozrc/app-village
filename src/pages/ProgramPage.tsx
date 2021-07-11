import { useParams } from "react-router";
import { program } from "../types";
import styled from "styled-components";

// Custom Components
import ParentContainer from "../layouts/ParentContainer";

// Data
import Programs from "../data/programs.json";
import DownloadIcon from "../assets/DownloadIcon";
import PackageIcon from "../assets/PackageIcon";

interface RouteParams {
  id: string;
}

export default function ProgramPage() {
  const { id } = useParams<RouteParams>();
  const data: program | null =
    Programs.find((item) => item.id === parseInt(id)) || null;

  if (!data) return <div>Not Found</div>;
  return (
    <ParentContainer>
      <WrapperHeader>
        <Box>
          <IconBox src={data.icon} />
          <NameProgram>{data.name}</NameProgram>
          <BtnDownload>
            <DownloadIcon />
          </BtnDownload>
        </Box>
        <ItemPropertie>
          <PackageIcon />{" "}
          {typeof data.versions !== "undefined" && data.versions[0].name}
        </ItemPropertie>
      </WrapperHeader>
    </ParentContainer>
  );
}

const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.cardColor};
  border-radius: 10px;
  padding: 20px;
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 16px;
  margin-bottom: 12px;
  border-bottom: solid 2px rgba(255, 255, 255, 0.05);
`;

const IconBox = styled.img`
  width: 50px;
  height: auto;
  user-select: none;
  margin-right: 16px;
`;

const NameProgram = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const BtnDownload = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  margin-left: auto;
  transition: opacity 0.3s ease;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;

  &:hover {
    opacity: 0.5;
  }

  & > svg {
    font-size: 28px;
    stroke: ${({ theme }) => theme.textColor};
  }
`;

const ItemPropertie = styled.div`
  width: 100%;
  display: flex;
  justify: flex-start;
  align-items: center;
  opacity: 0.8;
  font-size: 16px;

  & > svg {
    font-size: 20px;
    stroke: ${({ theme }) => theme.textColor};
    margin-right: 5px;
  }
`;
