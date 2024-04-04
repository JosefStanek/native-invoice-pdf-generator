import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import PdfHeaderScreen from "../screens/PdfHeaderScreen";
import PdfContentScreen from "../screens/PdfContentScreen";
import { useTheme } from "react-native-paper";
const Stack = createStackNavigator();

const CreateStackNavigatior = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Header"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTintColor: theme.colors.secondary,
      }}
    >
      <Stack.Screen
        name="Header"
        options={{ headerTitle: "Odběratel" }}
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
