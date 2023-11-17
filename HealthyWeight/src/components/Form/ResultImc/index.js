import { View, Text } from "react-native";
import React from "react";

const ResultImc = (props) => {
  return (
    <View>
      <Text>{props.resultImc}</Text>

      <Text>{props.messageResultImc}</Text>
    </View>
  );
};

export default ResultImc;
