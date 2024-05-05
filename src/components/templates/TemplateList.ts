import { basicTemplate } from "../../components/templates/BasicTemplate";
import { smoothTemplate } from "../../components/templates/SmoothTemplate";
import { limetTemplate } from "./LineTemplate";
import { drawerTemplate } from "./DrawerTemplate";
type TemplateFunction = (items: any, subscriber: any, sender: any) => string;

export const templateFunctions: Record<string, TemplateFunction> = {
  basicTemplate: basicTemplate,
  smoothTemplate: smoothTemplate,
  limetTemplate: limetTemplate,
  drawerTemplate: drawerTemplate,
};
