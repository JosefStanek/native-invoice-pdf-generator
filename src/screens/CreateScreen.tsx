import { View } from "react-native";
import React from "react";
import CreateStackNavigatior from "../Navigation/CreateStackNavigatior";

const CreateScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, marginBottom: 20 }}>
      <CreateStackNavigatior />
    </View>
  );
};

export default CreateScreen;
