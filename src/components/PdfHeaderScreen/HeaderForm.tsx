import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import ControllerInput from "../reusable/ControllerInput";
import { useDispatch } from "react-redux";
import { addSubscriber } from "../../store/Slices/subscriberSlice";
import BasicButton from "../ui/BasicButton";
import InputError from "./InputError";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
          label={t("subscriberForm.companyName")}
          control={control}
          required={true}
        />
        {errors.subscriberCompanyName && (
          <InputError message={t("errors.emptyInput")} />
        )}

        <ControllerInput
          name="subscriberStreet"
          label={t("subscriberForm.street")}
          control={control}
          required={true}
        />
        {errors.subscriberStreet && (
          <InputError message={t("errors.emptyInput")} />
        )}

        <ControllerInput
          name="subscriberNumberStreet"
          label={t("subscriberForm.streetNumber")}
          control={control}
          required={true}
        />
        {errors.subscriberNumberStreet && (
          <InputError message={t("errors.emptyInput")} />
        )}

        <ControllerInput
          name="subscriberZipCode"
          label={t("subscriberForm.referenceNumber")}
          control={control}
          required={true}
        />
        {errors.subscriberZipCode && (
          <InputError message={t("errors.emptyInput")} />
        )}

        <ControllerInput
          name="subscriberCity"
          label={t("subscriberForm.city")}
          control={control}
          required={true}
        />
        {errors.subscriberCity && (
          <InputError message={t("errors.emptyInput")} />
        )}

        <ControllerInput
          name="subscriberIco"
          label={t("subscriberForm.ico")}
          control={control}
          required={true}
        />
        {errors.subscriberIco && (
          <InputError message={t("errors.emptyInput")} />
        )}

        <ControllerInput
          name="subscriberDic"
          label={t("subscriberForm.dic")}
          control={control}
          required={true}
        />
        {errors.subscriberDic && (
          <InputError message={t("errors.emptyInput")} />
        )}

        <ControllerInput
          name="subscriberEmail"
          label={t("subscriberForm.email")}
          control={control}
          required={true}
        />
        {errors.subscriberEmail && (
          <InputError message={t("errors.emptyInput")} />
        )}
      </View>

      <View style={{ paddingBottom: 50, paddingTop: 10 }}>
        <BasicButton
          uppercase
          title={t("subscriberForm.nextButton")}
          mode="contained"
          onPress={handleSubmit(sendHeaderHandler)}
        />
      </View>
    </ScrollView>
  );
};

export default HeaderForm;
