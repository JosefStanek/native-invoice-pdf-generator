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
interface UserFormProps {
  closeModal: () => void;
}
const UserForm: React.FC<UserFormProps> = ({ closeModal }) => {
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
      Toast.success("uloženo", "bottom");
    } catch (error) {
      console.error("Chyba při ukládání formulářových dat:", error);
    }
  };
  return (
    <>
      <ScrollView
        style={[styles.form, { backgroundColor: theme.colors.primary }]}
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
          <Text style={styles.formTitle}>Vytvořit hlavičku uživatele</Text>
          <ControllerInput
            name="senderCompanyName"
            required={true}
            label="Jméno firmy"
            control={control}
          />
          {errors.senderCompanyName && (
            <InputError message="Pole nesmí být prázdné." />
          )}
          <ControllerInput
            name="senderStreet"
            required={true}
            label="Ulice"
            control={control}
          />
          {errors.senderStreet && (
            <InputError message="Pole nesmí být prázdné." />
          )}
          <ControllerInput
            name="senderNumberStreet"
            required={true}
            label="číslo ulice"
            control={control}
          />
          {errors.senderNumberStreet && (
            <InputError message="Pole nesmí být prázdné." />
          )}
          <ControllerInput
            name="senderCity"
            required={true}
            label="Město"
            control={control}
          />
          {errors.senderCity && (
            <InputError message="Pole nesmí být prázdné." />
          )}
          <ControllerInput
            name="senderZipCode"
            required={true}
            label="PSČ"
            control={control}
          />
          {errors.senderZipCode && (
            <InputError message="Pole nesmí být prázdné." />
          )}
          <ControllerInput
            name="senderIco"
            required={true}
            label="IČO "
            control={control}
          />
          {errors.senderIco && <InputError message="Pole nesmí být prázdné." />}
          <ControllerInput
            name="senderDic"
            required={true}
            label="DIČ "
            control={control}
          />
          {errors.senderDic && <InputError message="Pole nesmí být prázdné." />}
          <ControllerInput
            name="senderEmail"
            required={true}
            label="Email"
            control={control}
          />
          {errors.senderEmail && (
            <InputError message="Pole nesmí být prázdné." />
          )}

          <ControllerInput
            name="senderAccountNumber"
            required={true}
            label="Číslo účtu"
            control={control}
          />
          {errors.senderAccountNumber && (
            <InputError message="Pole nesmí být prázdné." />
          )}
          <View style={styles.btnContainer}>
            <BasicButton
              uppercase={true}
              mode="outlined"
              title="vytvořit hlavičku"
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
