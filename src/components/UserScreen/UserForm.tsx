import { View, ScrollView, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import ControllerInput from "../reusable/ControllerInput";
import { Text, useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { formData } from "../../types/DataTypes";
import { useDispatch, useSelector } from "react-redux";
import { setSender } from "../../store/Slices/senderSlice";
import { Toast } from "toastify-react-native";
import InputError from "../PdfHeaderScreen/InputError";
import { RootState } from "../../store/store";
import BasicButton from "../ui/BasicButton";
import { useTranslation } from "react-i18next";
interface UserFormProps {
  closeModal: () => void;
}
const UserForm: React.FC<UserFormProps> = ({ closeModal }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const sender = useSelector((state: RootState) => state.sender);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({
    defaultValues: { ...sender } || {
      senderAccountNumber: "",
      senderCity: "",
      senderCompanyName: "",
      senderDic: "",
      senderEmail: "",
      senderIco: "",
      senderNumberStreet: "",
      senderStreet: "",
      senderZipCode: "",
    },
  });
  const successToast = t("toastMessage.save");
  const errorToast = t("toastMessage.error");
  const senderDataHandler = async (data: formData) => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(data));
      dispatch(setSender(data));
      reset({
        senderAccountNumber: "",
        senderCity: "",
        senderCompanyName: "",
        senderDic: "",
        senderEmail: "",
        senderIco: "",
        senderNumberStreet: "",
        senderStreet: "",
        senderZipCode: "",
      });
      closeModal();
      Toast.success(successToast, "bottom");
    } catch (error) {
      Toast.error(errorToast, "bottom");
    }
  };

  return (
    <>
      <ScrollView
        style={[styles.form, { backgroundColor: theme.colors.onSecondary }]}
      >
        <View style={styles.closeContainer}>
          <MaterialIcons
            name="close"
            size={30}
            color={theme.colors.secondary}
            onPress={closeModal}
          />
        </View>
        <View style={styles.formFlexbox}>
          <Text style={styles.formTitle}>{t("senderForm.title")}</Text>
          <ControllerInput
            name="senderCompanyName"
            required={true}
            label={t("senderForm.companyName")}
            control={control}
          />
          {errors.senderCompanyName && (
            <InputError message={t("errors.emptyInput")} />
          )}
          <ControllerInput
            name="senderStreet"
            required={true}
            label={t("senderForm.street")}
            control={control}
          />
          {errors.senderStreet && (
            <InputError message={t("errors.emptyInput")} />
          )}
          <ControllerInput
            name="senderNumberStreet"
            required={true}
            label={t("senderForm.streetNumber")}
            control={control}
          />
          {errors.senderNumberStreet && (
            <InputError message={t("errors.emptyInput")} />
          )}
          <ControllerInput
            name="senderCity"
            required={true}
            label={t("senderForm.city")}
            control={control}
          />
          {errors.senderCity && <InputError message={t("errors.emptyInput")} />}
          <ControllerInput
            name="senderZipCode"
            required={true}
            label={t("senderForm.referenceNumber")}
            control={control}
          />
          {errors.senderZipCode && (
            <InputError message={t("errors.emptyInput")} />
          )}
          <ControllerInput
            name="senderIco"
            required={true}
            label={t("senderForm.ico")}
            control={control}
          />
          {errors.senderIco && <InputError message={t("errors.emptyInput")} />}
          <ControllerInput
            name="senderDic"
            required={true}
            label={t("senderForm.dic")}
            control={control}
          />
          {errors.senderDic && <InputError message={t("errors.emptyInput")} />}
          <ControllerInput
            name="senderEmail"
            required={true}
            label={t("senderForm.email")}
            control={control}
          />
          {errors.senderEmail && (
            <InputError message={t("errors.emptyInput")} />
          )}

          <ControllerInput
            name="senderAccountNumber"
            required={true}
            label={t("senderForm.accountNumber")}
            control={control}
          />
          {errors.senderAccountNumber && (
            <InputError message={t("errors.emptyInput")} />
          )}
          <View style={styles.btnContainer}>
            <BasicButton
              uppercase={true}
              mode="outlined"
              title={t("senderForm.createButton")}
              onPress={handleSubmit(senderDataHandler)}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  closeContainer: {
    marginLeft: "auto",
  },
  form: {
    padding: 10,
  },
  formFlexbox: { gap: 10 },
  formTitle: {
    textAlign: "center",
    paddingVertical: 20,
    textTransform: "uppercase",
  },
  btnContainer: { paddingBottom: 20 },
  formBtn: {
    padding: 5,
    marginVertical: 20,
    borderRadius: 0,
    textTransform: "uppercase",
  },
});

export default UserForm;
