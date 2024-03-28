import { View, StyleSheet, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ItemsList from "../components/PdfContentScreen/ItemsList";
import uuid from "react-native-uuid";
interface Item {
  id: string;
  title: string;
  price: string;
  DPHPrice: string;
}
const PdfContentScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const addItem = () => {
    if (!title || !price) {
      Alert.alert("Název i částku nesmít být prázdné.");
      return;
    }

    const newItem = {
      id: uuid.v4().toString(),
      title: title,
      price: price,
      DPHPrice: (+price * 1.21).toFixed(2).toString(),
    };
    setItems((prev: Item[]) => [...prev, newItem]);
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
          value={price?.toString()}
          keyboardType="numeric"
          maxLength={7}
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
