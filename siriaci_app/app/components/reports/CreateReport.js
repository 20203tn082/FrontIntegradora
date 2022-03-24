import {
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  DatePickerAndroid,
} from "react-native";
import { Icon,Image,Button } from "react-native-elements";
import React, { useState } from "react";

export default function CreateReport() {
  const [selectedValue, setSelectedValue] = useState("");
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text>
        Aspecto
        <Icon
          type="material-community"
          name={"gamepad-circle"}
          size={20}
          color="#2f2c79"
        />
      </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 60, width: 250, marginTop: 10 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Agua" value="Agua" />
        <Picker.Item label="Flora y Fauna" value="Flora y Fauna" />
        <Picker.Item label="Electricidad" value="Electricidad" />
        <Picker.Item label="Residuos Solidos" value="Residuos Solidos" />
      </Picker>
      <Text style={{ marginTop: 10 }}>
        Descripción
        <Icon
          type="material-community"
          name={"format-align-justify"}
          size={20}
          marginLeft={20}
          color="#2f2c79"
        />
      </Text>
      <TextInput
        style={styles.textI}
        placeholder="Escribe brevemente la incidencia!"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ marginTop: 10 }}>
       Evidencia
        <Icon
          type="material-community"
          name={"camera"}
          size={20}
          marginLeft={20}
          color="#2f2c79"
        />
      </Text>
     <Button style={styles.btn}
        title="Seleccionar"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}>
         
     </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 20,
  },
  textI: {
    height: 100,
    width: 380,
  },
  btnContainer: {
    marginTop:10,
    width: "60%",
    height:60,
  },
  btn: {
    marginLeft:10,
    marginBottom:20,
    color: "#000",
    backgroundColor: "gray",
  },
});
