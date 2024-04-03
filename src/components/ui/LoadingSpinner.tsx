import { View, StyleSheet, ActivityIndicator } from "react-native";

const LoadingSpinner: React.FC = () => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingSpinner;
