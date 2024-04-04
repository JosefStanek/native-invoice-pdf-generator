import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { useTheme } from "react-native-paper";
const TemplatePicker: React.FC = () => {
  const theme = useTheme();
  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  return (
    <View style={[styles.picker, { borderColor: theme.colors.secondary }]}>
      <Picker
        mode="dropdown"
        selectedValue={selectedTemplate}
        onValueChange={(itemValue, itemIndex) => setSelectedTemplate(itemValue)}
        dropdownIconColor={theme.colors.secondary}
      >
        <Picker.Item
          label="template1"
          value={"template1"}
          color={theme.colors.secondary}
        />
        <Picker.Item
          label="template2"
          value={"template2"}
          color={theme.colors.secondary}
        />
        <Picker.Item
          label="template3"
          value={"template3"}
          color={theme.colors.secondary}
        />
        <Picker.Item
          label="template4"
          value={"template4"}
          color={theme.colors.secondary}
        />
        <Picker.Item
          label="template5"
          value={"template5"}
          color={theme.colors.secondary}
        />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  },
});

export default TemplatePicker;
