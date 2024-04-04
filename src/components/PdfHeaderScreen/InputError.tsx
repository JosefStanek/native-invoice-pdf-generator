import { Text } from "react-native";
import { useTheme } from "react-native-paper";
interface InputErrorProps {
  message: string;
}

const InputError: React.FC<InputErrorProps> = ({ message }) => {
  const theme = useTheme();
  return <Text style={{ color: theme.colors.error }}>{message}</Text>;
};

export default InputError;
