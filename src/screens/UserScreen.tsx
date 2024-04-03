import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import UserForm from "../components/UserScreen/UserForm";
import { UserScreenProps } from "../types/NavigationType";
import { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Modal } from "react-native";
import useGetUserData from "../hooks/useGetUserData";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Error from "../components/ui/Error";
import UserInfo from "../components/UserScreen/UserInfo";
const UserScreen: React.FC<UserScreenProps> = ({ navigation, route }) => {
  const { data, loading, error } = useGetUserData();
  const [showModal, setShowModal] = useState(false);
  const sender = useSelector((state: RootState) => state.sender);
  const hasData = sender.senderIco !== "";
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            marginRight: 10,
          }}
        >
          <MaterialIcons
            name={hasData ? "edit-square" : "add-to-photos"}
            size={30}
            color="blue"
            onPress={() => setShowModal(true)}
          />
        </View>
      ),
    });
  }, [hasData]);

  return (
    <View style={{ flex: 1 }}>
      {hasData && <UserInfo />}
      {!hasData && (
        <Text style={styles.infoTitle}>
          Zatím neexistuje žádná vyplněná hlavička.
        </Text>
      )}
      <Modal visible={showModal}>
        {loading && <LoadingSpinner />}
        {data && <UserForm closeModal={() => setShowModal(false)} />}
        {error && <Error message="Něco se pokazilo" />}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  infoTitle: {
    marginTop: 20,
    textAlign: "center",
  },
});

export default UserScreen;
