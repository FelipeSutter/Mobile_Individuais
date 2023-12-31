import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Input from "../../components/MeuInput";
import SuperButton from "../../components/MeuButton";
import ActiveModal from "../../components/ActiveModal";
import alcoolImg from "../../../assets/alcool-img.png";
import gasolinaImg from "../../../assets/gasolina-img.png";

export default function Home() {
  const [gasolina, setGasolina] = useState("");
  const [alcool, setAlcool] = useState("");
  const [resultado, setResultado] = useState("");
  const [modal, setModal] = useState(false);

  const calcularMedia = () => {
    setResultado(gasolina / alcool);
    setModal(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          source={require("../../../assets/gasolina.png")}
          style={{ width: 150, height: 200 }}
        />
      </View>
      <Input
        label="Gasolina (preço por L)"
        placeholder="6.50"
        mask={false}
        type="numeric"
        setValor={setGasolina}
      />
      <Input
        label="Alcool (preço por L)"
        placeholder="4.50"
        mask={false}
        type="numeric"
        setValor={setAlcool}
      />
      <SuperButton textButton="Calcular" fn={calcularMedia} />
      <Modal visible={modal} transparent={false}>
        <ActiveModal
          img={resultado <= 0.7 ? alcoolImg : gasolinaImg}
          label={
            resultado <= 0.7
              ? "Álcool é mais vantajoso"
              : "Gasolina é mais vantajosa"
          }
          resultado={resultado}
          gasolina={gasolina}
          alcool={alcool}
          handleClose={() => setModal(false)}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#270b53",
  },
  containerImg: {
    width: "100%",
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
