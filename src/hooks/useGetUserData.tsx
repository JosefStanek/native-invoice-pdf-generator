import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setSender } from "../store/Slices/senderSlice";

const useGetUserData = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    senderCompanyName: "",
    senderStreet: "",
    senderNumberStreet: "",
    senderZipCode: "",
    senderCity: "",
    senderIco: "",
    senderDic: "",
    senderEmail: "",
    senderAccountNumber: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem("userData");
      if (value !== null) {
        const parsedData = JSON.parse(value);
        setData(parsedData);
        dispatch(setSender(parsedData));
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return { data, loading, error, reloadData: loadData };
};

export default useGetUserData;
