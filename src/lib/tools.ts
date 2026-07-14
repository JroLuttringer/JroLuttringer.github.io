import yaml from "js-yaml";
import raw from "../../data/tools.yaml?raw";

export type ToolAction = {
  label: string;
  href: string;
};

export type Tool = {
  title: string;
  category: string;
  focus: string[];
  description: string;
  image: string;
  alt: string;
  primaryAction?: ToolAction;
  secondaryActions: ToolAction[];
};

type RawTool = Partial<Tool> & {
  name?: string;
};

const parsed = (yaml.load(raw) as { tools?: RawTool[] })?.tools ?? [];

export const tools: Tool[] = parsed.map((tool) => ({
  title: tool.title ?? tool.name ?? "Untitled Tool",
  category: tool.category ?? "Experimental / Random",
  focus: Array.isArray(tool.focus) ? tool.focus : [],
  description: tool.description ?? "",
  image: tool.image ?? "",
  alt: tool.alt ?? `${tool.title ?? tool.name ?? "Tool"} screenshot`,
  primaryAction: tool.primaryAction,
  secondaryActions: Array.isArray(tool.secondaryActions) ? tool.secondaryActions : [],
}));
