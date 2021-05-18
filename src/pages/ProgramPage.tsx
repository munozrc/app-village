import { useParams } from "react-router";
import ParentContainer from "../layouts/ParentContainer";

interface RouteParams {
  path: string;
}

export default function ProgramPage() {
  const { path } = useParams<RouteParams>();
  return (
    <ParentContainer>
      <h2>PROGRAM PAGE / {path}</h2>
    </ParentContainer>
  );
}
