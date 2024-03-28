import { View, StyleSheet } from "react-native";

import Pdf from "../components/PdfScreen/Pdf";
import EmptySkeleton from "../components/PdfScreen/EmptySkeleton";
const PdfScreen: React.FC = () => {
  const data = false;
  return (
    <View style={styles.container}>
      {data && <Pdf />}
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
