import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Background } from "@react-navigation/elements";

import { useCustomTheme } from "./Theme";
import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";

//type checking parameters of each route
type RootStackParamList = {
  Home: undefined,
  Login: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const theme = useCustomTheme();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.background,
      text: theme.colors.text,
      card: theme.colors.card,
      border: theme.colors.border,
      notification:theme.colors.notification,
      primary: theme.colors.primary
    },
  };

  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home Screen"}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;