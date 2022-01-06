import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { CheckBox } from "react-native-elements";

const Registration = ({ setToggleNavigation, setToggleRegistration }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usd, setUsd] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(true);
  
  const toggleRemember = () => {
    setRemember(!remember);
  };

  const toggleShowPass = () => {
    setShowPass(true);
  };

  const handlePress = () => {
    setToggleNavigation(true);
    setToggleRegistration(false);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={{ marginBottom: 40 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {"Create an account"}
            </Text>
            <Text style={{ fontsize: 14 }}>
              {"Create an account to continue"}
            </Text>
          </View>
          <View>
            <Text style={{ fontsize: 14 }}>{"Email"}</Text>
          </View>
          <View>
            <TextInput
              placeholder="Topebanlosin@gmail.com"
              placeholderTextColor="#000000"
              leftIcon={{
                type: "font-awesome",
                name: "user-o",
                color: "#000000",
              }}
              onChangeText={(email) => setEmail(email)}
              value={email}
              style={styles.formInput}
            />
          </View>
          <View>
            <Text style={{ fontsize: 14 }}>{"Password"}</Text>
          </View>
          <View>
            <TextInput
              placeholder="*****************"
              placeholderTextColor="#000000"
              leftIcon={{ type: "font-awesome", name: "key", color: "#000000" }}
              onChangeText={(password) => setPassword(password)}
              value={password}
              style={styles.formInput}
              secureTextEntry={showPass}
            />
          </View>
          <View>
            <Text style={{ fontsize: 14 }}>{"Confirm password"}</Text>
          </View>
          <View>
            <TextInput
              placeholder="*****************"
              placeholderTextColor="#000000"
              leftIcon={{ type: "font-awesome", name: "key", color: "#000000" }}
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
              value={confirmPassword}
              style={styles.formInput}
              secureTextEntry={showPass}
            />
          </View>
          <View>
            <Text style={{ fontsize: 14 }}>{"Select currency"}</Text>
          </View>
          <View>
            <TextInput
              placeholder="United States Dollar (USD)"
              placeholderTextColor="#000000"
              leftIcon={{
                type: "font-awesome",
                name: "user-o",
                color: "#000000",
              }}
              onChangeText={(usd) => setUsd(usd)}
              value={usd}
              style={styles.formInput}
            />
          </View>
          <View style={styles.formCheckbox}>
            <CheckBox
              title="I accept these terms and conditions"
              checked={remember}
              onPress={toggleRemember}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{
                width: 341,
                height: 48,
                backgroundColor: "#2994FF",
                top: 50,
                alignItems: "center",
                borderRadius: 10,
                padding: 10,
                width: 264,
                height: 48,
                justifyContent: "center",
                alignItems: "center",
                zIndex: 10,
                position: "absolute",
              }}
              onPress={(e) => handlePress(e)}
            >
              <Text
                style={{ fontSize: 14, color: "white", fontweight: "bold" }}
              >
                {"Create Account"}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {/* <Button onPress={(e) => handlePress(e)}></Button> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  formButton: {
    margin: 20,
  },
  formInput: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    marginBottom: 20,
    width: 341,
    height: 41,
  },
  btnEye: {
    position: "absolute",
    top: 10,
    right: 37,
  },
  formCheckbox: {
    alignItems: "left",
  },
});
