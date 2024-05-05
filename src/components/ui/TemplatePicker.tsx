import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setTemplate } from "../../store/Slices/templateSlice";
const TemplatePicker: React.FC = () => {
  const theme = useTheme();
  const currentTemplate = useSelector(
    (state: RootState) => state.template.currentTemplate
  );
  const dispatch = useDispatch();
  return (
    <View style={[styles.picker, { borderColor: theme.colors.secondary }]}>
      <Picker
        mode="dropdown"
        selectedValue={currentTemplate}
        onValueChange={(itemValue, itemIndex) => {
          dispatch(setTemplate(itemValue));
        }}
        dropdownIconColor={theme.colors.secondary}
      >
        <Picker.Item
          label="BasicTemplate"
          value={"basicTemplate"}
          color={theme.colors.secondary}
        />
        <Picker.Item
          label="SmoothTemplate"
          value={"smoothTemplate"}
          color={theme.colors.secondary}
        />
        <Picker.Item
          label="LimetTemplate"
          value={"limetTemplate"}
          color={theme.colors.secondary}
        />
        <Picker.Item
          label="DrawerTemplate"
          value={"drawerTemplate"}
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
