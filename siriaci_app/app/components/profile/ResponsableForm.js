import { StyleSheet, Text, View, Picker, SafeAreaView, ScrollView, StatusBar } from "react-native";
import React, { useState } from "react";
import { Input, Button, Icon } from "react-native-elements";
import { isEmpty } from "lodash";

export default function ResponsableForm(props) {
  const [selectedValue, setSelectedValue] = useState("null");
  const { navigation, toastRef } = props;
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    email: "",
    telefono: "",
    aspecto: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    nombre: "",
    primerApellido: "",
    email: "",
    telefono: "",
    aspecto: "",
    password: "",
    confirmPassword: "",
  });

  const change = (event, type) => {
    setFormData({ ...formData, [type]: event.nativeEvent.text });
    //console.log(formData);
  };

  const registrer = () => {
    if (
      isEmpty(formData.nombre) ||
      isEmpty(formData.primerApellido) ||
      isEmpty(formData.email) ||
      isEmpty(formData.telefono) ||
      isEmpty(formData.aspecto) ||
      isEmpty(formData.password) ||
      isEmpty(formData.confirmPassword)
    ) {
      setError({
        nombre: "Campo obligatorio*",
        primerApellido: "Campo obligatorio*",
        email: "Campo obligatorio*",
        telefono: "Campo obligatorio*",
        aspecto: "Campo Obligatorio",
        password: "Campo obligatorio*",
        confirmPassword: "Campo obligatorio*",
      });
    } else {
      setError({
        nombre: "",
        primerApellido: "",
        email: "",
        telefono: "",
        aspecto: "",
        confirmPassword: "",
        password: "",
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <Input
        placeholder="Araceli"
        rightIcon={
          <Icon
            type="material-community"
            name="account"
            size={20}
            color="#131c46"
          />
        }
        label="Nombre:*"
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        onChange={(event) => change(event, "nombre")}
        errorMessage={error.nombre}
      />
      <Input
        placeholder="Garcia"
        label="Primer Apellido:*"
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        onChange={(event) => change(event, "primerApellido")}
        errorMessage={error.primerApellido}
      />
      <Input
        placeholder="Diaz"
        label="Segundo Apellido:"
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        onChange={(event) => change(event, "segundoApellido")}
      />
      <Input
        placeholder="araceligarcia@utez.edu.mx"
        rightIcon={
          <Icon
            type="material-community"
            name={"email"}
            size={20}
            color="#2f2c79"
          />
        }
        label="Correo Electronico:*"
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        secureTextEntry={showPassword}
        onChange={(event) => change(event, "email")}
        errorMessage={error.email}
      />
      <Input
        placeholder="7772997904"
        rightIcon={
          <Icon
            type="material-community"
            name={"cellphone"}
            size={20}
            color="#2f2c79"
          />
        }
        label="Tel??fono:*"
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        secureTextEntry={showPassword}
        onChange={(event) => change(event, "telefono")}
        errorMessage={error.telefono}
      />
       <Text style={styles.text1}>
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
        style={{ height: 60, width: 250, marginBottom:20 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        errorMessage={error.aspecto}
      >
        <Picker.Item label="Agua" value="Agua" />
        <Picker.Item label="Flora y Fauna" value="Flora y Fauna" />
        <Picker.Item label="Electricidad" value="Electricidad" />
        <Picker.Item label="Residuos Solidos" value="Residuos Solidos" />
      </Picker>
      <Input
        placeholder="***********"
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#2f2c79"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        label="Contrase??a:*"
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        secureTextEntry={showPassword}
        onChange={(event) => change(event, "password")}
        errorMessage={error.confirmPassword}
      />
      <Input
        placeholder="***********"
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#2f2c79"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        label="Confirmar contrase??a:*"
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        secureTextEntry={showPassword}
        onChange={(event) => change(event, "Confirmpassword")}
        errorMessage={error.confirmPassword}
      />
      <Button
        title="Registrarse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        icon={
          <Icon
            name="account-check"
            type="material-community"
            color="#fff"
            size={20}
          />
        }
        iconContainerStyle={{ marginRight: 20 }}
        onPress={registrer}
      />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  btnContainer: {
    width: "70%",
  },
  btn: {
    marginLeft:130,
    marginBottom:20,
    color: "#fff",
    backgroundColor: "#06986a",
  },
  labelInput:{
    color:"black"
  },
  text1:{
    marginLeft:10,
    fontFamily:"bold"
  }

});
