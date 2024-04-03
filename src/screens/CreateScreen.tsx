import { View } from "react-native";
import React from "react";
import CreateStackNavigatior from "../Navigation/CreateStackNavigatior";
import ScreenWrapper from "../components/ui/ScreenWrapper";

const CreateScreen: React.FC = () => {
  return (
    <ScreenWrapper>
      <CreateStackNavigatior />
    </ScreenWrapper>
  );
};

export default CreateScreen;
