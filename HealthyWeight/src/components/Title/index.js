import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "../../styles/style-home";

const Title = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>HealthyWeight</Text>
      <Text style={styles.text}>O seu app de cálculo IMC!</Text>
    </SafeAreaView>
  );
};

export default Title;
