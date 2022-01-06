import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Slider from "./components/slider";
import BottomTabNavigator from "./navigation/tabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./screens/dashboard";
import MyCards from "./screens/myCards";
import Registration from "./screens/registration";

export default function App() {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [toggleSlider, setToggleSlider] = useState(true);
  const [toggleRegistration, setToggleRegistration] = useState(false);

  return (
    <View style={styles.container}>
      {toggleSlider && (
        <Slider
          setToggleNavigation={setToggleNavigation}
          setToggleRegistration={setToggleRegistration}
          setToggleSlider={setToggleSlider}
        />
      )}

      {toggleNavigation && (
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      )}

      {toggleRegistration && (
        <Registration
          setToggleNavigation={setToggleNavigation}
          setToggleRegistration={setToggleRegistration}
          setToggleSlider={setToggleSlider}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
