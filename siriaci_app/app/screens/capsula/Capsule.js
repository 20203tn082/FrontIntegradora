import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useCallback  } from 'react';
import ListCapsulas from '../../navigation/Capsula/ListCapsulas';
import { useFocusEffect } from '@react-navigation/native';

export default function Capsule(props) {
  const {navigation} = props;
  const [capsulas, setCapsulas] = useState([])

  const getImages = async() =>{
    const response = await fetch("http://192.168.111.103:8080/api/capsula/", {method: "GET", headers:{"Content-Type": "application/json"}})
    return response.json()
  }
  useFocusEffect(
    //useCallback ocupa la misma estructura que la de useEffect
    useCallback(() =>{
      //con el .then obtenemos el array y lo guardamos en response
      getImages().then((response) =>{
        setCapsulas(response.contenido);
      }) 
    }, [])
  )

  

  return (
    <View>
      <ListCapsulas capsulas= {capsulas} navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({});
