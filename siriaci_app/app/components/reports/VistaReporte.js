import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRef } from 'react'
import Toast from 'react-native-easy-toast';
import CreateReport from './CreateReport';

export default function VistaReporte(props) {
    const {navigation} = props
    const toastRef = useRef();
  return (
    <View>
      <CreateReport navigation={navigation} toastRef={toastRef}/>
      <Toast ref={toastRef} opacity={0.9} position="center"/>
    </View>
  )
}

const styles = StyleSheet.create({})