export type Metadata = { [key: string]: string };

export type ProgramVersion = {
  name: string;
  installer: string;
  os: string;
  size: string;
  language: string;
  content: string;
};

export type Program = {
  id: number;
  name: string;
  date: string;
  icon: string;
  dev: string;
  description: string;
  versions: ProgramVersion[];
};

export type versionProgram = {
  id: number;
  name: string;
  installer: string;
  os: string;
  size: string;
  language: string;
  content: string;
};

export type program = {
  id: number;
  name: string;
  path: string;
  date: string;
  icon: string;
  dev: string;
  versions?: versionProgram[];
};
