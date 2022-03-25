import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationAdmin from './app/tabNavigation/NavigationAdmin';
//import Navigation from './app/navigation/Navigation';
import NavigationPublico from './app/tabNavigation/NavigationPublico';
import NavigationResponsable from './app/tabNavigation/NavigationResponsable';
import NavigationUsuario from './app/tabNavigation/NavigationUsuario';

export default function App() {

  return (
    <NavigationPublico/>
    //
  );
}

const styles = StyleSheet.create({

  container:{
    backgroundColor:"#FFF",
    height:"100%",
    //marginTop: 40,
  },

  img:{
    width:"100%",
    height:150,
    marginTop:40,
    marginBottom:20,
  }

});

