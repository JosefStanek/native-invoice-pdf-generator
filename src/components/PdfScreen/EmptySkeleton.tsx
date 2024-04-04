import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
const EmptySkeleton: React.FC = () => {
  const sender = useSelector((state: RootState) => state.sender);
  return (
    <View style={styles.emptyBox}>
      <Text style={styles.emptyTitle}>Náhled pro PDF.</Text>
      {!sender.senderIco && (
        <Text style={styles.emptyTitle}>
          Prosím nezapomeň vyplnit hlavičku.
        </Text>
      )}
      <Text style={styles.emptyTitle}>Nejdřív musíš vytvořit PDF.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyBox: {
    flex: 1,
    margin: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: 16,
    padding: 10,
  },
});

export default EmptySkeleton;
