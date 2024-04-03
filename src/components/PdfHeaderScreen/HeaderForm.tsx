import { ScrollView, View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import ControllerInput from "../reusable/ControllerInput";
import { useDispatch } from "react-redux";
import { addSubscriber } from "../../store/Slices/subscriberSlice";

interface defaultValues {
  subscriberCompanyName: string;
  subscriberStreet: string;
  subscriberNumberStreet: string;
  subscriberZipCode: string;
  subscriberCity: string;
  subscriberIco: string;
  subscriberDic: string;
  subscriberEmail: string;
}

const HeaderForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation<any>();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<defaultValues>({
    defaultValues: {
      subscriberCompanyName: "",
      subscriberStreet: "",
      subscriberNumberStreet: "",
      subscriberZipCode: "",
      subscriberCity: "",
      subscriberIco: "",
      subscriberDic: "",
      subscriberEmail: "",
    },
  });

  const sendHeaderHandler = (data: defaultValues) => {
    const subscriber = {
      companyName: data.subscriberCompanyName,
      street: data.subscriberStreet,
      numberStreet: data.subscriberNumberStreet,
      zipCode: data.subscriberZipCode,
      city: data.subscriberCity,
      ico: data.subscriberIco,
      dic: data.subscriberDic,
      email: data.subscriberEmail,
    };
    dispatch(addSubscriber(subscriber));
    reset({
      subscriberCompanyName: "",
      subscriberStreet: "",
      subscriberNumberStreet: "",
      subscriberZipCode: "",
      subscriberCity: "",
      subscriberIco: "",
      subscriberDic: "",
      subscriberEmail: "",
    });
    navigate.navigate("Content");
  };
  return (
    <ScrollView style={{ padding: 10.0 }}>
      <View style={{ gap: 10 }}>
        <ControllerInput
          name="subscriberCompanyName"
          label="Název firmy"
          control={control}
          required={true}
        />
        {errors.subscriberCompanyName && (
          <Text style={styles.error}>Pole nesmí být prázdné.</Text>
        )}

        <ControllerInput
          name="subscriberStreet"
          label="Ulice"
          control={control}
          required={true}
        />
        {errors.subscriberStreet && (
          <Text style={styles.error}>Pole nesmí být prázdné.</Text>
        )}

        <ControllerInput
          name="subscriberNumberStreet"
          label="Ulice"
          control={control}
          required={true}
        />
        {errors.subscriberNumberStreet && (
          <Text style={styles.error}>Pole nesmí být prázdné.</Text>
        )}

        <ControllerInput
          name="subscriberZipCode"
          label="PSČ"
          control={control}
          required={true}
        />
        {errors.subscriberZipCode && (
          <Text style={styles.error}>Pole nesmí být prázdné.</Text>
        )}

        <ControllerInput
          name="subscriberCity"
          label="Město"
          control={control}
          required={true}
        />
        {errors.subscriberCity && (
          <Text style={styles.error}>Pole nesmí být prázdné.</Text>
        )}

        <ControllerInput
          name="subscriberIco"
          label="IČO"
          control={control}
          required={true}
        />
        {errors.subscriberIco && (
          <Text style={styles.error}>Pole nesmí být prázdné.</Text>
        )}

        <ControllerInput
          name="subscriberDic"
          label="DIČO"
          control={control}
          required={true}
        />
        {errors.subscriberDic && (
          <Text style={styles.error}>Pole nesmí být prázdné.</Text>
        )}

        <ControllerInput
          name="subscriberEmail"
          label="Email"
          control={control}
          required={true}
        />
        {errors.subscriberEmail && (
          <Text style={styles.error}>Pole nesmí být prázdné.</Text>
        )}
      </View>

      <Button
        style={{ margin: 20 }}
        mode="contained"
        onPress={handleSubmit(sendHeaderHandler)}
      >
        další
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default HeaderForm;
