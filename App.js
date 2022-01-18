import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Alert,
  Modal,
  ScrollView,
} from "react-native";
import { Input } from "react-native-elements";
import { Loading } from "./components/loading";
import ListItem from "./components/listItems";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import * as Animatable from "react-native-animatable";

export default function App() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [addToDo, setAddToDo] = useState(false);

  // fetch To Do List
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/list");
        const json = await response.json();
        const res = json.result;
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // add To Do List
  useEffect(() => {
    const addTODO = async () => {
      const newTask = {
        name,
        status,
      };

      try {
        const response = await fetch("http://localhost:3000/add", {
          method: "POST",
          body: JSON.stringify(newTask),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
        });
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };
    
    addTODO();
  }, [addToDo]);

  const handleSubmit = () => {
    setAddToDo(!addToDo);
    setShowModal(!showModal);
  };

  const closeModal = () => {
    Alert.alert("Modal has been closed.");
    setShowModal(!showModal);
  };

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <ScrollView>
            <Text style={styles.text}>{"To Do List"}</Text>
            <ListItem data={data} />
            <View>
              <TouchableHighlight
                onPress={() => setShowModal(!showModal)}
                style={styles.solid}
              >
                <Text style={styles.solidText}>Add To Do List</Text>
              </TouchableHighlight>
            </View>

            {/* Modal to add to do*/}
            <View>
              <Modal
                animationType={"slide"}
                transparent={false} //modal
                visible={showModal}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}
              >
                <View style={styles.modal}>
                  <Input
                    placeholder="Name"
                    onChangeText={(name) => setName(name)}
                    value={name}
                  />
                </View>
                <View style={styles.modal}>
                  <Input
                    placeholder="Status"
                    onChangeText={(status) => setStatus(status)}
                    value={status}
                  />
                </View>
                <View style={styles.modal}>
                  <Button
                    onPress={(value) => handleSubmit(value)}
                    color="#4682B4"
                    title="Submit"
                  />
                </View>
                <View style={styles.modal}>
                  <Button onPress={closeModal} color="#a9a9a9" title="Close" />
                </View>
              </Modal>
            </View>
          </ScrollView>
        </Animatable.View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingTop: 20,
    margin: 20,
    fontSize: 50,
    fontWeight: "bold",
  },
  solid: {
    width: "100%",
    backgroundColor: "#4682B4",
    padding: 15,
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 24,
  },
  solidText: {
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 3,
    fontFamily: "Roboto_400Regular",
    color: "#FFF",
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
});
