import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "../../styles/style-home";

const Main = () => {
  return (
    <SafeAreaView style={styles.containerHome}>
      <Text style={styles.textContainer}>Faça o seu cálculo já!</Text>
    </SafeAreaView>
  );
};

export default Main;
