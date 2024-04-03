import { View, Text, StyleSheet } from "react-native";
import ScreenWrapper from "../components/ui/ScreenWrapper";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import UserForm from "../components/UserScreen/UserForm";
import { UserScreenProps } from "../types/NavigationType";
import { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Modal, useColorScheme } from "react-native";
import useGetUserData from "../hooks/useGetUserData";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Error from "../components/ui/Error";
import UserInfo from "../components/UserScreen/UserInfo";
import { useTheme } from "react-native-paper";
const UserScreen: React.FC<UserScreenProps> = ({ navigation }) => {
  const colorSchema = useColorScheme();
  const theme = useTheme();
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
            color={theme.colors.secondary}
            onPress={() => setShowModal(true)}
          />
        </View>
      ),
    });
  }, [hasData, colorSchema]);

  return (
    <ScreenWrapper>
      {hasData && <UserInfo />}
      {!hasData && (
        <Text style={styles.infoTitle}>
          Zatím neexistuje žádná vyplněná hlavička.
        </Text>
      )}
      <Modal visible={showModal} animationType="slide">
        {loading && <LoadingSpinner />}
        {data && <UserForm closeModal={() => setShowModal(false)} />}
        {error && <Error message="Něco se pokazilo" />}
      </Modal>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  infoTitle: {
    marginTop: 20,
    textAlign: "center",
  },
});

export default UserScreen;
