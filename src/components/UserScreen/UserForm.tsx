import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import ControllerInput from "../reusable/ControllerInput";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface formData {
  senderAccountNumber: string;
  senderCity: string;
  senderCompanyName: string;
  senderDic: string;
  senderEmail: string;
  senderIco: string;
  senderNumberStreet: string;
  senderStreet: string;
  senderZipCode: string;
}

interface UserFormProps {
  defaultValue: formData;
}
const UserForm: React.FC<UserFormProps> = ({ defaultValue }) => {
  const { control, handleSubmit, reset } = useForm<formData>({
    defaultValues: defaultValue,
  });
  const senderDataHandler = async (data: formData) => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(data));
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
    } catch (error) {
      console.error("Chyba při ukládání formulářových dat:", error);
    }
  };
  return (
    <ScrollView style={styles.form}>
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
          label="číslo ulice např: 1021/2"
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
          label="IČO - Identifikační číslo"
          control={control}
        />
        <ControllerInput
          name="senderDic"
          required={true}
          label="DIČ - Identifikační číslo"
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
  );
};

const styles = StyleSheet.create({
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
