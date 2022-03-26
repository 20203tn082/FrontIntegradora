import { StyleSheet, Text, View, Picker } from "react-native";
import React, { useCallback, useState } from "react";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import ComunidadForm from "../../components/profile/ComunidadForm";
import EstudiantesForm from "../../components/profile/EstudiantesForm";
import ResponsableForm from "../../components/profile/ResponsableForm";

export default function CreateAccount(props) {
  const {navigation}=props
  const [carreras, setCarreras] = useState([])
  const [capsulas, setCapsulas] = useState([])
  const [divisiones, setDivisiones] = useState([])

  const getCarreras = async() =>{
    const response = await fetch("http://192.168.111.103:8080/api/carrera/", {method: "GET", headers:{"Content-Type": "application/json"}})
    return response.json()
  }

  const getDivisiones = async() =>{
    const response = await fetch("http://192.168.111.103:8080/api/division/", {method: "GET", headers:{"Content-Type": "application/json"}})
    return response.json()
  }

  useFocusEffect(
    //useCallback ocupa la misma estructura que la de useEffect
    useCallback(() =>{
      //con el .then obtenemos el array y lo guardamos en response
      getCarreras().then((response) =>{
        setCarreras(response.contenido);
      }) 
      getDivisiones().then((response) =>{
        setDivisiones(response.contenido);
      }) 
    }, [])
  )

  return (
    <EstudiantesForm
    carreras ={carreras}
    divisiones = {divisiones}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
  },
  textAspect: {
    marginLeft: 10,
  },
});
