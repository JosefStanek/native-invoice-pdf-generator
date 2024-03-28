import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/Slices/itemsSlice";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ItemProps {
  item: { id: string; title: string; price: string; DPHPrice: string };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <View>
          <Text>Položka:</Text>
          <Text> {item.title}</Text>
        </View>
        <View>
          <Text>Částka:</Text>
          <Text>{item.price}</Text>
        </View>
        <View>
          <Text>S DPH:</Text>
          <Text>{item.DPHPrice}</Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          dispatch(deleteItem(item.id));
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
