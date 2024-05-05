import "react-native-gesture-handler";
import Navigation from "./src/Navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import ToastManager from "toastify-react-native";
import ThemeProvider from "./src/theme/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import { I18nextProvider } from "react-i18next";
import i18next from "./src/i18/i18n.config";
export default function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <ThemeProvider>
          <StatusBar style="light" />
          <Navigation />
          <ToastManager />
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
}
