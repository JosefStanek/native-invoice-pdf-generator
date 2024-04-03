import { View, Alert, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { Button } from "react-native-paper";
import { printToFileAsync } from "expo-print";
import { basicTemplate } from "../templates/BasicTemplate";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
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
        <Button mode="contained" onPress={createPdf}>
          Vytvořit PDF
        </Button>
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
    marginHorizontal: 30,
    marginVertical: 20,
  },
});

export default Pdf;
