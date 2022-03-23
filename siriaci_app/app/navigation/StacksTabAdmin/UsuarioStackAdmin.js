import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import Usuario from '../../screens/usuario/Usuario';

const Stack = createStackNavigator();
export default function UsuarioStackAdmin() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#131c46' }
            }}
        >
            <Stack.Screen
                name="usuario"
                component={ Usuario }
                options={{ title: "Usuarios" }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})