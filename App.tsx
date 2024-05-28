import "react-native-gesture-handler";
import Navigation from "./src/Navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import ToastManager from "toastify-react-native";
import ThemeProvider from "./src/theme/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import { I18nextProvider } from "react-i18next";
import initI18n from "./src/i18/i18n.config";
import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import i18next from "i18next";
import LoadingSpinner from "./src/components/ui/LoadingSpinner";
export default function App() {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);

  useEffect(() => {
    const initializeI18n = async () => {
      await initI18n();
      setIsI18nInitialized(true);
    };

    initializeI18n();
  }, []);

  if (!isI18nInitialized) {
    return (
      <SafeAreaView style={styles.container}>
        <LoadingSpinner />
      </SafeAreaView>
    );
  }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
