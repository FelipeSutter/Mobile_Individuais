import { Text, View } from "react-native";
import styles from "./style";
import Input from "../../components/MeuInput";
import SuperButton from "../../components/MeuButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const navigation = useNavigation();

  const myAlert = () => {
    if (!email || !senha) {
      alert("Email ou senha vazios.");
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Input
        label="Email:"
        placeholder="Digite seu email"
        mask={false}
        setValor={setEmail}
      />
      <Input
        label="Senha:"
        placeholder="Digite sua senha"
        mask={true}
        setValor={setSenha}
      />
      <SuperButton fn={myAlert} textButton="Entrar" />
    </View>
  );
};

export default Login;
