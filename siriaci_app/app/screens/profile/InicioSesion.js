import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Loading from '../../components/Loading';
import UserLogin from './components/UserLogin';

export default function InicioSesion(props) {
   
    return (
      <UserLogin />
    )
  
}

const styles = StyleSheet.create({});
