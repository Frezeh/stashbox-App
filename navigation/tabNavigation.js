import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import Dashboard from "../screens/dashboard";
import MyCards from "../screens/myCards";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "My Cards") {
            iconName = focused ? "credit-card" : "credit-card";
          }

          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              size={size}
              color={color}
              type="font-awesome"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "#2994FF",
        inactiveTintColor: "#868686",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="My Cards"
        component={MyCards}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
