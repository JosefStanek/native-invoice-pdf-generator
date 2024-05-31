import TemplatePicker from "../ui/TemplatePicker";
import ScreenWrapper from "../ui/ScreenWrapper";
import { WebView } from "react-native-webview";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { templateFunctions } from "../templates/TemplateList";
import { View, Alert } from "react-native";
import BasicButton from "../ui/BasicButton";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { useTranslation } from "react-i18next";
const Pdf: React.FC = () => {
  const { t } = useTranslation();
  const currentTemplateName = useSelector(
    (state: RootState) => state.template.currentTemplate
  );
  const { items } = useSelector((state: RootState) => state.items);
  const subscriber = useSelector((state: RootState) => state.subscriber);
  const sender = useSelector((state: RootState) => state.sender);

  const currentTemplateFunction = templateFunctions[currentTemplateName];

  const htmlContent = currentTemplateFunction(items, subscriber, sender);
  const createPdf = async () => {
    try {
      const { uri } = await Print.printToFileAsync({
        html: htmlContent,
      });

      const fileName = "INVOICE.pdf";
      const filePath = `${FileSystem.documentDirectory}${fileName}`;

      await FileSystem.moveAsync({
        from: uri,
        to: filePath,
      });

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(filePath);
      } else {
        console.log("PDF uložen na:", filePath);
      }
    } catch (error) {
      console.error("Chyba při generování PDF:", error);
      Alert.alert("Error", "Nelze vygenerovat PDF");
    }
  };
  return (
    <ScreenWrapper>
      <TemplatePicker />
      <WebView originWhitelist={["*"]} source={{ html: htmlContent }} />
      <View style={{ paddingVertical: 20 }}>
        <BasicButton
          title={t("PDFscreen.sendButton")}
          onPress={createPdf}
          uppercase
          mode="outlined"
        />
      </View>
    </ScreenWrapper>
  );
};

export default Pdf;
