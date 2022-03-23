import { StyleSheet, Text, View, Picker } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ComunidadForm from "../../components/profile/ComunidadForm";
import EstudiantesForm from "../../components/profile/EstudiantesForm";
import ResponsableForm from "../../components/profile/ResponsableForm";

export default function CreateAccount(props) {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("null");
  console.log(selectedValue); 
  if (selectedValue === "Comunidad Utez"){ 
    <ComunidadForm navigation={navigation} />
  } else if (selectedValue ==="Comunidad Externa") {
    <ComunidadForm navigation={navigation} />
  } else if(selectedValue === "Responsable de aspecto"){
  <ResponsableForm navigation={navigation} />
  }else if (selectedValue ==="Estudiante") {
    <EstudiantesForm navigation={navigation} />
  } else if(selectedValue === "Administrador"){
    <ComunidadForm navigation={navigation} />
  }
/**
 * <Text style={styles.textAspect}>Selecciona el Rol al que perteneces</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 60, width: 250 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Selecciona Aspecto" value="Selecciona" />
        <Picker.Item label="Comunidad Utez" value="Comunidad Utez" />
        <Picker.Item label="Comunidad externa" value="Comunidad Externa" />
        <Picker.Item
          label="Responsable de aspecto"
          value="Responsable de aspecto"
        />
        <Picker.Item label="Estudiante" value="Estudiante" />
        <Picker.Item label="Administrador" value="Administrador" />
      </Picker>

      <ComunidadForm navigation={navigation} />
       <ResponsableForm navigation={navigation} />
       <EstudiantesForm navigation={navigation} />
 * 
 */
  return (
    <View style={styles.container}>
   <Text style={styles.textAspect}>Selecciona el Rol al que perteneces</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 60, width: 250 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Selecciona Aspecto" value="Selecciona" />
        <Picker.Item label="Comunidad Utez" value="Comunidad Utez" />
        <Picker.Item label="Comunidad externa" value="Comunidad Externa" />
        <Picker.Item
          label="Responsable de aspecto"
          value="Responsable de aspecto"
        />
        <Picker.Item label="Estudiante" value="Estudiante" />
        <Picker.Item label="Administrador" value="Administrador" />
      </Picker>
    </View>
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
