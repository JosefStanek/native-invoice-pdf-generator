import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
const TemplatePicker: React.FC = () => {
  const { currentTemplatePath } = useSelector(
    (state: RootState) => state.template
  );

  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  return (
    <View style={styles.picker}>
      <Picker
        mode="dropdown"
        selectedValue={selectedTemplate}
        onValueChange={(itemValue, itemIndex) => setSelectedTemplate(itemValue)}
      >
        <Picker.Item label="template1" value={"template1"} />
        <Picker.Item label="template2" value={"template2"} />
        <Picker.Item label="template3" value={"template3"} />
        <Picker.Item label="template4" value={"template4"} />
        <Picker.Item label="template5" value={"template5"} />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    borderRadius: 5,
    margin: 10,
    elevation: 4,
  },
});

export default TemplatePicker;
