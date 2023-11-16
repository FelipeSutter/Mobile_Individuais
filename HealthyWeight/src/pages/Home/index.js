import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "../../styles/style-home";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>HealthyWeight</Text>
      <Text style={styles.text}>O seu app de cálculo IMC!</Text>
      <SafeAreaView style={styles.containerAround}>
        <Text style={styles.textContainer}>Faça o seu cálculo já!</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Home;
