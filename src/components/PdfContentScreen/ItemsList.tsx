import { FlatList, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Item from "./Item";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
      {items.length === 0 && (
        <Text style={styles.titleItem}>{t("AddItemsScreen.header")}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  itemList: {
    padding: 10,
    marginBottom: 20,
    maxHeight: 400,
  },
  titleItem: {
    padding: 10,
  },
});

export default ItemsList;
