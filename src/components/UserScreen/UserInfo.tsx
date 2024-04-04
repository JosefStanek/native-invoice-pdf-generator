import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { View, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { resetSender } from "../../store/Slices/senderSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BasicButton from "../ui/BasicButton";
const UserInfo: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
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
      <View
        style={[styles.innerContainer, { borderColor: theme.colors.secondary }]}
      >
        <Text>Název společnosti</Text>
        <Text>{senderCompanyName}</Text>
      </View>
      <View
        style={[styles.innerContainer, { borderColor: theme.colors.secondary }]}
      >
        <Text>Kontakt</Text>
        <Text>{senderEmail}</Text>
      </View>
      <View
        style={[styles.innerContainer, { borderColor: theme.colors.secondary }]}
      >
        <Text>IČO</Text>
        <Text>{senderIco}</Text>
      </View>
      <View
        style={[styles.innerContainer, { borderColor: theme.colors.secondary }]}
      >
        <Text>DIČ</Text>
        <Text>CZ {senderDic}</Text>
      </View>
      <View
        style={[styles.innerContainer, { borderColor: theme.colors.secondary }]}
      >
        <Text>Město</Text>
        <Text>
          {senderCity}, {senderZipCode}
        </Text>
      </View>
      <View
        style={[styles.innerContainer, { borderColor: theme.colors.secondary }]}
      >
        <Text>Adresa</Text>
        <Text>
          {senderStreet} {senderNumberStreet}
        </Text>
      </View>
      <View
        style={[styles.innerContainer, { borderColor: theme.colors.secondary }]}
      >
        <Text>Číslo účtu</Text>
        <Text>{senderAccountNumber}</Text>
      </View>
      <View style={styles.btnContainer}>
        <BasicButton
          uppercase
          title="smazat"
          mode="outlined"
          onPress={resetSenderHandler}
        />
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
    padding: 10,
    marginBottom: 5,
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
