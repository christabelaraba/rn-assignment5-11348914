import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../ThemeContext";
import { ThemeLight, ThemeDark } from "../Data/mockupData";

const MyCards = () => {
  const { theme } = useContext(ThemeContext);

  const backgroundColor =
    theme === "light" ? ThemeLight.backgroundColor : ThemeDark.backgroundColor;

  return <View style={[styles.container, { backgroundColor }]}></View>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
};

export default MyCards;
