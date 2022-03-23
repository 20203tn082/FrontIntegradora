import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import ProfileStack from '../navigation/StacksTabPublico/InicioSesionStack';
import CapsuleStackAdmin from '../navigation/StacksTabAdmin/CapsuleStackAdmin';
import ReportStackAdmin from '../navigation/StacksTabAdmin/ReportStackAdmin';
import UsuarioStackAdmin from '../navigation/StacksTabAdmin/UsuarioStackAdmin';
import PerfilStackAdmin from '../navigation/StacksTabAdmin/PerfilStackAdmin';


//debe ver capsulas y dentro de esto generar más capsulas
// ver reportes 
//generar reporte PDF
//registrar usuarios y verlos
//perfil


const Tab = createBottomTabNavigator();
export default function NavigationAdmin() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='profile'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    tabBarActiveTintColor: '#131c46',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false
                })}
            >

                <Tab.Screen
                    name='capsule'
                    component={CapsuleStackAdmin}
                    options={{ title: "Capsula informativa" }}
                />
                <Tab.Screen
                    name='report'
                    component={ReportStackAdmin}
                    options={{ title: "Reporte" }}
                />
                <Tab.Screen
                    name='usuario'
                    component={UsuarioStackAdmin}
                    options={{ title: "Usuarios" }}
                />

                <Tab.Screen
                    name='perfil'
                    component={PerfilStackAdmin}
                    options={{ title: "Perfil" }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        case "capsule":
            iconName = "information"
            break;

        case "report":
            iconName = "text-box"
            break;
        case "usuario":
            iconName = "account-multiple"
            break;
        case "perfil":
            iconName = "account-outline"
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    )
}

