import { StyleSheet, Text, View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import React, { useState } from "react";
import { isEmpty } from "lodash";
import Loading from "../../components/Loading";

export default function ForgotPassword(props) {
  const { navigation, toastRef } = props;
 // console.log(toastRef);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "" });
  const [error, setError] = useState({ email: "" });

  const change = (event, type) => {
    setFormData({ ...formData, [type]: event.nativeEvent.text });
    //console.log(formData);
  };

  const login = () => {
    if (isEmpty(formData.email)) {
      setError({
        email: "Campo obligatorio*",
      });
    } else {
      setError({
        email: "",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="20203tn087@utez.edu.mx"
        keyboardType="email-address"
        rightIcon={
          <Icon
            type="material-community"
            name="email-outline"
            size={20}
            color="#131c46"
          />
        }
        label="Correo Electronico:*"
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        onChange={(event) => change(event, "email")}
        errorMessage={error.email}
      />
      <Text style={styles.textCreateAccount}>
        Nota 1: Recuerda que el correo de recuperación será enviado a la
        dirección email registrada en tu cuenta.
      </Text>
      <Text style={styles.textCreateAccount}>
        Nota 2: No olvides revisar tu bandeja de correos no deseados.
      </Text>
      <Button
        title="Recuperar Contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={login}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  containerInput: {
    width: "100%",
    marginBottom: 20,
  },
  labelInput: {
    fontSize: 20,
    color: "#2f2c79",
  },
  btnContainer: {
    width: "70%",
  },
  textCreateAccount: {
    justifyContent: "center",
    marginTop: 16,

    marginLeft: 10,
    marginRight: 10,
  },
  btn: {
    marginTop: 40,
    color: "#fff",
    backgroundColor: "#06986a",
  },
});
