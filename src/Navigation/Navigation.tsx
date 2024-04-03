import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import UserScreen from "../screens/UserScreen";
import CreateScreen from "../screens/CreateScreen";
import PdfScreen from "../screens/PdfScreen";
import TemplatesScreen from "../screens/TemplatesScreen";
import { StyleSheet, View } from "react-native";
import { RootTabParamList } from "../types/NavigationType";
import { useTheme } from "react-native-paper";
const Tab = createBottomTabNavigator<RootTabParamList>();

const Navigation: React.FC = () => {
  const theme = useTheme();
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
          headerStyle: { backgroundColor: theme.colors.primary },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.secondary,
        }}
      >
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            title: "Hlavička",
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
            title: "Vytvořit pdf",
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

        {/* <Tab.Screen
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
        /> */}
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
