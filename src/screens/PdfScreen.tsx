import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Pdf from "../components/PdfScreen/Pdf";
import EmptySkeleton from "../components/PdfScreen/EmptySkeleton";

const PdfScreen: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.items);
  const subscriber = useSelector((state: RootState) => state.subscriber);
  const sender = useSelector((state: RootState) => state.sender);
  const validItems = items.length > 0;
  const validSubscriber = subscriber.ico;
  const validSender = sender.senderIco;

  const data = validItems && validSubscriber && validSender;
  return (
    <View style={styles.container}>
      {data && <Pdf items={items} subscriber={subscriber} />}
      {!data && <EmptySkeleton />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});

export default PdfScreen;
