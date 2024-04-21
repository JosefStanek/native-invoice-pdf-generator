import { basicTemplate } from "../../components/templates/BasicTemplate";
import { smoothTemplate } from "../../components/templates/SmoothTemplate";
import { lineTemplate } from "./LineTemplate";
type TemplateFunction = (items: any, subscriber: any, sender: any) => string;

export const templateFunctions: Record<string, TemplateFunction> = {
  basicTemplate: basicTemplate,
  smoothTemplate: smoothTemplate,
  lineTemplate: lineTemplate,
};
