import { ScrollView, View, StyleSheet } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const HeaderForm: React.FC = () => {
  const navigate = useNavigation();
  return (
    <ScrollView style={{ padding: 10.0 }}>
      <Text style={styles.title}>Odesílatel</Text>
      <View style={{ gap: 10 }}>
        <TextInput label={"Název firmy"} mode="outlined" />
        <TextInput label={"Ulice"} mode="outlined" />
        <TextInput label={"Číslo ulice"} mode="outlined" />
        <TextInput label={"Psč"} mode="outlined" />
        <TextInput label={"Město"} mode="outlined" />
        <TextInput label={"IČO"} mode="outlined" />
        <TextInput label={"DIČ"} mode="outlined" />
        <TextInput label={"Email"} mode="outlined" />
        <TextInput label={"Číslo účtu"} mode="outlined" />
      </View>

      <Text style={styles.title}>Odběratel</Text>
      <View style={{ gap: 10 }}>
        <TextInput label={"Název firmy"} mode="outlined" />
        <TextInput label={"Ulice"} mode="outlined" />
        <TextInput label={"Číslo ulice"} mode="outlined" />
        <TextInput label={"Psč"} mode="outlined" />
        <TextInput label={"Město"} mode="outlined" />
        <TextInput label={"IČO"} mode="outlined" />
        <TextInput label={"DIČ"} mode="outlined" />
        <TextInput label={"Email"} mode="outlined" />
      </View>
      <Button
        style={{ margin: 20 }}
        mode="contained"
        onPress={() => navigate.navigate("Content")}
      >
        další
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    paddingVertical: 10,
  },
});

export default HeaderForm;
