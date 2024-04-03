import { View, Text, StyleSheet } from "react-native";
import React from "react";

const EmptySkeleton = () => {
  return (
    <View style={styles.emptyBox}>
      <Text style={styles.emptyTitle}>Náhled pro PDF.</Text>
      <Text style={styles.emptyTitle}>Prosím nezapomeň vyplnit hlavičku.</Text>
      <Text style={styles.emptyTitle}>Nejdřív musíš vytvořit PDF.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyBox: {
    flex: 1,
    margin: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: 16,
    padding: 10,
  },
});

export default EmptySkeleton;
