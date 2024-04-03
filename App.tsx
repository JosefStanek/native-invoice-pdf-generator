import "react-native-gesture-handler";
import Navigation from "./src/Navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import ToastManager from "toastify-react-native";
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <ToastManager />
    </Provider>
  );
}
