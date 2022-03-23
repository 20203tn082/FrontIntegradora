import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import CapsuleStack from './StacksTabPublico/CapsuleStack' 
import ProfileStack from './StacksTabPublico/InicioSesionStack';
import ReportStack from './ReportStack';
const Tab = createBottomTabNavigator();
export default function Navigation() {
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
                    component={CapsuleStack}
                    options={{ title: "Inicio" }}
                />
                <Tab.Screen
                    name='report'
                    component={ReportStack}
                    options={{ title: "Reporte" }}
                />

                <Tab.Screen
                    name='profile'
                    component={ProfileStack}
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
            iconName = "home"
            break;

        case "report":
            iconName = "text-box"
            break;

        case "profile":
            iconName = "account-outline"
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    )
}
