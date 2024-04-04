import { View, Alert, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { printToFileAsync } from "expo-print";
import FileSystem from "expo-file-system";
import { basicTemplate } from "../templates/BasicTemplate";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import BasicButton from "../ui/BasicButton";
interface Item {
  id: string;
  title: string;
  price: string;
  DPHPrice: string;
}

interface PdfProps {
  items: Item[];
  subscriber: {
    companyName: string;
    street: string;
    numberStreet: string;
    zipCode: string;
    city: string;
    ico: string;
    dic: string;
    email: string;
  };
}

const Pdf: React.FC<PdfProps> = ({ items, subscriber }) => {
  const sender = useSelector((state: RootState) => state.sender);
  const template = basicTemplate(items, subscriber, sender);
  const createPdf = async () => {
    try {
      const { uri } = await printToFileAsync({ html: template });
      console.log("PDF generated at: ", uri);
      const pdfName = `vase-pdf-jmeno.pdf`;
      const fileUri = FileSystem.documentDirectory + pdfName;
      await FileSystem.moveAsync({
        from: uri,
        to: fileUri,
      });
      console.log("PDF přesunuto na: ", fileUri);
      Alert.alert("hotovo");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <WebView
        originWhitelist={["*"]}
        source={{ html: template }}
        style={styles.webview}
      />
      <View style={styles.actions}>
        <BasicButton
          uppercase
          title=" Vytvořit PDF"
          mode="outlined"
          onPress={createPdf}
        />
        <BasicButton
          uppercase
          title="uložit do telefonu"
          mode="outlined"
          onPress={createPdf}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  webview: {
    margin: 20,
    height: 300,
  },
  actions: {
    marginHorizontal: 20,
    marginBottom: 40,
    gap: 10,
  },
});

export default Pdf;
