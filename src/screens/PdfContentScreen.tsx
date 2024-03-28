import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ItemsList from "../components/PdfContentScreen/ItemsList";
import uuid from "react-native-uuid";
interface Item {
  id: string;
  title: string;
  price: number;
  DPHPrice: number;
}
const PdfContentScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>();

  const addItem = () => {
    setItems((prev: Item[]) => [
      ...prev,
      {
        id: uuid.v4(),
        title: title,
        price: price,
        DPHprice: price * 1.21,
      },
    ]);
  };

  const deleteItem = (itemId: string) => {
    const filteredData = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(filteredData);
  };

  return (
    <View style={styles.screen}>
      <ItemsList items={items} deleteItem={deleteItem} />
      <View style={styles.handler}>
        <TextInput
          label={"název"}
          mode="outlined"
          value={title}
          onChangeText={(value) => setTitle(value)}
        />
        <TextInput
          label={"částka"}
          mode="outlined"
          value={price}
          keyboardType="number-pad"
          onChangeText={(value) => setPrice(value)}
        />
        <Button mode="contained" onPress={addItem}>
          přidat položku
        </Button>
      </View>
      <Button onPress={() => navigation.navigate("PDF")}>
        Vytvořit náhled
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  itemList: {
    padding: 10,
    marginBottom: 20,
    maxHeight: 400,
  },
  handler: {
    gap: 10,
  },
});

export default PdfContentScreen;
