
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CapsuleStackResponsable from '../navigation/StacksTabResponsable/CapsuleStackResponsable';
import ReportStackResponsable from '../navigation/StacksTabResponsable/ReportStackResponsable';
import PerfilStackResponsable from '../navigation/StacksTabResponsable/PerfilStackResponsable';
import { Icon } from 'react-native-elements';

//Puede ver perfil
//Ver capsulas
//Reportes

const Tab = createBottomTabNavigator();
export default function NavigationResponsable() {
  
  
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
                component={CapsuleStackResponsable}
                options={{ title: "Capsula informativa" }}
            />
            <Tab.Screen
                name='report'
                component={ReportStackResponsable}
                options={{ title: "Reporte" }}
            />
            <Tab.Screen
                name='perfil'
                component={PerfilStackResponsable}
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