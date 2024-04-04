import { StyleSheet } from "react-native";
import { Button, useTheme } from "react-native-paper";

interface ButtonProps {
  uppercase: boolean | undefined;
  title: string;
  onPress: () => void;
  mode:
    | "text"
    | "outlined"
    | "contained"
    | "elevated"
    | "contained-tonal"
    | undefined;
}

const BasicButton: React.FC<ButtonProps> = ({
  uppercase,
  title,
  mode,
  onPress,
}) => {
  const theme = useTheme();
  return (
    <Button
      mode={mode}
      style={[
        styles.btn,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
      textColor={theme.colors.secondary}
      onPress={onPress}
      uppercase={uppercase}
    >
      {title}
    </Button>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 0,
  },
});

export default BasicButton;
