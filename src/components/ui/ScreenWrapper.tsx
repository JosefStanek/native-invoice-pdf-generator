import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.ScreenWrapper,
        { backgroundColor: theme.colors.background },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenWrapper: {
    flex: 1,
  },
});

export default ScreenWrapper;
