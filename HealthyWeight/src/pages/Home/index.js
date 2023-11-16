import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "../../styles/style-home";
import Title from "../../components/Title";
import Main from "../../components/Main";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <Main />
    </SafeAreaView>
  );
};

export default Home;
