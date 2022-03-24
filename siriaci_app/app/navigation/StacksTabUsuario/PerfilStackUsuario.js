import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileUsuario from "../../screens/profile/ProfileUsuario";
import ForgotPassword from "../../screens/profile/ForgotPassword";
import CreateAccount from "../../screens/profile/CreateAccount";
import ComunidadForm from "../../components/profile/ComunidadForm";
import EstudiantesForm from "../../components/profile/EstudiantesForm";
import ResponsableForm from "../../components/profile/ResponsableForm"

const Stack = createStackNavigator();

export default function PerfilStackUsuario() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#131c46" },
      }}
    >
      <Stack.Screen
        name="perfil"
        component={ProfileUsuario}
        options={{ title: "Perfil" }}
      />
      <Stack.Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={{ title: "Has olvidado tu contraseña" }}
      />

      <Stack.Screen
        name="createAccount"
        component={CreateAccount}
        options={{ title: "Crear cuenta" }}
      />

      <Stack.Screen
        name="estudiantesForm"
        component={EstudiantesForm}
        options={{ title: "Registro Estudiante" }}
      />
      <Stack.Screen
        name="comunidadForm"
        component={ComunidadForm}
        options={{ title: "Registro Comunidad" }}
      />
      <Stack.Screen
        name="responsableForm"
        component={ResponsableForm}
        options={{ title: "Registro Responsable" }}
      />
    </Stack.Navigator>
  );
}
