export type versionProgram = {
  id: number;
  name: string;
  installer: string;
  content: string;
};

export type program = {
  id: number;
  name: string;
  path: string;
  date: string;
  versions?: versionProgram[];
};
