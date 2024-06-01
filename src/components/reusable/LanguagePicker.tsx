import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18next from "i18next";
import { useTheme } from "react-native-paper";
const LanguagePicker: React.FC = () => {
  const [language, setLanguage] = useState("cs");
  const { t } = useTranslation();
  const theme = useTheme();
  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem("language");
      if (savedLanguage) {
        setLanguage(savedLanguage);
        i18next.changeLanguage(savedLanguage);
      }
    };

    loadLanguage();
  }, []);

  const handleLanguageChange = async (value: string) => {
    setLanguage(value);
    i18next.changeLanguage(value);
    await AsyncStorage.setItem("language", value);
  };
  return (
    <View>
      <Picker
        selectedValue={language}
        onValueChange={handleLanguageChange}
        dropdownIconColor={theme.colors.secondary}
      >
        <Picker.Item
          label={t("LanguagePicker.cs")}
          value={"cs"}
          color={theme.colors.secondary}
        />
        <Picker.Item
          label={t("LanguagePicker.en")}
          value={"en"}
          color={theme.colors.secondary}
        />
      </Picker>
    </View>
  );
};

export default LanguagePicker;
