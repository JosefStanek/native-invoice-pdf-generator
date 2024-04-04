import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { useTheme } from "react-native-paper";
interface ControllerInputProps {
  name: string;
  label: string;
  required: boolean | string;
  control: any;
}

const ControllerInput: React.FC<ControllerInputProps> = ({
  name,
  control,
  label,
  required,
}) => {
  const theme = useTheme();
  return (
    <Controller
      control={control}
      rules={{ required: required }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          label={label}
          mode="outlined"
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
        />
      )}
      name={name}
    />
  );
};

const styles = StyleSheet.create({});

export default ControllerInput;
