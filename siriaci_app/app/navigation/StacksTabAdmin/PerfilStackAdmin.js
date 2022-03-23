import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Profile from "../../screens/profile/InicioSesion";
import ProfileAdmin from "../../screens/profile/ProfileAdmin";
const Stack = createStackNavigator();

export default function PerfilStackAdmin() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#131c46' }
            }}
        >

            <Stack.Screen
                name="perfil"
                component={ProfileAdmin}
                options={{ title: "Perfil" }}
            />

        </Stack.Navigator>
    )
}