import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { View, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { resetSender } from "../../store/Slices/senderSlice";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BasicButton from "../ui/BasicButton";
import Card from "../ui/Card";
const UserInfo: React.FC = () => {
  const { t } = useTranslation();
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
    <Card>
      <View
        style={[styles.innerContainer, { borderColor: theme.colors.secondary }]}
      >
        <Text>{t("senderForm.companyName")}</Text>
        <Text>{senderCompanyName}</Text>
      </View>
      <View
        style={[styles.innerContainer, { borderColor: theme.colors.secondary }]}
      >
        <Text>{t("senderForm.contact")}</Text>
        <Text>{senderEmail}</Text>
      </View>
      <View
        style={[styles.innerContainer, { borderColor: theme.colors.secondary }]}
      >
        <Text>{t("senderForm.ico")}</Text>
        <Text>{senderIco}</Text>
      </View>
      <View
        style={[styles.innerContainer, { borderColor: theme.colors.secondary }]}
      >
        <Text>{t("senderForm.dic")}</Text>
        <Text>CZ {senderDic}</Text>
      </View>
      <View
        style={[styles.innerContainer, { borderColor: theme.colors.secondary }]}
      >
        <Text>{t("senderForm.city")}</Text>
        <Text>
          {senderCity}, {senderZipCode}
        </Text>
      </View>
      <View
        style={[styles.innerContainer, { borderColor: theme.colors.secondary }]}
      >
        <Text>{t("senderForm.fullAddress")}</Text>
        <Text>
          {senderStreet} {senderNumberStreet}
        </Text>
      </View>
      <View
        style={[styles.innerContainer, { borderColor: theme.colors.secondary }]}
      >
        <Text>{t("senderForm.accountNumber")}</Text>
        <Text>{senderAccountNumber}</Text>
      </View>
      <View style={styles.btnContainer}>
        <BasicButton
          uppercase
          title={t("senderForm.deleteButton")}
          mode="outlined"
          onPress={resetSenderHandler}
        />
      </View>
    </Card>
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
