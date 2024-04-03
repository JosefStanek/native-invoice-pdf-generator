import { View, StyleSheet, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ItemsList from "../components/PdfContentScreen/ItemsList";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { addItem } from "../store/Slices/itemsSlice";
import ScreenWrapper from "../components/ui/ScreenWrapper";
const PdfContentScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.items);
  const navigation = useNavigation<any>();
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const addItemHandler = () => {
    if (!title || !price) {
      Alert.alert("Název i částku nesmít být prázdné.");
      return;
    } else {
      dispatch(addItem(title, price));
    }
  };

  return (
    <ScreenWrapper>
      <ItemsList items={items} />
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
        <Button mode="contained" onPress={addItemHandler}>
          přidat položku
        </Button>
      </View>
      <Button onPress={() => navigation.navigate("PDF", { items })}>
        Vytvořit náhled
      </Button>
    </ScreenWrapper>
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
