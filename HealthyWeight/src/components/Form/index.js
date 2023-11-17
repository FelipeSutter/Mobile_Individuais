import { View, Text, TextInput, Button, SafeAreaView } from "react-native";
import React, { useState } from "react";
import styles from "../../styles/style-home";
import ResultImc from "./ResultImc";

const Form = () => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  return (
    <SafeAreaView style={styles.containerHome}>
      <View style={{ width: "90%" }}>
        <Text style={styles.textContainer}>Altura</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. 1.70"
          keyboardType="numeric"
        />

        <Text style={styles.textContainer}>Peso</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. 80.5"
          keyboardType="numeric"
        />
        <Button title="Calcular Imc" />
      </View>
      {/* <ResultImc messageResultImc={messageImc} resultImc={imc} /> */}
    </SafeAreaView>
  );
};

export default Form;
