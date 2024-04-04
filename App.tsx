import "react-native-gesture-handler";
import Navigation from "./src/Navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import ToastManager from "toastify-react-native";
import ThemeProvider from "./src/theme/ThemeProvider";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <StatusBar style="light" />
        <Navigation />
        <ToastManager />
      </ThemeProvider>
    </Provider>
  );
}
