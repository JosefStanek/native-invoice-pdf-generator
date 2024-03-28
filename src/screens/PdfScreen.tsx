import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

import Pdf from "../components/PdfScreen/Pdf";
import EmptySkeleton from "../components/PdfScreen/EmptySkeleton";

const PdfScreen: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.items);
  const validItems = items.length > 0;
  const data = validItems;
  return (
    <View style={styles.container}>
      {data && <Pdf items={items} />}
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
