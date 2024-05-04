import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { PDFScreenProps } from "../types/NavigationType";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import FileSystem from "expo-file-system";
import Sharing from "expo-sharing";
import Pdf from "../components/PdfScreen/Pdf";
import EmptySkeleton from "../components/PdfScreen/EmptySkeleton";
import ScreenWrapper from "../components/ui/ScreenWrapper";

const PdfScreen: React.FC<PDFScreenProps> = ({ navigation }) => {
  const theme = useTheme();
  const { items } = useSelector((state: RootState) => state.items);
  const subscriber = useSelector((state: RootState) => state.subscriber);
  const sender = useSelector((state: RootState) => state.sender);
  const validItems = items.length > 0;
  const validSubscriber = subscriber.ico;
  const validSender = sender.senderIco;
  const data = validItems && validSubscriber && validSender;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        data ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
              marginRight: 10,
            }}
          >
            <MaterialIcons
              name="file-download"
              size={30}
              color={theme.colors.secondary}
            />
          </View>
        ) : null,
    });
  }, [data]);

  // const printPDF = async () => {
  //   try {
  //     const { uri } = await Print.printToFileAsync({
  //       html: htmlContent,
  //       base64: false, // Pokud je true, vrátí base64, ale pro ukládání do souboru nechceme
  //     });

  //     const fileName = "my_generated_pdf.pdf";
  //     const filePath = `${FileSystem.documentDirectory}${fileName}`;

  //     await FileSystem.moveAsync({
  //       from: uri,
  //       to: filePath,
  //     });

  //     // Nyní je soubor uložen, můžete ho sdílet nebo otevřít
  //     if (await Sharing.isAvailableAsync()) {
  //       await Sharing.shareAsync(filePath);
  //     } else {
  //       console.log(`PDF uložen na: ${filePath}`);
  //     }
  //   } catch (error) {
  //     console.error("Chyba při generování nebo ukládání PDF:", error);
  //   }
  // };

  return (
    <ScreenWrapper>
      {data && <Pdf />}
      {!data && <EmptySkeleton />}
    </ScreenWrapper>
  );
};

export default PdfScreen;
