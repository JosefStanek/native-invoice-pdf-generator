import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import PdfHeaderScreen from "../screens/PdfHeaderScreen";
import PdfContentScreen from "../screens/PdfContentScreen";
import { useTheme } from "react-native-paper";
import { useTranslation } from "react-i18next";
const Stack = createStackNavigator();

const CreateStackNavigatior = () => {
  const theme = useTheme();
  const { t } = useTranslation();
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
        options={{ headerTitle: t("createScreenStack.subscriberHeader") }}
        component={PdfHeaderScreen}
      />
      <Stack.Screen
        name="Content"
        options={{ headerTitle: t("createScreenStack.itemsHeader") }}
        component={PdfContentScreen}
      />
    </Stack.Navigator>
  );
};

export default CreateStackNavigatior;
