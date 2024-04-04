import { View, StyleSheet, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import ItemsList from "../components/PdfContentScreen/ItemsList";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { addItem } from "../store/Slices/itemsSlice";
import BasicButton from "../components/ui/BasicButton";
import ScreenWrapper from "../components/ui/ScreenWrapper";
const PdfContentScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.items);
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const addItemHandler = () => {
    if (!title || !price) {
      Alert.alert("Název i částku nesmít být prázdné.");
      return;
    } else {
      dispatch(addItem(title, price));
      setTitle("");
      setPrice("");
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
      </View>
      <View style={{ paddingBottom: 40 }}>
        <BasicButton
          uppercase
          mode="contained"
          title="přidat položku"
          onPress={addItemHandler}
        />
      </View>
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
    padding: 10,
  },
});

export default PdfContentScreen;
