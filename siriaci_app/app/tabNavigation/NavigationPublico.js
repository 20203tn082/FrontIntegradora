import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import CapsuleStack from '../navigation/StacksTabPublico/CapsuleStack';
import InicioSesionStack from '../navigation/StacksTabPublico/InicioSesionStack';


const Tab = createBottomTabNavigator();

export default function NavigationPublico() {
    return (

        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="inicio" //que cuando se abra la página va a aparecer esta
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    tabBarActiveTintColor: '#131c46',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false //para que no se vea la barrita 

                })}
                //vistas que verá el usuario
                //1.- Capsulas
                //2.- Reportes generados // y con el circulo de más para que cree otro
                //reporte de incidencia
                //3.- Perfil
                
            >
                
                <Tab.Screen
                    name="capsula"
                    component={CapsuleStack}
                    options={{ title: "Capsula informativa" }}
                />

                <Tab.Screen
                    name="inicio"
                    component={InicioSesionStack}
                    options={{ title: "Inicio de sesión" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        case "capsula":
            iconName = "information"
            break;
        case "inicio":
            iconName = "login"
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    )
}
