import { StyleSheet, View, Text, Pressable } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const BasicButton: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.btn}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "indigo",
    borderRadius: 10,
    backgroundColor: "indigo",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: "auto",
  },
  btn: {
    color: "white",
  },
});

export default BasicButton;
