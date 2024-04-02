import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useGetUserData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem("userData");
      if (value !== null) {
        setData(JSON.parse(value));
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
