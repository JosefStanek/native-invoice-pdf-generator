import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

const LanguageSettings: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text style={styles.title}>{t("settingsScreen.title")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});

export default LanguageSettings;
