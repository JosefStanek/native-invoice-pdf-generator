import { Text, FlatList, StyleSheet } from "react-native";
import Item from "./Item";

interface Item {
  id: string;
  title: string;
  price: string;
  DPHPrice: string;
}
interface ItemsListProps {
  items: Item[];
}

const ItemsList: React.FC<ItemsListProps> = ({ items }) => {
  return (
    <>
      {items.length > 0 && (
        <FlatList
          style={styles.itemList}
          data={items}
          renderItem={(item) => {
            return <Item item={item.item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      )}
      {items.length === 0 && <Text>Přidej položku</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  itemList: {
    padding: 10,
    marginBottom: 20,
    maxHeight: 400,
  },
});

export default ItemsList;
