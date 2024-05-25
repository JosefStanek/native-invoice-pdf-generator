import { View, StyleSheet } from "react-native";
import LanguagePicker from "../reusable/LanguagePicker";
import { Text } from "react-native-paper";

const LanguageSettings: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Výběr jazyka</Text>
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
