import "react-native-gesture-handler";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import Produto from "../src/pages/Produtos";

const Stack = createNativeStackNavigator();

const StackNavigate = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Produto" component={Produto} />
    </Stack.Navigator>
  );
};

export default StackNavigate;
