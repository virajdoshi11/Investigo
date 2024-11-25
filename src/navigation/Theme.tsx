import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

interface ThemeColors {
  background: string,
  border: string,
  card: string,
  notification: string,
  text: string,
  primary: string
}

interface Theme {
  dark: boolean
  colors: ThemeColors
}

export const lightTheme: Theme = {
  dark: false,
  colors: {
    background: Colors.light_background,
    border: Colors.light_border,
    card: Colors.light_card,
    notification: Colors.light_card,
    text: Colors.light_text,
    primary: Colors.themeColor
  }
};

export const darkTheme: Theme = {
  dark: true,
  colors: {
    background: Colors.dark_background,
    border: Colors.dark_border,
    card: Colors.dark_card,
    notification: Colors.dark_card,
    text: Colors.dark_text,
    primary: Colors.themeColor
  }
}

export const useCustomTheme = (): Theme => {
  const scheme = useColorScheme();
  return scheme === "dark" ? darkTheme : lightTheme;
}