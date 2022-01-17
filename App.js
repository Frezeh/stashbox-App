import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeView } from "react-native";

export default function App() {
  return (
    <SafeView style={styles.container}>
     <Text>{'Get Started'}</Text>
      <StatusBar style="auto" />
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
