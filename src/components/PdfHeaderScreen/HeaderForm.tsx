import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import ControllerInput from "../reusable/ControllerInput";
import { useDispatch } from "react-redux";
import { addSubscriber } from "../../store/Slices/subscriberSlice";
import BasicButton from "../ui/BasicButton";
import InputError from "./InputError";
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
          <InputError message="Pole nesmí být prázdné." />
        )}

        <ControllerInput
          name="subscriberStreet"
          label="Ulice"
          control={control}
          required={true}
        />
        {errors.subscriberStreet && (
          <InputError message="Pole nesmí být prázdné." />
        )}

        <ControllerInput
          name="subscriberNumberStreet"
          label="Ulice"
          control={control}
          required={true}
        />
        {errors.subscriberNumberStreet && (
          <InputError message="Pole nesmí být prázdné." />
        )}

        <ControllerInput
          name="subscriberZipCode"
          label="PSČ"
          control={control}
          required={true}
        />
        {errors.subscriberZipCode && (
          <InputError message="Pole nesmí být prázdné." />
        )}

        <ControllerInput
          name="subscriberCity"
          label="Město"
          control={control}
          required={true}
        />
        {errors.subscriberCity && (
          <InputError message="Pole nesmí být prázdné." />
        )}

        <ControllerInput
          name="subscriberIco"
          label="IČO"
          control={control}
          required={true}
        />
        {errors.subscriberIco && (
          <InputError message="Pole nesmí být prázdné." />
        )}

        <ControllerInput
          name="subscriberDic"
          label="DIČO"
          control={control}
          required={true}
        />
        {errors.subscriberDic && (
          <InputError message="Pole nesmí být prázdné." />
        )}

        <ControllerInput
          name="subscriberEmail"
          label="Email"
          control={control}
          required={true}
        />
        {errors.subscriberEmail && (
          <InputError message="Pole nesmí být prázdné." />
        )}
      </View>

      <View style={{ paddingBottom: 50, paddingTop: 10 }}>
        <BasicButton
          uppercase
          title="další"
          mode="contained"
          onPress={handleSubmit(sendHeaderHandler)}
        />
      </View>
    </ScrollView>
  );
};

export default HeaderForm;
