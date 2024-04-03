import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import ControllerInput from "../reusable/ControllerInput";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { formData } from "../../types/DataTypes";
import { useDispatch, useSelector } from "react-redux";
import { setSender } from "../../store/Slices/senderSlice";
import { Toast } from "toastify-react-native";
import { RootState } from "../../store/store";
interface UserFormProps {
  closeModal: () => void;
}
const UserForm: React.FC<UserFormProps> = ({ closeModal }) => {
  const sender = useSelector((state: RootState) => state.sender);
  const dispatch = useDispatch();
  const { control, handleSubmit, reset } = useForm<formData>({
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
      <ScrollView style={styles.form}>
        <View style={styles.closeContainer}>
          <MaterialIcons
            name="close"
            size={30}
            color="black"
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
          <ControllerInput
            name="senderStreet"
            required={true}
            label="Ulice"
            control={control}
          />
          <ControllerInput
            name="senderNumberStreet"
            required={true}
            label="číslo ulice"
            control={control}
          />
          <ControllerInput
            name="senderCity"
            required={true}
            label="Město"
            control={control}
          />
          <ControllerInput
            name="senderZipCode"
            required={true}
            label="PSČ"
            control={control}
          />
          <ControllerInput
            name="senderIco"
            required={true}
            label="IČO "
            control={control}
          />
          <ControllerInput
            name="senderDic"
            required={true}
            label="DIČ "
            control={control}
          />
          <ControllerInput
            name="senderEmail"
            required={true}
            label="Email"
            control={control}
          />
          <ControllerInput
            name="senderAccountNumber"
            required={true}
            label="Číslo účtu"
            control={control}
          />
          <Button
            style={styles.formBtn}
            mode="contained"
            onPress={handleSubmit(senderDataHandler)}
          >
            vytvořit hlavičku
          </Button>
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
  formBtn: {
    padding: 5,
    marginVertical: 20,
    borderRadius: 0,
    textTransform: "uppercase",
  },
});

export default UserForm;
