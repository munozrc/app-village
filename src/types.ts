export interface Metadata { [key: string]: string };

export interface ProgramVersion {
  name: string
  installer: string
  os: string
  size: string
  language: string
  content: string
};

export interface Program {
  id: number
  name: string
  date: string
  icon: string
  dev: string
  description: string
  versions: ProgramVersion[]
};
