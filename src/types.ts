export type versionProgram = {
  id: number;
  versionName: string;
  installer: string;
  instructions: string;
};

export type program = {
  id: number;
  name: string;
  path: string;
  date: string;
  iconName: string;
  versions: versionProgram[];
};
