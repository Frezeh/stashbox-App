import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import * as Animatable from "react-native-animatable";
import BottomTabNavigator from "../navigation/tabNavigation";
import { NavigationContainer } from "@react-navigation/native";

const slides = [
  {
    key: 1,
    title: "Pay with card",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",
    image: require("../assets/surface1.png"),
    backgroundColor: "#80BFFF",
  },
  {
    key: 2,
    title: "Grow your funds",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",
    image: require("../assets/bank.png"),
    backgroundColor: "#80BFFF",
  },
  {
    key: 3,
    title: "Pay anywhere, anytime",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",
    image: require("../assets/atm.png"),
    backgroundColor: "#80BFFF",
  },
];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#80BFFF",
  },
  image: {
    height: 400,
    width: 400,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 80,
    color: "#000E48",
  },
  text: {
    fontSize: 15,
    marginTop: 40,
    color: "#000E48",
    textAlign: "center",
  },
});

export default function Slider({
  setToggleNavigation,
  setToggleRegistration,
  setToggleSlider,
}) {
  const [showRealApp, setShowRealApp] = useState(false);

  const _onDone = (e) => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setToggleRegistration(true);
    setToggleSlider(false);
    // setToggleNavigation(true);
    // setShowRealApp(true);
    // console.log('fffffffffffffff')
  };

  const _renderItem = ({ item }) => {
    return (
      <Animatable.View animation="fadeInRightBig" duration={2000} delay={1000}>
        <View style={styles.slide}>
          <Image source={item.image} />
          <Text style={styles.title}>{item.title}</Text>
          <View style={{ width: 300, justifyContent: "center" }}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
          {item.key === 3 && (
            <TouchableOpacity
              style={{
                zIndex: 10,
                position: "absolute",
                top: 50,
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                width: 264,
                height: 48,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#2994FF",
              }}
              // onpress={(e) => _onDone(e)}
            >
              <Text
                style={{ fontSize: 18, color: "white", fontweight: "bold" }}
              >
                {"Get Started"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </Animatable.View>
    );
  };

  if (showRealApp) {
    return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    );
  } else {
    return (
      <AppIntroSlider
        // showNextButton={false}
        // showDoneButton={false}
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
      />
    );
  }
}
