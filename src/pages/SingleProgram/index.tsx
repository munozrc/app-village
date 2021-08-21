import { useParams } from "react-router";
import { program } from "../../types";
import programsData from "../../data/programs.json";

import PackageIcon from "../../assets/PackageIcon";

import "./styles.css";
import SystemIcon from "../../assets/SystemIcon";
import StorageIcon from "../../assets/StorageIcon";
import LanguageIcon from "../../assets/LanguageIcon";
import LinkIcon from "../../assets/LinkIcon";
import DownloadIcon from "../../assets/DownloadIcon";
import ReactMarkdown from "react-markdown";

interface SingleProgramParams {
  id: string;
}

function SingleProgram() {
  const { id } = useParams<SingleProgramParams>();
  const currentProgram = getCurrentProgram(parseInt(id));

  if (!currentProgram || !currentProgram.versions) return <h4>404</h4>;
  return (
    <div className="single-program">
      <section className="single-program__card">
        <header className="single-program__header">
          <img
            className="single-program__icon"
            src={currentProgram.icon}
            alt={currentProgram.name}
          />
          <h2 className="single-program__name">{currentProgram.name}</h2>
        </header>
        <div className="single-program__items-container">
          <span className="single-program__item">
            <DownloadIcon /> Descargar
          </span>
          <span className="single-program__item">
            <PackageIcon /> {currentProgram.versions[0].name}
          </span>
          <span className="single-program__item">
            <SystemIcon /> {currentProgram.versions[0].os}
          </span>
          <span className="single-program__item">
            <StorageIcon /> {currentProgram.versions[0].size}
          </span>
          <span className="single-program__item">
            <LanguageIcon /> {currentProgram.versions[0].language}
          </span>
          <span className="single-program__item">
            <LinkIcon /> {currentProgram.dev}
          </span>
        </div>
      </section>
      <section className="single-program__content">
        <ReactMarkdown children={currentProgram.versions[0].content} />
      </section>
    </div>
  );
}

function getCurrentProgram(id: number): program | null {
  const program = programsData.find((ele) => ele.id === id);
  return program || null;
}

export default SingleProgram;
