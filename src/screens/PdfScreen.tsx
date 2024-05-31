import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { PDFScreenProps } from "../types/NavigationType";
import { useTheme } from "react-native-paper";
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

  return (
    <ScreenWrapper>
      {data && <Pdf />}
      {!data && <EmptySkeleton />}
    </ScreenWrapper>
  );
};

export default PdfScreen;
