import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const LeftSwipeActions = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <TouchableOpacity onPress={() => alert("Pressed")}>
        <Text
          style={{
            color: "#1b1a17",
            paddingHorizontal: 10,
            fontWeight: "600",
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}
        >
          Edit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const rightSwipeActions = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <TouchableOpacity onPress={() => alert("Pressed")}>
        <Text
          style={{
            color: "#1b1a17",
            paddingHorizontal: 10,
            fontWeight: "600",
            paddingHorizontal: 30,
            paddingVertical: 20,
          }}
        >
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const swipeFromLeftOpen = () => {
  alert("Press edit to edit name and status");
};

const swipeFromRightOpen = () => {
  alert("Press delete to delete name and status");
};

const ListItem = ({ data }) => {
  return data.map((data) => (
    <Swipeable
      renderLeftActions={LeftSwipeActions}
      renderRightActions={rightSwipeActions}
      onSwipeableRightOpen={swipeFromRightOpen}
      onSwipeableLeftOpen={swipeFromLeftOpen}
    >
      <View key={data._id} style={{ flexDirection: "row" }}>
        <View
          style={
            data.status === "in-progress" ? styles.pending : styles.complete
          }
        >
          <View style={styles.inputContainer}>
            <View style={styles.innerText}>
              <Text style={styles.date}>Date: {data.createdAt}</Text>
            </View>
            <View style={styles.inputText}>
              <Text style={styles.name}>{data.name}</Text>
              <Text style={styles.status}>{data.status}</Text>
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
  ));
};

export default ListItem;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    complete: {
      borderLeftWidth: 10,
      borderLeftColor: "#2ecc71",
      borderWidth: 1,
      borderColor: "#2ecc71",
      height: 150,
      width: 300,
      margin: 20,
    },
    pending: {
      borderLeftWidth: 10,
      borderLeftColor: "#ffff00",
      borderWidth: 1,
      borderColor: "#ffff00",
      height: 150,
      width: 300,
      margin: 20,
    },
    container: {
      flex: 1,
    },
    inputText: {
      flexDirection: "row",
      justifyContent: "space-between",
      // alignItems: "flex-end",
    },
    innerText: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 50,
    },
    inputContainer: {
      flexDirection: "column",
      justifyContent: "space-between",
      margin: 10,
    },
    date: {
      fontSize: 10,
    },
    name: {
      fontSize: 15,
      fontWeight: "bold",
    },
    status: {
      fontSize: 15,
      fontWeight: "bold",
      marginLeft: 20,
    },
  });