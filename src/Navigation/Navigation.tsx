import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import UserScreen from "../screens/UserScreen";
import CreateScreen from "../screens/CreateScreen";
import PdfScreen from "../screens/PdfScreen";
import { StyleSheet, View } from "react-native";
import { RootTabParamList } from "../types/NavigationType";
import { useTheme } from "react-native-paper";
import SettingsScreen from "../screens/SettingsScreen";
import { useTranslation } from "react-i18next";

const Tab = createBottomTabNavigator<RootTabParamList>();

const Navigation: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const userTitle = t("routerTitle.userTitle");
  const settingsTitle = t("routerTitle.settingsTitle");
  const createStackTitle = t("createScreenStack.title");
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="User"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.secondary,
          headerStyle: { backgroundColor: theme.colors.primary },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.secondary,
        }}
      >
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            title: userTitle,
            tabBarIcon: ({ focused, color }) => (
              <View style={focused ? styles.focused : null}>
                <MaterialIcons name="person" size={24} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreateScreen}
          options={{
            title: createStackTitle,
            tabBarIcon: ({ focused, color }) => (
              <View style={focused ? styles.focused : null}>
                <MaterialIcons name="add-box" size={24} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="PDF"
          component={PdfScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <View style={focused ? styles.focused : null}>
                <MaterialIcons name="picture-as-pdf" size={24} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: settingsTitle,
            tabBarIcon: ({ focused, color }) => (
              <View style={focused ? styles.focused : null}>
                <MaterialIcons
                  name="settings-applications"
                  size={24}
                  color={color}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  focused: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    aspectRatio: 1,
    position: "relative",
    top: -25,
    backgroundColor: "white",
    borderRadius: 400,
    textAlign: "center",
  },
});

export default Navigation;
