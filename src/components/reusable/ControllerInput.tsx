import { TextInput, useTheme } from "react-native-paper";
import { Controller } from "react-hook-form";
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
          activeOutlineColor={theme.colors.secondary}
        />
      )}
      name={name}
    />
  );
};

export default ControllerInput;
