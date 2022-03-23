import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Input, Button, Icon } from "react-native-elements"
import { isEmpty } from "lodash";

export default function EstudiantesForm(props) {
  const { navigation, toastRef } = props;
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    email: "",
    telefono: "",
    cuatrimestre: "",
    grupo: "",
    carrera: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    nombre: "",
    primerApellido: "",
    email: "",
    telefono: "",
    cuatrimestre: "",
    grupo: "",
    carrera: "",
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
      isEmpty(formData.cuatrimestre) ||
      isEmpty(formData.grupo) ||
      isEmpty(formData.carrera) ||
      isEmpty(formData.password) ||
      isEmpty(formData.confirmPassword)
    ) {
      setError({
        nombre: "Campo obligatorio*",
        primerApellido: "Campo obligatorio*",
        email: "Campo obligatorio*",
        telefono: "Campo obligatorio*",
        cuatrimestre: "Campo obligatorio*",
        grupo: "Campo obligatorio*",
        carrera: "Campo obligatorio*",
        password: "Campo obligatorio*",
        confirmPassword: "Campo obligatorio*",
      });
    } else {
      setError({
        nombre: "",
        primerApellido: "",
        email: "",
        telefono: "",
        cuatrimestre: "",
        grupo: "",
        carrera: "",
        confirmPassword: "",
        password: "",
      });
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
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
          placeholder="20203tn087@utez.edu.mx"
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
          label="Teléfono:*"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          secureTextEntry={showPassword}
          onChange={(event) => change(event, "telefono")}
          errorMessage={error.telefono}
        />
        <Input
          placeholder="5"
          rightIcon={
            <Icon
              type="material-community"
              name={"star"}
              size={20}
              color="#2f2c79"
            />
          }
          label="Cuatrimestre:*"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          secureTextEntry={showPassword}
          onChange={(event) => change(event, "telefono")}
          errorMessage={error.telefono}
        />
        <Input
          placeholder="C"
          rightIcon={
            <Icon
              type="material-community"
              name={"account-multiple"}
              size={20}
              color="#2f2c79"
            />
          }
          label="Grupo:*"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          secureTextEntry={showPassword}
          onChange={(event) => change(event, "telefono")}
          errorMessage={error.telefono}
        />
        <Input
          placeholder="TICS"
          rightIcon={
            <Icon
              type="material-community"
              name={"book"}
              size={20}
              color="#2f2c79"
            />
          }
          label="Carrera:*"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          secureTextEntry={showPassword}
          onChange={(event) => change(event, "telefono")}
          errorMessage={error.telefono}
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
          label="Contraseña:*"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          secureTextEntry={showPassword}
          onChange={(event) => change(event, "password")}
          errorMessage={error.password}
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
          label="Confirmar contraseña:*"
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
  },
  btnContainer: {
    width: "70%",
  },
  btn: {
    color: "#fff",
    backgroundColor: "#06986a",
  },
});
