import { View, StyleSheet } from "react-native";
import LanguagePicker from "../reusable/LanguagePicker";
import { Text } from "react-native-paper";
import { useTranslation } from "react-i18next";
const LanguageSettings: React.FC = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t("settingsScreen.languageHeader")}</Text>
      <LanguagePicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default LanguageSettings;
