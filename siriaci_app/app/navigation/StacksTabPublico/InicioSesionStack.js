import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Profile from "../../screens/profile/InicioSesion";
import ProfileAdmin from "../../screens/profile/ProfileAdmin";
import InicioSesion from "../../screens/profile/InicioSesion";

const Stack = createStackNavigator();

export default function InicioSesionStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#131c46' }
            }}
        >
            <Stack.Screen
                name="profileStack"
                component={InicioSesion}
                options={{ title: "Inicio de sesión" }}
            />
           

        </Stack.Navigator>
    )
}