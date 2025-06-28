import yaml from "js-yaml";
import raw from "../../data/mentoring.yaml?raw"; // Vite raw import

export type Student = {
  title: string;
  name: string;
  year: string;
  supervision?: string;
  description: string;
};

export type MentoringData = {
  phdStudents: Student[];
  master2Students: Student[];
  master1Students: Student[];
  bachelorStudents: Student[];
};

export const mentoring = yaml.load(raw) as MentoringData;
