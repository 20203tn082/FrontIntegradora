import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Picker } from "react-native";
import React, { useCallback, useState } from "react";
import { Input, Button, Icon } from "react-native-elements"
import { includes, isEmpty, map } from "lodash";
import { useFocusEffect } from "@react-navigation/native";

export default function EstudiantesForm(props) {
  const { navigation, toastRef, divisiones } = props;
  const [carreras, setCarreras] = useState([])
  const [carrera, setCarrera] = useState(false)
  const [division, setDivision] = useState(false)
  const [loading, setLoading] = useState(false);
  const [grupo, setGrupo] = useState(false)
  const [cuatrimestre, setCuatrimestre] = useState(false)
  const [carreraSeleccionada, setCarreraSeleccionada] = useState("null")
  const [divisionSeleccionada, setDivisionSeleccionada] = useState("1")
  const getCarreras = async () => {
    const response = await fetch(`http://192.168.0.8:8080/api/carrera/${parseInt(divisionSeleccionada)}`, { method: "GET", headers: { "Content-Type": "application/json" } })
    return response.json()
  }

  useFocusEffect(
    //useCallback ocupa la misma estructura que la de useEffect
    useCallback(() => {
      //con el .then obtenemos el array y lo guardamos en response
      getCarreras().then((response) => {
        setCarreras(response.contenido);
      })
    }, [divisionSeleccionada])
  )
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    email: "",
    telefono: "",
    password: "",
    confirmPassword: "",
    cuatrimestre: "",
    usuario: 1,
    grupo: "",
    carrera: "",

  });
  const [error, setError] = useState({
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    email: "",
    telefono: "",
    password: "",
    confirmPassword: "",
    cuatrimestre: "",
    usuario: "",
    grupo: "",
    carrera: "",

  });

  const change = (event, type) => {
    if (includes(type, "carrera") || includes(type, "grupo") || includes(type, "cuatrimestre")) {
      setFormData({ ...formData, [type]: event });
    } else {
      setFormData({ ...formData, [type]: event.nativeEvent.text });

    }
    //console.log(formData);
  };

  const registrer = () => {
    if (includes(formData.email, "@utez.edu.mx") && (includes(formData.email, "1") || includes(formData.email, "2") || includes(formData.email, "3")
      || includes(formData.email, "4") || includes(formData.email, "5") || includes(formData.email, "6") || includes(formData.email, "8") || includes(formData.email, "9") || includes(formData.email, "0"))) {

      if (isEmpty(formData.nombre) || isEmpty(formData.primerApellido) || isEmpty(formData.email) || isEmpty(formData.telefono)
        || isEmpty(formData.cuatrimestre) || isEmpty(formData.grupo) || isEmpty(formData.carrera) || isEmpty(formData.password) || isEmpty(formData.confirmPassword)) {
        if (isEmpty(formData.nombre)) {
          setError((error) => ({ ...error, nombre: "Campo Obligatorio" }))
        } else {
          setError((error) => ({ ...error, nombre: "" }))
        }
        if (isEmpty(formData.primerApellido)) {
          setError((error) => ({ ...error, primerApellido: "Campo Obligatorio" }))
        } else {
          setError((error) => ({ ...error, primerApellido: "" }))
        }
        if (isEmpty(formData.email)) {
          setError((error) => ({ ...error, email: "Campo Obligatorio" }))
        } else {
          setError((error) => ({ ...error, email: "" }))
        }
        if (isEmpty(formData.telefono)) {
          setError((error) => ({ ...error, telefono: "Campo Obligatorio" }))
        } else {
          if (formData.telefono.length > 10) {
            setError((error) => ({ ...error, telefono: "Deben ser maximo 10 caracteres" }))
          } else {
            setError((error) => ({ ...error, telefono: "" }))
          }
        }
        if (isEmpty(formData.cuatrimestre)) {
          setError((error) => ({ ...error,  cuatrimestre: "Campo Obligatorio" }))
        } else {
          console.log("Hola en cuatrimestre")
          setError((error) => ({ ...error,  cuatrimestre: ""  }))
        }
        if (isEmpty(formData.grupo)) {
          setError((error) => ({ ...error, grupo: "Campo Obligatorio" }))
        } else {
          if (formData.grupo.length = 1) {
            setError((error) => ({ ...error,  grupo: ""  }))
          } else {
            setError((error) => ({ ...error,  grupo: "Solo un caracter"  }))
          }
        }
       
        if (isEmpty(formData.carrera)) {
          setError((error) => ({ ...error,  carrera: "Campo Obligatorio"  }))
        } else {
          setError((error) => ({ ...error,  carrera: "" } ))
        }
        if (isEmpty(formData.password)) {
          setError((error) => ({ ...error, password: "Campo Obligatorio" }))
        } else {
          if (formData.password.length < 8) {
            setError((error) => ({ ...error, password: "Al menos 8 caracteres" }))
          } else {
            setError((error) => ({ ...error, password: "" }))
          }
        }

        if (isEmpty(formData.confirmPassword)) {
          setError((error) => ({ ...error, confirmPassword: "Campo Obligatorio" }))
        } else {
          if (formData.confirmPassword.length < 8) {
            setError((error) => ({ ...error, confirmPassword: "Al menos 8 caracteres" }))
          } else {
            if (includes(formData.confirmPassword, formData.password)) {
              setError((error) => ({ ...error, confirmPassword: "" }))
            } else {
              setError((error) => ({ ...error, confirmPassword: "Las contraseñas no coinciden" }))
            }
          }
        }


      }
    } else {
      if (isEmpty(formData.nombre)) {
        setError((error) => ({ ...error, nombre: "Campo Obligatorio" }))
      } else {
        setError((error) => ({ ...error, nombre: "" }))
      }
      if (isEmpty(formData.primerApellido)) {
        setError((error) => ({ ...error, primerApellido: "Campo Obligatorio" }))
      } else {
        setError((error) => ({ ...error, primerApellido: "" }))
      }
      if (isEmpty(formData.email)) {
        setError((error) => ({ ...error, email: "Campo Obligatorio" }))
      } else {
        if (!includes(formData.email, "@")) {
          setError((error) => ({ ...error, email: "No tiene formato de correo" }))
        } else {
          setError((error) => ({ ...error, email: "" }))
        }
      }
      if (isEmpty(formData.telefono)) {
        setError((error) => ({ ...error, telefono: "Campo Obligatorio" }))
      } else {
        if (formData.telefono.length > 10) {
          setError((error) => ({ ...error, telefono: "Deben ser maximo 10 caracteres" }))
        } else {
          setError((error) => ({ ...error, telefono: "" }))
        }
      }
      if (isEmpty(formData.password)) {
        setError((error) => ({ ...error, password: "Campo Obligatorio" }))
      } else {
        if (formData.password.length < 8) {
          console.log("Hola entro el menor a ")
          setError((error) => ({ ...error, password: "Al menos 8 caracteres" }))
        } else {
          setError((error) => ({ ...error, password: "" }))
        }
      }

      if (isEmpty(formData.confirmPassword)) {
        setError((error) => ({ ...error, confirmPassword: "Campo Obligatorio" }))
      } else {
        if (formData.confirmPassword.length < 8) {
          setError((error) => ({ ...error, confirmPassword: "Al menos 8 caracteres" }))
        } else {

          if (includes(formData.confirmPassword, formData.password)) {
            setError((error) => ({ ...error, confirmPassword: "" }))
          } else {
            setError((error) => ({ ...error, confirmPassword: "Las contraseñas no coinciden" }))
          }
        }
      }


    }
  };

  const verificarCorreo = (event) => {
    console.log("valor llegado ", event)
    let correo = event.nativeEvent.text;
    if (includes(correo, "@utez.edu.mx") && (includes(correo, "1") || includes(correo, "2") || includes(correo, "3")
      || includes(correo, "4") || includes(correo, "5") || includes(correo, "6") || includes(correo, "8") || includes(correo, "9") || includes(correo, "0"))) {
      console.log("Estudiante")
      setCarrera(true);
      setDivision(true)
      setCuatrimestre(true);
      setGrupo(true);
    } else {
      setCarrera(false);
      setCuatrimestre(false);
      setGrupo(false);
      setDivision(false)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Input
          placeholder="Araceli"
          key="nombre"
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
          onChange={(event) => {
            change(event, "email")
            verificarCorreo(event);
          }}
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
          onChange={(event) => change(event, "confirmPassword")}
          errorMessage={error.confirmPassword}
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
          onChange={(event) => change(event, "telefono")}
          errorMessage={error.telefono}
        />
        {
          division ? <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 4, marginLeft: 8 }}>División:*</Text> : null
        }
        {division ? (<Picker
          selectedValue={divisionSeleccionada}
          style={{ height: 60, width: 250, marginBottom: 20 }}
          onValueChange={(itemValue, itemIndex) => setDivisionSeleccionada(itemValue)
          }
        >
          {map(divisiones, (item, i) => {
            return (<Picker.Item label={item.nombre} value={item.id} key={i} />)
          })
          }
        </Picker>) : null}

        {
          carrera ? <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 4, marginLeft: 8 }}>Carrera:*</Text> : null
        }
        {carrera ? (
          <Picker
            selectedValue={carreraSeleccionada}
            style={{ height: 60, width: 250, marginBottom: 20 }}
            onValueChange={(itemValue, itemIndex) => {
              setCarreraSeleccionada(itemValue)
              change(itemValue, "carrera")
            }}
            errorMessage={error.carrera}
          >
            {map(carreras, (item, i) => {
              return (<Picker.Item label={item.nombre} value={item.id} key={i} />)
            })
            }
          </Picker>) : null}

        {cuatrimestre ? (<Input
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
          onChange={(event) => change(event, "cuatrimestre")}
          errorMessage={error.cuatrimestre}
        />) : null}


        {grupo ? (<Input
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
          onChange={(event) => change(event, "grupo")}
          errorMessage={error.grupo}
        />) : null}

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
    marginLeft: 130,
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "#06986a",
  },
  labelInput: {
    color: "black"
  }
});
