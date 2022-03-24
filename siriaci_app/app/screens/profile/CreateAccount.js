import { StyleSheet, Text, View, Picker } from "react-native";
import React, { useState } from "react";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ComunidadForm from "../../components/profile/ComunidadForm";
import EstudiantesForm from "../../components/profile/EstudiantesForm";
import ResponsableForm from "../../components/profile/ResponsableForm";

export default function CreateAccount(props) {
  const {navigation}=props

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>Estudiante</Title>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate("estudiantesForm")}>Registrarse</Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Content>
          <Title>Comunidad Utez</Title>
        </Card.Content>
        <Card.Actions>
       
          <Button onPress={() => navigation.navigate("comunidadForm")}>Registrarse</Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Content>
          <Title>Comunidad Externa</Title>
        </Card.Content>
        <Card.Actions>
       
          <Button onPress={() => navigation.navigate("comunidadForm")}>Registrarse</Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Content>
          <Title>Responsable</Title>
        </Card.Content>
        <Card.Actions>
          <Button  onPress={() => navigation.navigate("responsableForm")} >Registrarse</Button>
        </Card.Actions>
      </Card>
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
