import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useTranslation } from "react-i18next";
const EmptySkeleton: React.FC = () => {
  const sender = useSelector((state: RootState) => state.sender);
  const { t } = useTranslation();
  return (
    <View style={styles.emptyBox}>
      <Text style={styles.emptyTitle}>{t("PDFscreen.Skeleton.header")}</Text>
      {!sender.senderIco && (
        <Text style={styles.emptyTitle}>
          {t("PDFscreen.Skeleton.requireHeader")}
        </Text>
      )}
      <Text style={styles.emptyTitle}>
        {t("PDFscreen.Skeleton.requireSubscriber")}
      </Text>
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
