import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import UserScreen from "../screens/UserScreen";
import CreateScreen from "../screens/CreateScreen";
import PdfScreen from "../screens/PdfScreen";
import TemplatesScreen from "../screens/TemplatesScreen";
import { StyleSheet } from "react-native";
const Tab = createBottomTabNavigator();
const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="User"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            title: "Šablony",
            tabBarIcon: ({ focused, color }) => (
              <MaterialIcons
                name="person"
                size={24}
                color={color}
                style={focused ? styles.focused : null}
              />
            ),
          }}
        />
        <Tab.Screen
          name="PDF"
          component={PdfScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <MaterialIcons
                name="picture-as-pdf"
                size={24}
                color={color}
                style={focused ? styles.focused : null}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreateScreen}
          options={{
            title: "Vytvořit pdf",
            tabBarIcon: ({ focused, color }) => (
              <MaterialIcons
                name="add-box"
                size={24}
                color={color}
                style={focused ? styles.focused : null}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Templates"
          component={TemplatesScreen}
          options={{
            title: "Šablony",
            tabBarIcon: ({ focused, color }) => (
              <MaterialIcons
                name="list-alt"
                size={24}
                color={color}
                style={focused ? styles.focused : null}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  focused: {
    width: 70,
    aspectRatio: 1,
    position: "relative",
    top: -25,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 400,
    textAlign: "center",
  },
});

export default Navigation;
