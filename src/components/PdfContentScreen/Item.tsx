import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/Slices/itemsSlice";
import { View, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme, Text } from "react-native-paper";

interface ItemProps {
  item: { id: string; title: string; price: string; DPHPrice: string };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <View style={[styles.item, { backgroundColor: theme.colors.background }]}>
      <View style={styles.itemContent}>
        <View
          style={{
            flex: 2,
            borderRightWidth: 1,
            borderColor: theme.colors.secondary,
          }}
        >
          <Text>Položka</Text>
          <Text> {item.title}</Text>
        </View>
        <View
          style={{
            flex: 1,
            borderRightWidth: 1,
            borderColor: theme.colors.secondary,
          }}
        >
          <Text>Částka</Text>
          <Text>{item.price}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>S DPH</Text>
          <Text>{item.DPHPrice}</Text>
        </View>
      </View>
      <Pressable
        onPress={() => {
          dispatch(deleteItem(item.id));
        }}
      >
        <MaterialIcons name="delete" size={24} color={theme.colors.secondary} />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  itemContent: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
});

export default Item;
