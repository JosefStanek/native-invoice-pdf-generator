import TemplatePicker from "../ui/TemplatePicker";
import ScreenWrapper from "../ui/ScreenWrapper";
import { WebView } from "react-native-webview";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { templateFunctions } from "../templates/TemplateList";
const Pdf: React.FC = () => {
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

export default Pdf;
