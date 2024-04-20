import TemplatePicker from "../components/ui/TemplatePicker";
import ScreenWrapper from "../components/ui/ScreenWrapper";
import { WebView } from "react-native-webview";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { templateFunctions } from "../components/templates/TemplateList";
const TemplatesScreen: React.FC = () => {
  const currentTemplateName = useSelector(
    (state: RootState) => state.template.currentTemplate
  );
  const { items } = useSelector((state: RootState) => state.items);
  const subscriber = useSelector((state: RootState) => state.subscriber);
  const sender = useSelector((state: RootState) => state.sender);

  const currentTemplateFunction = templateFunctions[currentTemplateName];

  const htmlContent = currentTemplateFunction(items, subscriber, sender);
  return (
    <ScreenWrapper>
      <TemplatePicker />
      <WebView originWhitelist={["*"]} source={{ html: htmlContent }} />
    </ScreenWrapper>
  );
};

export default TemplatesScreen;
