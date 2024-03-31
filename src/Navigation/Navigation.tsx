import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import CreateScreen from "../screens/CreateScreen";
import PdfScreen from "../screens/PdfScreen";
import TemplatesScreen from "../screens/TemplatesScreen";
const Tab = createBottomTabNavigator();
const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="PDF"
          component={PdfScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="picture-as-pdf" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreateScreen}
          options={{
            title: "Vytvořit pdf",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="add-box" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Templates"
          component={TemplatesScreen}
          options={{
            title: "Šablony",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="list-alt" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
