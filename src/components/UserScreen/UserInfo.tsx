import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { resetSender } from "../../store/Slices/senderSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
const UserInfo: React.FC = () => {
  const dispatch = useDispatch();
  const {
    senderAccountNumber,
    senderCity,
    senderCompanyName,
    senderDic,
    senderNumberStreet,
    senderEmail,
    senderIco,
    senderStreet,
    senderZipCode,
  } = useSelector((state: RootState) => state.sender);

  const resetSenderHandler = async () => {
    await AsyncStorage.removeItem("userData");
    dispatch(resetSender());
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>Název společnosti</Text>
        <Text>{senderCompanyName}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text>Kontakt</Text>
        <Text>{senderEmail}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text>IČO</Text>
        <Text>{senderIco}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text>DIČ</Text>
        <Text>CZ {senderDic}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text>Město</Text>
        <Text>
          {senderCity}, {senderZipCode}
        </Text>
      </View>
      <View style={styles.innerContainer}>
        <Text>Adresa</Text>
        <Text>
          {senderStreet} {senderNumberStreet}
        </Text>
      </View>
      <View style={styles.innerContainer}>
        <Text>Číslo účtu</Text>
        <Text>{senderAccountNumber}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          style={styles.deleteBtn}
          mode="contained"
          onPress={resetSenderHandler}
        >
          smazat
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  innerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "white",
  },
  btnContainer: {
    marginTop: 20,
  },
  deleteBtn: {
    borderRadius: 0,
    backgroundColor: "crimson",
  },
});

export default UserInfo;
