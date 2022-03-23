
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CapsuleStackUsuario from '../navigation/StacksTabUsuario/CapsuleStackUsuario';
import ReportStackUsuario from '../navigation/StacksTabUsuario/ReportStackUsuario';
import PerfilStackUsuario from '../navigation/StacksTabUsuario/PerfilStackUsuario';
import { Icon } from 'react-native-elements';


//puede ver perfil
//capsulas
//reportes

const Tab = createBottomTabNavigator();
export default function NavigationUsuario() {
    return (
        <NavigationContainer>
        <Tab.Navigator
            initialRouteName='perfil'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color),
                tabBarActiveTintColor: '#131c46',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            })}
        >

            <Tab.Screen
                name='capsule'
                component={CapsuleStackUsuario}
                options={{ title: "Capsula informativa" }}
            />
            <Tab.Screen
                name='report'
                component={ReportStackUsuario}
                options={{ title: "Reporte" }}
            />
            <Tab.Screen
                name='perfil'
                component={PerfilStackUsuario}
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
    case "perfil":
        iconName = "account-outline"
        break;
}
return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
)
}