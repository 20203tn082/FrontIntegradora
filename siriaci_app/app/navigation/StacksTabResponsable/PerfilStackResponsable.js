import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import ProfileUsuario from "../../screens/profile/ProfileUsuario";
const Stack = createStackNavigator();

export default function PerfilStackResponsable() {
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
                component={ProfileUsuario}
                options={{ title: "Perfil" }}
            />

        </Stack.Navigator>
    )
}