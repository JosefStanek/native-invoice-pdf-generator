import { View, Text, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import UserForm from "../components/UserScreen/UserForm";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useGetUserData from "../hooks/useGetUserData";
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
const UserScreen: React.FC = () => {
  const { sender } = useSelector((state: RootState) => state.sender);
  const [initFormData, setInitialFormData] = useState({
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
  const { data, error, loading } = useGetUserData();
  //   const hasData = sender.ico !== "";

  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={"large"} />
        </View>
      )}
      {/* {!loading && (
        <Text>Zdravím uživateli společnosti {sender.companyName}</Text>
      )} */}

      {data && <UserForm defaultValue={data} />}
      {error && <Text>Error</Text>}
    </View>
  );
};

export default UserScreen;
