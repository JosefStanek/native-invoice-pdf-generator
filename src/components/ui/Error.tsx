import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
  },
});

export default Error;
