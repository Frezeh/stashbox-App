import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
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
        {/* First Card */}
        <View
          style={{
            marginTop: 10,
            marginLeft: 30,
            marginRight: 10,
          }}
        >
          <ImageBackground
            source={require("../assets/masked.png")}
            style={{ width: 284, height: 138 }}
          >
            <View style={{ flex: 1, margin: 25 }}>
              <View>
                <Text style={{ fontSize: 9, color: "#FFFFFF" }}>
                  {"Total Available balance"}
                </Text>
              </View>
              <View style={{ marginBottom: 15 }}>
                <Text
                  style={{ fontSize: 31, fontWeight: "bold", color: "#FFFFFF" }}
                >
                  {"$25,958,485"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <TouchableOpacity
                    style={{
                      width: 108,
                      height: 29,
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        color: "#00217B",
                        textAlign: "center",
                        paddingTop: 5,
                      }}
                    >
                      {"Fund wallet"}
                    </Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity
                    style={{
                      width: 108,
                      height: 29,
                      borderWidth: 0.5,
                      borderColor: "#FFFFFF",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 9,
                        color: "#FFFFFF",
                        textAlign: "center",
                        paddingTop: 5,
                      }}
                    >
                      {"Withdraw wallet"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
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

const Dashboard = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={{ marginBottom: 24, marginTop: 50 }}>
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>
              {"Dashboard"}
            </Text>
            <Text style={{ fontsize: 14, color: "#525252" }}>
              {"Sed ut perspiciatis unde omnis iste natus error sit"}
            </Text>
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

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
  },
});
