import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
export type RootTabParamList = {
  User: undefined;
  PDF: undefined;
  Create: undefined;
  Templates: undefined;
};

export type UserScreenProps = BottomTabScreenProps<RootTabParamList, "User">;
export type PDFScreenProps = BottomTabScreenProps<RootTabParamList, "PDF">;
export type CreateScreenProps = BottomTabScreenProps<
  RootTabParamList,
  "Create"
>;
export type TemplatesScreenProps = BottomTabScreenProps<
  RootTabParamList,
  "Templates"
>;
