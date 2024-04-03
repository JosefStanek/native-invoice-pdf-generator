import { PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native";
import { LightTheme } from "./LightTheme";
import { DarkTheme } from "./DarkTheme";
interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? DarkTheme : LightTheme;
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default ThemeProvider;
