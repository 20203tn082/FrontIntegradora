import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input, Button, Icon } from "react-native-elements"
import { isEmpty } from "lodash";
import Loading from "../Loading";


export default function LoginForm(props) {
  const { navigation,toastRef } = props;
  console.log(toastRef);
  const [loading, setLoading] = useState(false);
  //posicion 0 get, 1 set

  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  const change = (event, type) => {
    setFormData({ ...formData, [type]: event.nativeEvent.text });
    console.log(formData);
  };

  const login = () => {
    if (isEmpty(formData.email) || isEmpty(formData.password)) {
      setError({
        email: "Campo obligatorio*",
        password: "Campo obligatorio*",
      });
    } else {
      setLoading(true);
      setError({
        email: "",
        password: "",
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
        label="Correo Electronico"
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        onChange={(event) => change(event, "email")}
        errorMessage={error.email}
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
      <Button
        title=" Iniciar Sesion"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        icon={
          <Icon name="sign-in" type="font-awesome" color="#fff" size={20} />
        }
        iconContainerStyle={{ marginRight: 10 }}
        onPress={login}
      />
        <Text style={styles.textCreateAccount1}  onPress={() => navigation.navigate("userCreate")}>
        
        ¿Has olvidado tu contraseña?
      </Text>
      <Text style={styles.textCreateAccount}  onPress={() => navigation.navigate("userCreate")}>
        <Icon
          type="material-community"
          name="account-plus"
          size={20}
          color="#2f2c79"
         
        />
        Crear Cuenta
      </Text>

      <Loading isVisible={loading} text="cargando..." />
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
  btn: {
    color: "#fff",
    backgroundColor: "#06986a",
  },
  textCreateAccount: {
    color: "#131c46",
    marginTop: 16,
  },
  textCreateAccount1: {
    color: "#131c46",
    marginTop: 16,
    textDecorationLine:"underline"
  },
  
});
