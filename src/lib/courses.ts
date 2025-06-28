import yaml from "js-yaml";
import raw from "../../data/courses.yaml?raw"; // Vite raw import

export const courses = yaml.load(raw) as {
  currentCourses: {
    title: string;
    level: string;
    duration: string;
    volume?: string;
    description: string;
    role: string;
    hasMaterials: boolean;
  }[];
  previousCourses: {
    title: string;
    level: string;
    duration: string;
    volume?: string;
    description: string;
    role: string;
    hasMaterials: boolean;
  }[];
  terSubjects: {
    column1: string[];
    column2: string[];
  };
};
