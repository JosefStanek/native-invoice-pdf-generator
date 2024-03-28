import { createStackNavigator } from "@react-navigation/stack";
import PdfHeaderScreen from "../screens/PdfHeaderScreen";
import PdfContentScreen from "../screens/PdfContentScreen";
const Stack = createStackNavigator();

const CreateStackNavigatior = () => {
  return (
    <Stack.Navigator initialRouteName="Header">
      <Stack.Screen
        name="Header"
        options={{ headerTitle: "Záhlaví" }}
        component={PdfHeaderScreen}
      />
      <Stack.Screen
        name="Content"
        options={{ headerTitle: "Položky" }}
        component={PdfContentScreen}
      />
    </Stack.Navigator>
  );
};

export default CreateStackNavigatior;
