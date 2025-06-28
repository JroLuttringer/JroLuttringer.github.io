import yaml from "js-yaml";
import raw from "../../data/publications.yaml?raw"; // Vite raw import

export const publications = yaml.load(raw) as {
  journals: any[];
  conferences: any[];
  national_conferences: any[];
  workshops: any[];
  preprints: any[];
  thesis: any[];
};