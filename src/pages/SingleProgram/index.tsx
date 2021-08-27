import { useState } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";

import PackageIcon from "../../assets/PackageIcon";
import SystemIcon from "../../assets/SystemIcon";
import StorageIcon from "../../assets/StorageIcon";
import LanguageIcon from "../../assets/LanguageIcon";
import LinkIcon from "../../assets/LinkIcon";
import DownloadIcon from "../../assets/DownloadIcon";

import programs from "../../data/programs.json";

import "./styles.css";

interface SingleProgramParams {
  id: string;
}

function SingleProgram() {
  const { id } = useParams<SingleProgramParams>();
  const [currentVersion, setCurrentVersion] = useState<number>(0);
  const currentProgram = programs.find((ele) => ele.id === parseInt(id));

  const handleDownload = () => {
    if (!currentProgram) return;
    window.open(currentProgram.versions[currentVersion].installer, "_blank");
  };

  const handleChangeVersion = () => {
    if (!currentProgram) return;
    const maxVersionSupport = currentProgram.versions.length - 1;

    if (maxVersionSupport < currentVersion) {
      setCurrentVersion((prev) => prev + 1);
    } else if (maxVersionSupport === currentVersion) {
      setCurrentVersion(() => 0);
    }
  };

  if (!currentProgram) return <h4>404</h4>;

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
          <button className="single-program__item" onClick={handleDownload}>
            <DownloadIcon /> Descargar
          </button>
          <span className="single-program__item" onClick={handleChangeVersion}>
            <PackageIcon /> {currentProgram.versions[currentVersion].name}
          </span>
          <span className="single-program__item">
            <SystemIcon /> {currentProgram.versions[currentVersion].os}
          </span>
          <span className="single-program__item">
            <StorageIcon /> {currentProgram.versions[currentVersion].size}
          </span>
          <span className="single-program__item">
            <LanguageIcon /> {currentProgram.versions[currentVersion].language}
          </span>
          <span className="single-program__item">
            <LinkIcon /> {currentProgram.dev}
          </span>
        </div>
      </section>
      <section className="single-program__content">
        <ReactMarkdown
          children={currentProgram.versions[currentVersion].content}
        />
      </section>
    </div>
  );
}

export default SingleProgram;
