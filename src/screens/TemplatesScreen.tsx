import { View } from "react-native";
import TemplatePicker from "../components/ui/TemplatePicker";
import ScreenWrapper from "../components/ui/ScreenWrapper";
const TemplatesScreen: React.FC = () => {
  return (
    <ScreenWrapper>
      <TemplatePicker />
    </ScreenWrapper>
  );
};

export default TemplatesScreen;
