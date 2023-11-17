import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "../../styles/style-home";

const Title = () => {
  return (
    <>
      <Text style={styles.text}>HealthyWeight</Text>
      <Text style={styles.text}>O seu app de cálculo IMC!</Text>
    </>
  );
};

export default Title;
