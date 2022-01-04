import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

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
    backgroundColor: "#80BFFF"
  },
  image: {
    height: 400,
    width: 400
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 80,
    color: "#000E48"
  },
  text: {
    fontSize: 15,
    marginTop: 40,
    color: "#000E48",
    margin: 10,
  },
});

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return <Slider />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
        />
      );
    }
  }
}
