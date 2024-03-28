import { View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ItemProps {
  item: { id: string; title: string; price: number; DPHprice: number };
  deleteItem: (id: string) => void;
}

const Item: React.FC<ItemProps> = ({ item, deleteItem }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <Text>Položka: {item.title}</Text>
        <Text>Částka: {item.price}</Text>
        <Text>S DPH: {item.DPHprice}</Text>
      </View>
      <Pressable
        onPress={() => {
          deleteItem(item.id);
        }}
      >
        <MaterialIcons name="delete" size={24} color="black" />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  itemContent: {
    flexDirection: "row",
    gap: 10,
  },
});

export default Item;
