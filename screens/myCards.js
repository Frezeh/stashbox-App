import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import CreditCard from "../components/creditCards";

function Cards() {
  return (
    <View style={{ marginBottom: 40 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 20 }}
      >
        {/* My Credit Card 1*/}
        <View
          style={{
            marginTop: 10,
            marginLeft: 30,
            marginRight: 10,
          }}
        >
          <CreditCard name="Frank Ezeh" date="11/22" suffix="3904" />
        </View>
        {/* My Credit Card 2*/}
        <View
          style={{
            marginTop: 10,
            marginLeft: 30,
            marginRight: 10,
          }}
        >
          <CreditCard name="James Bond" date="03/25" suffix="4573" />
        </View>
        {/* My Credit Card 3*/}

        <View
          style={{
            marginTop: 10,
            marginLeft: 30,
            marginRight: 10,
          }}
        >
          <CreditCard name="Daniel Scholes" date="03/25" suffix="4573" />
        </View>
      </ScrollView>
    </View>
  );
}

function TransactionHistory() {
  return (
    <ScrollView
      style={{
        marginLeft: 30,
        marginRight: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 14, color: "#373737" }}>
            {"Transaction history"}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 14, color: "#808080" }}>
            {"All category"} {"⌄"}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          backgroundColor: "##F2F2F2",
          width: "100%",
          height: 2,
        }}
      ></View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 14, color: "#808080" }}>{"December 31"}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <View>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/food&drinks.png")}
          />
        </View>
        <View>
          <Text style={{ fontSize: 12, color: "#515151" }}>
            {"”Food & Drinks” restaurant"}
          </Text>
          <Text style={{ fontSize: 10, color: "#999999" }}>
            {"Cafe and restaurants"}
          </Text>
        </View>
        <Text style={{ fontSize: 20, color: "#373737" }}>{"-"}</Text>
        <Text style={{ fontSize: 16, color: "#373737" }}>{"480"}</Text>
        <Text style={{ fontSize: 10, color: "#999999" }}>{"UAH"}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <View>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/walmart.png")}
          />
        </View>
        <View>
          <Text style={{ fontSize: 12, color: "#515151" }}>
            {"”Walmart” store (Main Str. 13)"}
          </Text>
          <Text style={{ fontSize: 10, color: "#999999" }}>
            {"Groceries & food"}
          </Text>
        </View>
        <Text style={{ fontSize: 20, color: "#373737" }}>{"-"}</Text>
        <Text style={{ fontSize: 16, color: "#373737" }}>{"80"}</Text>
        <Text style={{ fontSize: 10, color: "#999999" }}>{"USD"}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <View>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/transfer.png")}
          />
        </View>
        <View>
          <Text style={{ fontSize: 12, color: "#515151" }}>
            {"Transfer from Alexey"}
          </Text>
          <Text style={{ fontSize: 12, color: "#999999" }}>
            {"Transactions"}
          </Text>
        </View>
        <Text style={{ fontSize: 18, color: "#39B54A" }}>{"6 000"}</Text>
        <Text style={{ fontSize: 10, color: "#999999" }}>{"UAH"}</Text>
      </View>
    </ScrollView>
  );
}

const MyCards = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ marginBottom: 24, marginTop: 50 }}>
              <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                {"My cards"}
              </Text>
              <Text style={{ fontsize: 10, color: "#525252" }}>
                {"Sed ut perspiciatis unde omnis iste natus error sit"}
              </Text>
            </View>
            <View style={{ marginTop: 45 }}>
              <Image
                style={{ width: 53, height: 53 }}
                source={require("../assets/add.png")}
              />
            </View>
          </View>
        </View>
        {/* Cards */}
        <Cards />
        {/* TransactionHistory */}
        <TransactionHistory />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
  },
});
